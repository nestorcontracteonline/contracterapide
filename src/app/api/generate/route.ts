import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getContractById, generateContractText } from '@/lib/contracts'
import { supabaseAdmin } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

export async function POST(req: NextRequest) {
  try {
    const { contractId, formData, email, name } = await req.json()

    const contract = getContractById(contractId)
    if (!contract) {
      return NextResponse.json({ error: 'Contract type not found' }, { status: 400 })
    }

    // Generate contract text
    const contractText = generateContractText(contract, formData)
    const contractNumber = `CR-${Date.now().toString().slice(-6)}`

    // Save to Supabase
    try {
      await supabaseAdmin.from('contracts').insert({
        contract_number: contractNumber,
        contract_type: contractId,
        contract_name: contract.name,
        form_data: formData,
        customer_email: email,
        customer_name: name,
        status: 'generated',
        created_at: new Date().toISOString(),
      })
    } catch (dbError) {
      console.error('DB error (non-fatal):', dbError)
    }

    // Send email with contract
    if (email) {
      await resend.emails.send({
        from: 'ContracteRapide <noreply@contracterapide.ro>',
        to: [email],
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
    .badge { background: #dbeafe; color: #1d4ed8; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; display: inline-block; margin-bottom: 16px; }
    h1 { font-size: 22px; color: #111; margin: 0 0 8px; }
    .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
    .contract-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin: 24px 0; }
    .contract-text { font-family: 'Courier New', monospace; font-size: 12px; color: #333; white-space: pre-wrap; line-height: 1.8; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #999; font-size: 12px; }
    .cta { background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; margin: 16px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">ContracteRapide<span>.ro</span></div>
    </div>
    
    <div class="badge">Contract generat</div>
    <h1>${contract.name}</h1>
    <div class="meta">Nr. ${contractNumber} • ${new Date().toLocaleDateString('ro-RO')}</div>
    
    <p>Buna ziua ${name || ''},</p>
    <p>Contractul tau a fost generat cu succes. Il gasesti mai jos si il poti copia sau printa.</p>
    
    <div class="contract-box">
      <div class="contract-text">${contractText}</div>
    </div>
    
    <p style="color:#666; font-size:13px;">Pentru a imprima sau salva ca PDF: deschide acest email pe desktop → File → Print → Save as PDF</p>
    
    <div class="footer">
      <p>ContracteRapide.ro — Contracte legale pentru profesionisti romani</p>
      <p>Daca ai intrebari: <a href="mailto:contact@contracterapide.ro">contact@contracterapide.ro</a></p>
    </div>
  </div>
</body>
</html>
        `,
      })
    }

    return NextResponse.json({ 
      success: true, 
      contractNumber,
      contractText,
      message: email ? `Contractul a fost trimis la ${email}` : 'Contract generat'
    })

  } catch (error) {
    console.error('Generate error:', error)
    return NextResponse.json({ error: 'Eroare la generare. Incearca din nou.' }, { status: 500 })
  }
}
