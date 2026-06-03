import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICES: Record<string, string> = {
  reset: "price_1TOinMFiqMW6Y73VLkIX0NkQ",
  blueprint: "price_1T4TfaFiqMW6Y73VHTEq2vlI",
  bundle: "price_1TQs5UFiqMW6Y73VF4d7Gnq4",
};

export async function POST(req: NextRequest) {
  const { product } = await req.json();
  const priceId = PRICES[product];

  if (!priceId) {
    return NextResponse.json({ error: "Invalid product" }, { status: 400 });
  }

  const origin = req.headers.get("origin") || "https://topnochenterprises.com";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/services#products`,
  });

  return NextResponse.json({ url: session.url });
}
