import { Resend } from "resend";

const FROM = process.env.RESEND_FROM_EMAIL || "Topnoch Enterprises <onboarding@resend.dev>";
const NOTIFY_TO = process.env.NOTIFY_EMAIL || "info@topnochwealth.com";

function getClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const baseStyle = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  color: #1a1a1a;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
`;

const button = (href: string, label: string) => `
  <a href="${href}" style="
    display: inline-block;
    background: linear-gradient(135deg, #C9A84C 0%, #B89539 100%);
    color: #0F2847;
    padding: 14px 28px;
    border-radius: 10px;
    font-weight: bold;
    text-decoration: none;
    margin: 16px 0;
  ">${label}</a>
`;

export async function sendAssessmentEmails(data: {
  email: string;
  score: number;
  obstacle?: string;
  stage?: string;
  amount?: string;
  name?: string;
  phone?: string;
}) {
  const client = getClient();
  if (!client) return;

  const userHtml = `
    <div style="${baseStyle}">
      <h1 style="color:#0F2847;font-size:28px;margin-bottom:8px">Your Fundability Score</h1>
      <p style="font-size:48px;color:#C9A84C;font-weight:bold;margin:0">${data.score}/100</p>
      <p>Thanks for taking the Fundability Assessment.</p>
      <p>Based on your answers, your top focus area is <strong>${data.obstacle || "your overall foundation"}</strong>${
        data.stage ? `, you're at the <strong>${data.stage}</strong> stage` : ""
      }${data.amount ? `, and looking for around <strong>${data.amount}</strong> in funding` : ""}.</p>
      <p>The next step is to talk through your specific situation with Maurice and build your personalized roadmap.</p>
      ${button("https://topnochwealth.com/strategy#book", "Book Your Free Strategy Call")}
      <p style="margin-top:32px;color:#666;font-size:14px">— Maurice L. Coleman<br/>Topnoch Enterprises LLC</p>
    </div>
  `;

  const adminHtml = `
    <div style="${baseStyle}">
      <h2 style="color:#0F2847">New Fundability Lead — Score ${data.score}</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.name || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.phone || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Score</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.score}/100</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Obstacle</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.obstacle || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Stage</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.stage || "—"}</td></tr>
        <tr><td style="padding:8px"><strong>Amount</strong></td><td style="padding:8px">${data.amount || "—"}</td></tr>
      </table>
    </div>
  `;

  await Promise.allSettled([
    client.emails.send({
      from: FROM,
      to: data.email,
      subject: `Your Fundability Score — ${data.score}/100`,
      html: userHtml,
    }),
    client.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      subject: `🔥 New Lead: Score ${data.score} — ${data.email}`,
      html: adminHtml,
      replyTo: data.email,
    }),
  ]);
}

export async function sendContactEmails(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const client = getClient();
  if (!client) return;

  const userHtml = `
    <div style="${baseStyle}">
      <h1 style="color:#0F2847;font-size:24px">Thanks for reaching out, ${data.name}</h1>
      <p>I got your message and will personally get back to you within 24 hours.</p>
      <p>If your situation is time-sensitive, you can also book a free strategy call directly:</p>
      ${button("https://topnochwealth.com/strategy#book", "Book a Strategy Call")}
      <p style="margin-top:32px;color:#666;font-size:14px">— Maurice L. Coleman<br/>Topnoch Enterprises LLC</p>
    </div>
  `;

  const adminHtml = `
    <div style="${baseStyle}">
      <h2 style="color:#0F2847">New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.phone || "—"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Subject</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.subject || "—"}</td></tr>
      </table>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="background:#f5f5f5;padding:12px;border-radius:8px">${data.message.replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  await Promise.allSettled([
    client.emails.send({
      from: FROM,
      to: data.email,
      subject: "We got your message",
      html: userHtml,
    }),
    client.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      subject: `📬 Contact form: ${data.subject || "New message"} — ${data.name}`,
      html: adminHtml,
      replyTo: data.email,
    }),
  ]);
}

export async function sendPurchaseEmails(data: {
  email: string;
  ebooks: { title: string; file: string }[];
  amount: number;
}) {
  const client = getClient();
  if (!client) return;

  const downloadList = data.ebooks
    .map(
      (e) =>
        `<li style="margin:12px 0"><a href="https://topnochwealth.com${e.file}" style="color:#1A3A6B;font-weight:bold">${e.title}</a> — <a href="https://topnochwealth.com${e.file}" style="color:#666">Download PDF</a></li>`
    )
    .join("");

  const userHtml = `
    <div style="${baseStyle}">
      <h1 style="color:#0F2847;font-size:26px">Thank you for your purchase</h1>
      <p>Your guide${data.ebooks.length > 1 ? "s are" : " is"} ready. Click below to download${
        data.ebooks.length > 1 ? " each one" : ""
      }:</p>
      <ul style="list-style:none;padding:0">${downloadList}</ul>
      <p style="margin-top:24px;color:#666;font-size:14px">Save the${
        data.ebooks.length > 1 ? "se files" : " file"
      } to your device — these links will keep working, but downloading now means you'll always have a copy.</p>
      <p>Need help applying what you learn?</p>
      ${button("https://topnochwealth.com/strategy#book", "Book a Free Strategy Call")}
      <p style="margin-top:32px;color:#666;font-size:14px">— Maurice L. Coleman<br/>Topnoch Enterprises LLC</p>
    </div>
  `;

  const adminHtml = `
    <div style="${baseStyle}">
      <h2 style="color:#0F2847">💰 New Purchase — $${(data.amount / 100).toFixed(2)}</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Customer</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Amount</strong></td><td style="padding:8px;border-bottom:1px solid #eee">$${(data.amount / 100).toFixed(2)}</td></tr>
        <tr><td style="padding:8px"><strong>Product${data.ebooks.length > 1 ? "s" : ""}</strong></td><td style="padding:8px">${data.ebooks.map((e) => e.title).join(", ")}</td></tr>
      </table>
    </div>
  `;

  await Promise.allSettled([
    client.emails.send({
      from: FROM,
      to: data.email,
      subject: `Your Topnoch Enterprises ebook${data.ebooks.length > 1 ? "s are" : " is"} ready`,
      html: userHtml,
    }),
    client.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      subject: `💰 New Purchase: $${(data.amount / 100).toFixed(2)} — ${data.email}`,
      html: adminHtml,
    }),
  ]);
}
