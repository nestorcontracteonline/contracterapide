import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const cif = searchParams.get('cif')?.replace(/[^0-9]/g, '')

  if (!cif || cif.length < 6) {
    return NextResponse.json({ error: 'CIF invalid' }, { status: 400 })
  }

  try {
    const today = new Date().toISOString().split('T')[0]
    const res = await fetch('https://webservicesp.anaf.ro/PlatitorTvaRest/api/v8/ws/tva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify([{ cui: parseInt(cif), data: today }]),
    })

    if (!res.ok) throw new Error('ANAF API error')

    const data = await res.json()
    const company = data?.found?.[0]

    if (!company) {
      return NextResponse.json({ error: 'CIF negasit in baza ANAF' }, { status: 404 })
    }

    const denumire = company.date_generale?.denumire || ''
    const adresa = company.date_generale?.adresa || ''
    const judet = company.date_generale?.judet || ''
    const cod_postal = company.date_generale?.cod_postal || ''

    return NextResponse.json({
      cif: `RO${cif}`,
      denumire,
      adresa: [adresa, judet, cod_postal].filter(Boolean).join(', '),
      judet,
      activ: company.stare_inregistrare?.includes('ACTIV') || false,
    })
  } catch (e) {
    console.error('ANAF error:', e)
    return NextResponse.json({ error: 'Eroare la verificarea CIF-ului' }, { status: 500 })
  }
}
