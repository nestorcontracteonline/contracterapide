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

    try {
      // FIX GDPR: citește formData din pending_contracts, nu din metadata Stripe
      const pendingId = meta.pending_id
      let formData: Record<string, string> = {}
      let customerEmail = session.customer_details?.email || ''
      let customerName = ''

      if (pendingId) {
        const { data: pending } = await supabaseAdmin
          .from('pending_contracts')
          .select('*')
          .eq('id', pendingId)
          .single()

        if (pending) {
          formData = pending.form_data || {}
          customerEmail = pending.customer_email || customerEmail
          customerName = pending.customer_name || ''

          // Marchează ca folosit
          await supabaseAdmin
            .from('pending_contracts')
            .update({ used_at: new Date().toISOString() })
            .eq('id', pendingId)
        }
      }

      const contractId = meta.contract_id
      const contractNumber = meta.contractNumber
      const contractDbId = meta.contractDbId

      const contract = getContractById(contractId)
      if (!contract) {
        console.error('Contract type not found:', contractId)
        return NextResponse.json({ ok: true })
      }

      const contractText = generateContractText(contract, formData)

      // Actualizăm statusul în Supabase
      if (contractDbId) {
        await supabaseAdmin.from('contracts').update({
          status: 'paid',
          paid_at: new Date().toISOString(),
          stripe_session_id: session.id,
          contract_text: contractText,
        }).eq('id', contractDbId)
      }

      // Trimitem contractul pe email
      const resend = getResend()
      await resend.emails.send({
        from: 'ContracteRapide <noreply@contracterapide.ro>',
        to: [customerEmail],
        subject: `Contractul tău: ${contract.name} — ${contractNumber}`,
        html: `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contractul tău — ContracteRapide.ro</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

        <!-- Header -->
        <tr>
          <td style="background:#2563eb;padding:28px 32px;">
            <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;">
              ContracteRapide<span style="color:#93c5fd;">.ro</span>
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">

            <!-- Success badge -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:#dcfce7;color:#16a34a;padding:6px 16px;border-radius:20px;font-size:13px;font-weight:600;">
                  ✓ Plată confirmată
                </td>
              </tr>
            </table>

            <h1 style="margin:0 0 4px;font-size:22px;color:#111827;">${contract.name}</h1>
            <p style="margin:0 0 24px;font-size:14px;color:#6b7280;">Nr. ${contractNumber} &nbsp;·&nbsp; ${new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

            <p style="margin:0 0 16px;font-size:15px;color:#374151;">
              Bună ziua${customerName ? ', <strong>' + customerName + '</strong>' : ''},
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;">
              Contractul tău a fost generat cu succes și este disponibil în contul tău. Îl poți vizualiza, copia sau salva ca PDF direct din dashboard.
            </p>

            <!-- CTA Button -->
            <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
              <tr>
                <td style="background:#2563eb;border-radius:8px;">
                  <a href="https://contracterapide.ro/contul-meu" style="display:inline-block;padding:14px 28px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">
                    Vezi contractul în dashboard →
                  </a>
                </td>
              </tr>
            </table>

            <!-- Contract preview box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:24px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">CONTRACTUL TĂU (primele 300 de caractere)</p>
                  <p style="margin:0;font-family:'Courier New',monospace;font-size:12px;color:#374151;line-height:1.7;white-space:pre-wrap;">${contractText.substring(0, 300)}...</p>
                </td>
              </tr>
            </table>

            <!-- How to use -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border-radius:8px;margin-bottom:24px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 10px;font-size:14px;font-weight:600;color:#1e40af;">Pașii următori:</p>
                  <p style="margin:0;font-size:14px;color:#1d4ed8;line-height:1.8;">
                    1. Deschide contractul din dashboard<br>
                    2. Deschide dashboard și descarcă .docx direct<br>
                    3. Adaugă semnăturile (olograf sau electronic)<br>
                    4. Trimite clientului câte un exemplar
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:13px;color:#9ca3af;line-height:1.6;">
              Ai o problemă sau ai completat greșit datele? Răspunde la acest email în 24h și îți regenerăm contractul gratuit.
            </p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 32px;">
            <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">ContracteRapide.ro — Contracte legale pentru profesioniști români</p>
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              <a href="mailto:contact@contracterapide.ro" style="color:#6b7280;">contact@contracterapide.ro</a>
              &nbsp;·&nbsp;
              <a href="https://contracterapide.ro/faq" style="color:#6b7280;">FAQ</a>
              &nbsp;·&nbsp;
              <a href="https://contracterapide.ro/termeni" style="color:#6b7280;">Termeni</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
        `,
      })

      console.log(`✅ Contract procesat: ${contractNumber}`)
    } catch (processingError) {
      console.error('❌ Eroare procesare webhook:', processingError)
      // Return 500 → Stripe va retrimite webhookul
      return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}
