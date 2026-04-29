# Topnoch Wealth Enterprises

Marketing website for Topnoch Wealth Enterprises LLC — credit repair, business structure, and funding strategy services. Sells two ebooks ($27 each) and a bundle ($47) via Stripe Checkout, books strategy calls via GHL calendar, and captures leads via GHL webhooks.

**Production:** [topnochwealth.com](https://topnochwealth.com)

For credentials, deployment, and operational tasks, see **[HANDOFF.md](./HANDOFF.md)**.

---

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (`@theme inline` config)
- **Payments:** Stripe Checkout (live mode)
- **CRM/Booking:** GoHighLevel (webhooks + calendar widget)
- **Hosting:** Vercel (info@topnochwealth.com account)
- **Source:** GitHub (`topnoch09/topnoch-wealth`)

> **Important:** Next.js 16 has breaking changes from earlier versions. See `AGENTS.md` — read `node_modules/next/dist/docs/` before relying on memory.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # verify before deploy
```

Required env vars in `.env.local` (see `HANDOFF.md` for actual values):

```
NEXT_PUBLIC_GHL_WEBHOOK_URL=
NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL=
NEXT_PUBLIC_GHL_CALENDAR_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

---

## Project structure

```
src/
├── app/
│   ├── (site)/                  Main public pages (shared layout w/ Header + Footer)
│   │   ├── page.tsx             Homepage (hero, video, framework, services, testimonials)
│   │   ├── about/               About Maurice
│   │   ├── services/            Services + ebook checkout buttons
│   │   ├── strategy/            Contact form + GHL calendar (was /contact)
│   │   ├── testimonials/        Client reviews
│   │   ├── portfolio/           Case studies
│   │   ├── thank-you/           Post-checkout download page (Stripe session verified)
│   │   ├── privacy/, terms/     Legal pages
│   │   └── layout.tsx           Site layout
│   ├── (marketing)/             Funnel pages (no main nav)
│   │   ├── assessment/          Fundability quiz (was /fundability)
│   │   ├── results/             Quiz results
│   │   └── layout.tsx           Minimal layout
│   ├── api/
│   │   └── checkout/route.ts    Creates Stripe Checkout sessions
│   ├── globals.css              Tailwind + brand tokens (royal blue #1A3A6B, gold #C9A84C)
│   └── layout.tsx               Root layout
├── components/
│   ├── Header.tsx               Top nav (sticky)
│   ├── Footer.tsx               Footer w/ CTA banner
│   ├── FundabilityQuiz.tsx      Multi-step quiz w/ GHL submission
│   ├── ServiceIllustrations.tsx Custom SVG illustrations
│   ├── ProductCheckout.tsx      Stripe checkout button (client component)
│   └── SocialIcons.tsx          Brand icons
└── public/
    ├── ebooks/                  PDF ebooks served on /thank-you
    ├── videos/                  Maurice's intro video (homepage)
    ├── testimonials/            Client photos
    └── logo.png, maurice-coleman.png
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with autoplaying intro video |
| `/about` | About Maurice |
| `/services` | Services + ebook checkout |
| `/testimonials` | Client testimonials |
| `/portfolio` | Case studies |
| `/strategy` | Contact form + GHL booking calendar |
| `/assessment` | Fundability quiz |
| `/results` | Quiz results page |
| `/thank-you?session_id=...` | Stripe-verified ebook download page |
| `/privacy`, `/terms` | Legal |
| `/api/checkout` | POST — creates Stripe session |

---

## Deployment

**Do not run `vercel deploy` directly** — see `HANDOFF.md` for the `.git`-hiding workaround. The `deploy.sh` script handles it correctly.

```bash
VERCEL_TOKEN=<token> bash deploy.sh
```
