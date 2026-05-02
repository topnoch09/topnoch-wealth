import Link from "next/link";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";
import Stripe from "stripe";
import { sendPurchaseEmails } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_TO_EBOOK: Record<string, { title: string; file: string }[]> = {
  price_1TOinMFiqMW6Y73VLkIX0NkQ: [
    { title: "The Fundability Reset", file: "/ebooks/fundability-reset.pdf" },
  ],
  price_1T4TfaFiqMW6Y73VHTEq2vlI: [
    {
      title: "The Fundable Business Blueprint",
      file: "/ebooks/fundable-business-blueprint.pdf",
    },
  ],
  price_1TQs5UFiqMW6Y73VF4d7Gnq4: [
    { title: "The Fundability Reset", file: "/ebooks/fundability-reset.pdf" },
    {
      title: "The Fundable Business Blueprint",
      file: "/ebooks/fundable-business-blueprint.pdf",
    },
  ],
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return <InvalidSession />;
  }

  let ebooks: { title: string; file: string }[] = [];
  let customerEmail = "";

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items"],
    });

    if (session.payment_status !== "paid") {
      return <InvalidSession />;
    }

    customerEmail = session.customer_email || session.customer_details?.email || "";

    const priceIds =
      session.line_items?.data.map((item) => item.price?.id).filter(Boolean) ||
      [];
    const seen = new Set<string>();
    for (const priceId of priceIds) {
      const items = PRICE_TO_EBOOK[priceId as string] || [];
      for (const item of items) {
        if (!seen.has(item.file)) {
          seen.add(item.file);
          ebooks.push(item);
        }
      }
    }

    if (customerEmail && ebooks.length > 0 && !session.metadata?.email_sent) {
      sendPurchaseEmails({
        email: customerEmail,
        ebooks,
        amount: session.amount_total || 0,
      }).catch(() => null);
      stripe.checkout.sessions.update(session_id, {
        metadata: { ...(session.metadata || {}), email_sent: "true" },
      }).catch(() => null);
    }
  } catch {
    return <InvalidSession />;
  }

  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle2 size={48} className="text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Payment Successful
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Thank you for your purchase
            {customerEmail ? `. A receipt has been sent to ${customerEmail}.` : "."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2 text-center">
            Your {ebooks.length === 1 ? "Download" : "Downloads"}
          </h2>
          <p className="text-muted text-center mb-10">
            Click below to download your {ebooks.length === 1 ? "guide" : "guides"}.
          </p>

          <div className="space-y-4">
            {ebooks.map((ebook) => (
              <a
                key={ebook.file}
                href={ebook.file}
                download
                className="flex items-center justify-between gap-4 bg-surface border border-border rounded-2xl p-6 hover:shadow-lg hover:border-gold/50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shrink-0">
                    <Download size={22} className="text-royal-dark" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">{ebook.title}</h3>
                    <p className="text-muted text-sm">PDF · Click to download</p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gold group-hover:translate-x-1 transition-transform shrink-0"
                />
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted mb-4">
              Save these files to your device. You can access them anytime by
              keeping this page bookmarked.
            </p>
            <Link
              href="/strategy"
              className="inline-flex items-center gap-2 text-royal hover:text-royal-dark font-semibold transition-colors"
            >
              Want personalized help? Book a strategy call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function InvalidSession() {
  return (
    <section className="gradient-hero pt-32 pb-32 min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Session Not Found
        </h1>
        <p className="text-white/70 mb-8">
          This download link is invalid or has expired. If you just completed a
          purchase, check your email for the receipt — or contact us.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 gradient-gold text-royal-dark font-bold px-8 py-3.5 rounded-xl"
        >
          Back to Services
        </Link>
      </div>
    </section>
  );
}
