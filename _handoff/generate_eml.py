from email.message import EmailMessage
from email.policy import SMTP
import mimetypes
import pathlib

OUT = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\_handoff\Maurice-Handoff.eml")
ZIP_PATH = pathlib.Path(r"C:\Users\ea2en\Projects\top-noch-wealth\_handoff\TopnochWealth-Handoff.zip")

html = """<html><body style="font-family:Calibri,Arial,sans-serif;font-size:11pt;color:#222">
<p>Hey Maurice,</p>

<p>Your site is live: <a href="https://topnochwealth.com">https://topnochwealth.com</a></p>

<p>Everything is set up under your accounts (info@topnochwealth.com) &mdash; domain, hosting, GitHub, Stripe, and your GoHighLevel are all connected and working. Real payments will process immediately, leads from the contact form and assessment quiz are flowing into your GHL, and the calendar on the Strategy page books straight into your GHL calendar.</p>

<p>Attached is your full handoff package:</p>

<ul>
  <li><strong>PROJECT-OVERVIEW.md</strong> &mdash; quick summary of the site, what does what, and what accounts are involved. Read this first.</li>
  <li><strong>HANDOFF.md</strong> &mdash; full technical doc to give to anyone who maintains or edits the site for you in the future. Don&rsquo;t worry about reading this yourself &mdash; it&rsquo;s for your developer.</li>
  <li><strong>topnoch-services-qr.png</strong> &mdash; your branded QR code that goes straight to the ebook page. Drop it into PowerPoint or any slide deck. Scans clean at any size.</li>
</ul>

<p>The two ebooks are loaded and delivering automatically after every purchase. The intro video is on the homepage and autoplays muted (browser rules &mdash; viewers click to unmute).</p>

<p>If anything breaks or you want to add features, just reach out.</p>

<p>Congrats on the launch.</p>
</body></html>"""

text = """Hey Maurice,

Your site is live: https://topnochwealth.com

Everything is set up under your accounts (info@topnochwealth.com) - domain, hosting, GitHub, Stripe, and your GoHighLevel are all connected and working. Real payments will process immediately, leads from the contact form and assessment quiz are flowing into your GHL, and the calendar on the Strategy page books straight into your GHL calendar.

Attached is your full handoff package:

- PROJECT-OVERVIEW.md - quick summary of the site, what does what, and what accounts are involved. Read this first.
- HANDOFF.md - full technical doc to give to anyone who maintains or edits the site for you in the future. Don't worry about reading this yourself - it's for your developer.
- topnoch-services-qr.png - your branded QR code that goes straight to the ebook page. Drop it into PowerPoint or any slide deck. Scans clean at any size.

The two ebooks are loaded and delivering automatically after every purchase. The intro video is on the homepage and autoplays muted (browser rules - viewers click to unmute).

If anything breaks or you want to add features, just reach out.

Congrats on the launch.
"""

msg = EmailMessage(policy=SMTP)
msg["From"] = "ea2enterprises@gmail.com"
msg["To"] = "info@topnochwealth.com"
msg["Subject"] = "Topnoch Wealth - Site Live, Project Complete"
msg.set_content(text)
msg.add_alternative(html, subtype="html")

with ZIP_PATH.open("rb") as f:
    data = f.read()
msg.add_attachment(
    data,
    maintype="application",
    subtype="zip",
    filename=ZIP_PATH.name,
)

OUT.write_bytes(bytes(msg))
print(f"Written: {OUT}")
print(f"Size: {OUT.stat().st_size} bytes")
