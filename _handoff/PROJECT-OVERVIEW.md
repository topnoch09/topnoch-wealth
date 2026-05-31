# Topnoch Enterprises LLC — Project Complete

Hi Maurice — your full website is live and everything is set up under your accounts. Here's what you have.

---

## Your Live Website

**https://topnochwealth.com**

### Pages
- **Home** — Hero, intro video (autoplays muted), framework, services preview, testimonials, your bio
- **About** — Your full bio and story
- **Services** — Three core services + ebook checkout (Stripe payments live)
- **Testimonials** — Client reviews
- **Portfolio** — Case studies
- **Strategy Call** (`/strategy`) — Contact form + your GHL booking calendar
- **Fundability Assessment** (`/assessment`) — Free quiz that captures leads to GHL
- **Privacy + Terms** — Legal pages

### What happens when someone buys an ebook
1. They click "Get Instant Access" or "Get the Bundle" on the Services page
2. They pay through Stripe (live mode — real charges)
3. They're taken to a secure download page that verifies their payment with Stripe
4. They get the PDF(s) instantly

### What happens when someone takes the quiz or fills the contact form
- Their info is sent directly to your **GoHighLevel** account
- You get the lead, can follow up via your normal GHL workflows

### What happens when someone books a call
- They book directly through your **GoHighLevel calendar** embedded on the Strategy page
- Booking shows up in your GHL the same as any other booking

---

## Your Accounts

Everything is owned by you, on your `info@topnochwealth.com` email.

| Service | What it's for | Login |
|---------|---------------|-------|
| **Squarespace** | Domain registrar (topnochwealth.com) | info@topnochwealth.com |
| **GitHub** (`topnoch09`) | Where the website code lives | info@topnochwealth.com |
| **Vercel** | Where the website is hosted | info@topnochwealth.com |
| **Stripe** | Payments for ebooks | info@topnochwealth.com |
| **GoHighLevel** | CRM, calendar bookings, lead capture | (your existing GHL login) |

You don't need to touch any of these for the site to keep running. They're all connected and live.

---

## Pricing & Products

Currently set up in Stripe:

| Product | Price |
|---------|-------|
| The Fundability Reset (ebook) | $27 |
| The Fundable Business Blueprint (ebook) | $27 |
| The Complete Bundle (both ebooks) | $47 |

To change pricing, contact whoever is maintaining the site for you — see HANDOFF.md.

---

## What's in This Folder

- **`PROJECT-OVERVIEW.md`** — this document
- **`HANDOFF.md`** — full technical maintenance guide (for any developer who takes over)
- **`topnoch-services-qr.png`** — branded QR code that links straight to your ebook page (for your slide decks/marketing)

---

## If You Hire Someone to Maintain or Edit the Site

Hand them the `HANDOFF.md` file. It contains everything they need:

- Where the code lives (GitHub repo)
- How to deploy changes
- All environment variables and what they do
- How Stripe checkout works and how to add/edit products
- How to update pricing, content, the calendar, the lead webhooks
- Common gotchas (especially around the Vercel deploy process)

They will need fresh API tokens generated from each platform — none are written into the doc for security. They can request those from you when they start.

---

## Questions

If anything stops working or you want to add features, get in touch.
