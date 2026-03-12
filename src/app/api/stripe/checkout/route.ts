import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getContractById } from '@/lib/contracts'
import { supabaseAdmin } from '@/lib/supabase'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { contractId, formData, email, name, packageType, customerName } = body

    // Pachet 10 contracte
    if (packageType === 'bundle10') {
      const stripe = getStripe()
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://contracterapide.ro'
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'ron',
            product_data: {
              name: 'Pachet 10 Contracte — ContracteRapide.ro',
              description: '10 credite pentru generare contracte. Valabile 12 luni.',
            },
            unit_amount: 9900,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: `${appUrl}/succes?session_id={CHECKOUT_SESSION_ID}&type=bundle`,
        cancel_url: `${appUrl}/`,
        customer_email: email || undefined,
        metadata: {
          package_type: 'bundle10',
          customer_email: email || '',
          customer_name: customerName || '',
        },
        locale: 'ro',
      })
      return NextResponse.json({ url: session.url })
    }

    const contract = getContractById(contractId)
    if (!contract) {
      return NextResponse.json({ error: 'Contract negăsit' }, { status: 400 })
    }

    // Salvăm contractul ca "pending" în Supabase
    const contractNumber = `CR-${Date.now().toString().slice(-6)}`
    let contractDbId: string | null = null

    try {
      const { data } = await supabaseAdmin.from('contracts').insert({
        contract_number: contractNumber,
        contract_type: contractId,
        contract_name: contract.name,
        form_data: formData,
        customer_email: email,
        customer_name: name,
        status: 'pending_payment',
        created_at: new Date().toISOString(),
      }).select('id').single()
      contractDbId = data?.id || null
    } catch (dbError) {
      console.error('DB error:', dbError)
    }

    // FIX GDPR: Salvează formData în pending_contracts (nu în metadata Stripe)
    let pendingId: string | null = null
    try {
      const { data: pending } = await supabaseAdmin
        .from('pending_contracts')
        .insert({
          contract_id: contractId,
          form_data: formData,
          customer_email: email,
          customer_name: name,
        })
        .select('id')
        .single()
      pendingId = pending?.id || null
    } catch (pendingError) {
      console.error('Pending contracts DB error:', pendingError)
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://contracterapide.ro'

    // Creăm sesiunea Stripe Checkout — fără date personale în metadata
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'ron',
            product_data: {
              name: contract.name,
              description: `Contract legal conform legislației române 2026 — Nr. ${contractNumber}`,
            },
            unit_amount: contract.price * 100, // în bani (RON x 100)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${appUrl}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/genereaza/${contractId}`,
      metadata: {
        // FIX GDPR: doar ID-uri, fără date personale
        pending_id: pendingId || '',
        contract_id: contractId,
        contract_name: contract.name,
        contractNumber,
        contractDbId: contractDbId || '',
      },
      locale: 'ro',
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Eroare la inițializarea plății.' }, { status: 500 })
  }
}
// Stripe keys updated Wed Mar 11 03:18:56 PM UTC 2026
