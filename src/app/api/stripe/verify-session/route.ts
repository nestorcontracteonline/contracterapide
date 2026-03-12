import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')
  if (!sessionId) return NextResponse.json({ valid: false }, { status: 400 })

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-02-25.clover',
    })
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      valid: session.payment_status === 'paid',
      contractName: session.metadata?.contract_name,
      email: session.customer_details?.email,
    })
  } catch {
    return NextResponse.json({ valid: false }, { status: 400 })
  }
}
