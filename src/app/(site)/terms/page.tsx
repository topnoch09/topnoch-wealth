import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Topnoch Wealth Enterprises LLC. Please read these terms carefully before using our services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm">
            Last updated: April 20, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-gray">
          <div className="space-y-8 text-dark/80 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Topnoch Wealth Enterprises LLC
                website and services, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not
                use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                2. Services Description
              </h2>
              <p>
                Topnoch Wealth Enterprises LLC provides financial education,
                credit repair guidance, business structure consulting,
                funding strategy services, and digital educational products.
                Our services are educational in nature and do not constitute
                financial, legal, or tax advice. We are not a licensed
                financial advisor, attorney, or CPA.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                3. No Guarantees
              </h2>
              <p>
                While we strive to provide valuable guidance and resources,
                we do not guarantee specific results, including but not
                limited to credit score improvements, funding approvals, or
                revenue increases. Results vary depending on individual
                circumstances, effort, and market conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                4. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You agree to provide accurate and truthful information when
                  using our services or filling out forms on our website.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  any account information.
                </li>
                <li>
                  You agree not to use our services for any unlawful purpose
                  or in violation of any applicable regulations.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                5. Digital Products & Refunds
              </h2>
              <p>
                Digital products (ebooks, guides, courses) are delivered
                electronically upon purchase. Due to the nature of digital
                products, all sales are final and non-refundable unless
                otherwise stated at the time of purchase. If you experience
                technical issues accessing your purchase, please contact us
                at{" "}
                <a
                  href="mailto:info@topnochwealth.com"
                  className="text-royal hover:text-royal-dark font-medium"
                >
                  info@topnochwealth.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                6. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                images, and digital products, is the property of Topnoch
                Wealth Enterprises LLC and is protected by copyright and
                intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our prior
                written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Topnoch Wealth
                Enterprises LLC shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                arising from your use of our website or services. Our total
                liability shall not exceed the amount you paid for the
                specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Topnoch Wealth
                Enterprises LLC, its officers, directors, employees, and
                agents from any claims, damages, losses, or expenses arising
                from your use of our services or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Louisiana, without
                regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                10. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time.
                Changes will be effective immediately upon posting to this
                page. Your continued use of our services after changes are
                posted constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service,
                please contact us at:{" "}
                <a
                  href="mailto:info@topnochwealth.com"
                  className="text-royal hover:text-royal-dark font-medium"
                >
                  info@topnochwealth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
