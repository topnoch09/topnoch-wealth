# Topnoch Enterprises LLC — Project Handoff

Everything needed to maintain, deploy, and modify this site. Stored in the repo for the next owner/dev.

> Brand change (May 2026): company renamed from **Topnoch Wealth Enterprises LLC** → **Topnoch Enterprises LLC**. The domain `topnochwealth.com` is retained, so all URLs, emails, GitHub repo, and Vercel project names remain unchanged.

---

## 1. Accounts & access

All services are owned by **Maurice Coleman** under `info@topnochwealth.com`.

| Service | Account | Login | Where to get credentials |
|---------|---------|-------|--------------------------|
| Domain | Squarespace | info@topnochwealth.com | Maurice |
| GitHub | `topnoch09` | info@topnochwealth.com | Maurice (PAT regen if needed) |
| Vercel | `info-67975496` | info@topnochwealth.com | Maurice (token regen if needed) |
| Stripe | Live mode active | info@topnochwealth.com | Maurice (Dashboard → Developers → API keys) |
| GoHighLevel | Topnoch Enterprises | info@topnochwealth.com | Maurice (location ID `ElDZL0NnSc6A9w2OzNBq`) |

> **All tokens used during the original build live on the original developer's machine.** Anyone taking over should request fresh tokens directly from Maurice via each platform's "Personal Access Token" / "API Key" interface and store them locally — never commit them to the repo.

---

## 2. Domain (DNS — Squarespace)

Domain: **topnochwealth.com** — registered with Squarespace, DNS managed there.

DNS records currently set:

| Host | Type | Value | Purpose |
|------|------|-------|---------|
| `@` | A | `76.76.21.21` | Apex → Vercel |
| `www` | CNAME | `cname.vercel-dns.com` | www → Vercel |
| `_vercel` | TXT | `vc-domain-verify=topnochwealth.com,69c0a4775cc6854187db` | Vercel apex verification |
| `_vercel` | TXT | `vc-domain-verify=www.topnochwealth.com,a94671b56a255871b34c` | Vercel www verification |

If you ever need to reverify or rotate, the values come from **Vercel → Project → Settings → Domains**.

SSL is handled automatically by Vercel.

---

## 3. Hosting (Vercel)

- **Project:** `topnoch-wealth` (ID: `prj_R4s0BF9GGMf1BGKOqqbVIxXytkAu`)
- **Team:** `info-67975496` (ID: `team_eTx8DDhbZwKRCX9l9IKmFdCM`)
- **Production URL alias:** `topnochwealth.com`, `www.topnochwealth.com`, `topnoch-wealth-seven.vercel.app`

### Environment variables (set in Vercel dashboard, also in `.env.local` for local dev)

| Key | Purpose |
|-----|---------|
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | Quiz submissions → GHL |
| `NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL` | Contact form submissions → GHL |
| `NEXT_PUBLIC_GHL_CALENDAR_ID` | GHL calendar embed (`YrvCpy7Ksoj8vLN3PbfE`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe checkout (client-side) |
| `STRIPE_SECRET_KEY` | Stripe API + session verification (server) |
| `RESEND_API_KEY` | Resend transactional email API |
| `RESEND_FROM_EMAIL` | Sender for outbound emails (e.g. `Topnoch Enterprises <hello@topnochwealth.com>`) |
| `NOTIFY_EMAIL` | Internal notification recipient (Maurice's inbox) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (e.g. `G-XXXXXXX`) — analytics auto-disabled if blank |

### Deploying

> **Critical:** The Vercel CLI detects the GitHub remote and tries to build from GitHub instead of uploading local files, which causes silent failures. Always hide `.git` before deploying.

Use the included `deploy.sh`:

```bash
VERCEL_TOKEN=<your-vercel-token> bash deploy.sh
```

Or manually:

```bash
mv .git .git-backup
npx vercel deploy --prod --token <token> --yes
mv .git-backup .git
```

After every deploy, verify: `curl -o /dev/null -w "%{http_code}\n" https://topnochwealth.com`

---

## 4. Source control (GitHub)

- **Repo:** `https://github.com/topnoch09/topnoch-wealth`
- **Branch:** `main`
- **Push protection:** ON — GitHub will block pushes containing secrets. If a push is rejected, the secret must be removed from **all** commits in history (use `git filter-branch` or `git filter-repo`), not just the latest.

There is no auto-deploy GitHub → Vercel because of the gitDirty issue described above. Pushes to GitHub are for source history; deploys are explicit via `deploy.sh`.

---

## 5. Payments (Stripe)

**Live mode is active.** Real charges happen on every successful checkout.

### Products & Prices

| Product | Price ID | Amount |
|---------|----------|--------|
| The Fundability Reset | `price_1TOinMFiqMW6Y73VLkIX0NkQ` | $27.00 |
| The Fundable Business Blueprint | `price_1T4TfaFiqMW6Y73VHTEq2vlI` | $27.00 |
| The Complete Bundle | `price_1TQs5UFiqMW6Y73VF4d7Gnq4` | $47.00 |

Price IDs are hardcoded in two places (must be updated in both if changed):

1. `src/app/api/checkout/route.ts` — `PRICES` object
2. `src/app/(site)/thank-you/page.tsx` — `PRICE_TO_EBOOK` mapping (also maps to PDF files)

### Checkout flow

1. Customer clicks "Get Instant Access" / "Get the Bundle" on `/services`
2. `ProductCheckout` component POSTs to `/api/checkout` with the product key (`reset`, `blueprint`, or `bundle`)
3. API creates a Stripe Checkout session and returns the URL
4. Customer pays at Stripe-hosted checkout
5. Stripe redirects to `/thank-you?session_id={CHECKOUT_SESSION_ID}`
6. Server-side, the page fetches the session from Stripe, verifies `payment_status === "paid"`, and shows the appropriate ebook download links

### To change pricing or add a product

1. Create the new product/price in Stripe Dashboard
2. Add the price ID to `src/app/api/checkout/route.ts`
3. Add the entry to `src/app/(site)/thank-you/page.tsx` mapping it to the PDF file in `public/ebooks/`
4. If it's a new ebook, drop the PDF in `public/ebooks/`
5. Update the services page UI

### Refunds, disputes, customer support

Handle in **Stripe Dashboard → Payments**. The site doesn't have a customer portal — this is a one-time-purchase model.

---

## 6. Ebook delivery

PDFs live in `public/ebooks/` and are served as static files by Vercel. Currently:

- `public/ebooks/fundability-reset.pdf` (~18MB)
- `public/ebooks/fundable-business-blueprint.pdf` (~17MB)

**The URLs are technically guessable** if someone knows the file paths. The protection is via the thank-you page only displaying the link after Stripe session verification — but a determined user could navigate directly to `/ebooks/fundability-reset.pdf`.

If stronger protection is needed, move PDFs out of `public/` and serve them through an API route that re-verifies the Stripe session on each request.

---

## 7. CRM & booking (GoHighLevel)

- **Location ID:** `ElDZL0NnSc6A9w2OzNBq`
- **Active calendar:** "Schedule an Appointment" (ID: `YrvCpy7Ksoj8vLN3PbfE`)

### Lead capture webhooks

Two GHL inbound webhooks receive form data:

| Form | Webhook env var |
|------|----------------|
| Fundability quiz (`/assessment`) | `NEXT_PUBLIC_GHL_WEBHOOK_URL` |
| Contact form (`/strategy`) | `NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL` |

URLs follow the pattern `https://services.leadconnectorhq.com/hooks/{LOCATION_ID}/webhook-trigger/{HOOK_ID}` and are configured per-form in GHL → Automations.

### Booking calendar

Embedded as iframe on `/strategy`. The iframe URL is `https://api.leadconnectorhq.com/widget/booking/{NEXT_PUBLIC_GHL_CALENDAR_ID}` plus the `form_embed.js` script loaded dynamically.

If the calendar ever needs to change:
1. In GHL → Calendars → click the three dots → Share → Embed Code
2. Copy the calendar ID from the embed URL (`/widget/booking/XXXXX`)
3. Update `NEXT_PUBLIC_GHL_CALENDAR_ID` in Vercel env vars
4. Redeploy (env var only takes effect on a fresh build)

---

## 8. Common content updates

Most marketing copy lives directly in the page files. No CMS — edits are code edits.

| Want to change... | Edit |
|-------------------|------|
| Homepage hero / framework / video section | `src/app/(site)/page.tsx` |
| About page bio | `src/app/(site)/about/page.tsx` |
| Service descriptions | `src/app/(site)/services/page.tsx` (`services` array) |
| Ebook prices/titles displayed | `src/app/(site)/services/page.tsx` (`products` array) — must match Stripe |
| Testimonials | `src/app/(site)/testimonials/page.tsx` |
| Header nav links | `src/components/Header.tsx` |
| Footer links / social URLs | `src/components/Footer.tsx` |
| Quiz questions/scoring | `src/components/FundabilityQuiz.tsx` |
| Brand colors | `src/app/globals.css` (look for `--color-royal`, `--color-gold`) |
| Logo | `public/logo.png` (transparent PNG) |

After any code change: `npm run build` to verify, then run `deploy.sh` to push live.

---

## 9. Recurring concerns

### Push protection blocking commits

If a `git push` is rejected with "secret detected": **never** force-push around it. Either remove the secret from history or follow the GitHub-provided unblock URL (only when the value is intentionally public).

### Stripe live keys committed

`.env.local` is gitignored. **Never commit** files containing `sk_live_*`. Vercel handles secrets via the dashboard env vars.

### Vercel deploys silently failing

If `npx vercel deploy` succeeds but the site doesn't actually update, you forgot to hide `.git`. See section 3.

### `NEXT_PUBLIC_*` env var changes not appearing

These are baked into the build at compile time. Setting a new value in Vercel and not redeploying = no effect. Redeploy after any `NEXT_PUBLIC_*` change.

---

## 10. Useful commands

```bash
# Local dev
npm run dev

# Production build (test before deploy)
npm run build

# Deploy to production
VERCEL_TOKEN=<token> bash deploy.sh

# Verify site after deploy
curl -o /dev/null -w "%{http_code}\n" https://topnochwealth.com

# Check Stripe products
curl -s -u "<sk_live>:" "https://api.stripe.com/v1/products?limit=10"

# Trigger Vercel domain re-verification (rarely needed)
curl -X POST -H "Authorization: Bearer <vercel_token>" \
  "https://api.vercel.com/v10/projects/prj_R4s0BF9GGMf1BGKOqqbVIxXytkAu/domains/topnochwealth.com/verify?teamId=team_eTx8DDhbZwKRCX9l9IKmFdCM"
```

---

## 11. Email automation (Resend)

The site sends transactional emails directly via Resend (independent of GHL workflows, which require UI configuration that GHL's API doesn't expose).

### Email triggers

| Event | Recipient | What they get |
|-------|-----------|---------------|
| Assessment submitted | Lead | Branded email with their score + CTA to book a strategy call |
| Assessment submitted | Maurice (`NOTIFY_EMAIL`) | Lead notification with all answers |
| Contact form submitted | Lead | Acknowledgement with strategy call CTA |
| Contact form submitted | Maurice | Full message + reply-to set to lead's address |
| Purchase completed | Buyer | Branded download links + booking CTA |
| Purchase completed | Maurice | Sale notification with amount + product |

### Implementation

- Helper: `src/lib/email.ts` — exports `sendAssessmentEmails`, `sendContactEmails`, `sendPurchaseEmails`
- API routes: `src/app/api/assessment/route.ts` and `src/app/api/contact/route.ts` — fan out to GHL webhook + Resend in parallel
- Purchase emails fire from `src/app/(site)/thank-you/page.tsx` after Stripe session verification (idempotency via session metadata `email_sent`)

### Disabling

If `RESEND_API_KEY` is blank, all email sends are silently skipped — the GHL webhook still fires and the site continues to function. This is the failsafe.

### Domain verification (Resend)

For emails to come from `@topnochwealth.com`, the domain must be verified in Resend:
1. Resend dashboard → **Domains → Add Domain → topnochwealth.com**
2. Resend gives 3 DNS records (SPF, DKIM, DMARC)
3. Add them in Squarespace DNS
4. Click **Verify** in Resend

Until verified, emails fall back to `onboarding@resend.dev` as the sender (still works, just doesn't look branded).

---

## 12. SEO & analytics

- **`/sitemap.xml`** — auto-generated from `src/app/sitemap.ts`
- **`/robots.txt`** — auto-generated from `src/app/robots.ts`; disallows `/api/`, `/thank-you/`, `/results/`, `/ebooks/`
- **OG image** — `public/og-image.png` (1200x630, brand-styled). Regenerable via `_tools/generate_og_image.py`
- **Open Graph + Twitter Card meta** — set in `src/app/layout.tsx`, with per-page overrides where defined
- **Google Analytics 4** — set `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var (format `G-XXXXXXX`) and analytics auto-loads. Leave blank to disable. Maurice can grab the ID from analytics.google.com after creating a property for `topnochwealth.com`.

---

## 13. Outstanding items

- **Custom video section** — currently the homepage video is in the standard "A Word From Maurice" layout. If a fully custom design is requested, that's a follow-up.
- **GHL → Stripe automation** — purchase tracking lives in Stripe + the post-purchase email. If Maurice wants buyer tags in GHL, add a Stripe webhook → GHL workflow.
- **Resend domain verification** — needs Maurice to add 3 DNS records in Squarespace once Resend account exists.
- **GA4 setup** — needs Maurice to create a GA4 property and provide the measurement ID.
