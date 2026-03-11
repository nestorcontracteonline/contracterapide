import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'
import { getContractById, generateContractText } from '@/lib/contracts'
import { supabaseAdmin } from '@/lib/supabase'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-02-25.clover',
  })
}
function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  const stripe = getStripe()
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature error:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const meta = session.metadata!

    const contractId = meta.contractId
    const contractNumber = meta.contractNumber
    const contractDbId = meta.contractDbId
    const customerName = meta.customerName
    const customerEmail = meta.customerEmail
    const formData = JSON.parse(meta.formData || '{}')

    const contract = getContractById(contractId)
    if (!contract) {
      console.error('Contract type not found:', contractId)
      return NextResponse.json({ ok: true })
    }

    const contractText = generateContractText(contract, formData)

    // Actualizăm statusul în Supabase
    try {
      if (contractDbId) {
        await supabaseAdmin.from('contracts').update({
          status: 'paid',
          paid_at: new Date().toISOString(),
          stripe_session_id: session.id,
          contract_text: contractText,
        }).eq('id', contractDbId)
      }
    } catch (dbErr) {
      console.error('DB update error:', dbErr)
    }

    // Trimitem contractul pe email
    try {
      const resend = getResend()
      await resend.emails.send({
        from: 'ContracteRapide <noreply@contracterapide.ro>',
        to: [customerEmail],
        subject: `Contractul tău: ${contract.name} — ${contractNumber}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
    .logo { font-size: 20px; font-weight: 700; color: #111; }
    .logo span { color: #2563eb; }
    .badge { background: #dcfce7; color: #16a34a; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; display: inline-block; margin-bottom: 16px; }
    h1 { font-size: 22px; color: #111; margin: 0 0 8px; }
    .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
    .contract-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin: 24px 0; }
    .contract-text { font-family: 'Courier New', monospace; font-size: 12px; color: #333; white-space: pre-wrap; line-height: 1.8; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">ContracteRapide<span>.ro</span></div>
    </div>
    <div class="badge">Plată confirmată</div>
    <h1>${contract.name}</h1>
    <div class="meta">Nr. ${contractNumber} • ${new Date().toLocaleDateString('ro-RO')}</div>
    <p>Bună ziua${customerName ? ' ' + customerName : ''},</p>
    <p>Mulțumim pentru achiziție! Contractul tău a fost generat și este gata de semnat.</p>
    <div class="contract-box">
      <div class="contract-text">${contractText}</div>
    </div>
    <p style="color:#666; font-size:13px;">Pentru a salva ca PDF: File → Print → Save as PDF</p>
    <div class="footer">
      <p>ContracteRapide.ro — Contracte legale pentru profesioniști români</p>
      <p>Întrebări? <a href="mailto:contact@contracterapide.ro">contact@contracterapide.ro</a></p>
    </div>
  </div>
</body>
</html>
        `,
      })
    } catch (emailErr) {
      console.error('Email error:', emailErr)
    }

    console.log(`✅ Contract ${contractNumber} plătit și trimis la ${customerEmail}`)
  }

  return NextResponse.json({ received: true })
}
