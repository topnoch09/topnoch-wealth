import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Topnoch Wealth Enterprises LLC. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-3">
            Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Topnoch Wealth Enterprises LLC (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) respects your privacy and
                is committed to protecting the personal information you share
                with us. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, and other contact details you provide through
                  our forms, assessments, or consultations.
                </li>
                <li>
                  <strong>Business Information:</strong> Business name,
                  industry, revenue, credit information, and other
                  business-related details shared during consultations or
                  assessments.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, including IP address, browser
                  type, pages visited, and time spent on pages.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar
                  tracking technologies to enhance your browsing experience.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>
                  To send you relevant information about our products,
                  services, and educational content
                </li>
                <li>To process transactions and deliver digital products</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                4. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with trusted
                service providers who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may
                also disclose your information when required by law or to
                protect our rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                5. Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                6. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of those
                sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                7. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be posted on this page with an updated revision
                date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-dark mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
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
