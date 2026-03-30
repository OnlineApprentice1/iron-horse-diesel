import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Iron Horse Diesel Service",
  description:
    "Iron Horse Diesel Service's privacy policy, explaining how we collect, use, and protect your personal information in accordance with PIPEDA.",
};

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6">
      <h1 className="type-section mb-2">Privacy Policy</h1>
      <p className="type-small mb-10" style={{ color: "var(--clr-text-muted)" }}>
        Last updated: March 2026
      </p>

      <div className="space-y-10">

        <div>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting the privacy of every individual we deal with. This Privacy Policy describes
            how we collect, use, disclose, and safeguard personal information when you visit our
            website or engage us for diesel repair and equipment services.
          </p>
          <p className="type-body mt-4" style={{ color: "var(--clr-text-secondary)" }}>
            We comply with the{" "}
            <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA),
            Canada&apos;s federal private-sector privacy law, as well as any applicable Ontario
            provincial privacy legislation. If you have questions about our practices, please
            contact us using the information at the bottom of this page.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            1. Information We Collect
          </h2>
          <p className="type-body mb-3" style={{ color: "var(--clr-text-secondary)" }}>
            We collect only the personal information necessary to provide our services or respond
            to your enquiries. This may include:
          </p>
          <ul
            className="list-disc list-inside space-y-2 ml-2 type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            <li>Name, email address, and phone number (via contact form or telephone)</li>
            <li>Company name and fleet details (for fleet maintenance enquiries)</li>
            <li>Vehicle or equipment information required to perform a service</li>
            <li>Service address or breakdown location (for mobile service dispatch)</li>
            <li>
              Technical data automatically collected when you visit our website — IP address,
              browser type, referring page, and pages viewed
            </li>
          </ul>
          <p className="type-body mt-4" style={{ color: "var(--clr-text-secondary)" }}>
            We do not collect payment card information directly. Any financial transactions are
            processed through secure third-party payment processors.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            2. How We Use Your Information
          </h2>
          <p className="type-body mb-3" style={{ color: "var(--clr-text-secondary)" }}>
            Under PIPEDA, we collect personal information only for identified, specific purposes.
            We use the information we collect to:
          </p>
          <ul
            className="list-disc list-inside space-y-2 ml-2 type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            <li>Respond to your enquiries and provide requested diesel repair or fleet services</li>
            <li>Prepare and deliver quotes, invoices, and service records</li>
            <li>Dispatch our mobile breakdown team when you request roadside assistance</li>
            <li>Communicate service reminders and maintenance schedules (with your consent)</li>
            <li>Comply with legal, regulatory, and safety obligations</li>
            <li>Improve our website and service operations</li>
          </ul>
          <p className="type-body mt-4" style={{ color: "var(--clr-text-secondary)" }}>
            We do not sell, rent, or trade your personal information to any third party for
            marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            3. How We Protect Your Information
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            We use appropriate physical, technical, and administrative safeguards to protect your
            personal information from unauthorized access, use, disclosure, alteration, or
            destruction. Access to personal information is restricted to employees and contractors
            who need it to perform their job functions. No method of transmission over the
            Internet is 100% secure, and we cannot guarantee absolute security; however, we take
            reasonable steps to protect information in our care.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            4. Third Parties and Disclosure
          </h2>
          <p className="type-body mb-3" style={{ color: "var(--clr-text-secondary)" }}>
            We may share your personal information with third parties only in the following
            circumstances:
          </p>
          <ul
            className="list-disc list-inside space-y-2 ml-2 type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            <li>
              <strong>Service providers</strong> — companies that assist with our website hosting,
              email delivery, or payment processing, who are bound by confidentiality obligations
            </li>
            <li>
              <strong>Legal requirements</strong> — when required by law, court order, or
              regulatory authority
            </li>
            <li>
              <strong>Business transfer</strong> — in the event of a merger, acquisition, or sale
              of all or part of our business, subject to the receiving party agreeing to protect
              your information consistently with this policy
            </li>
          </ul>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            5. Cookies
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            Our website may use cookies and similar technologies to improve functionality and
            analyse traffic. Cookies are small text files stored on your device. You can instruct
            your browser to refuse all cookies or to alert you when a cookie is being sent.
            Disabling cookies may affect certain features of our website. We do not use cookies
            to build individual advertising profiles.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            6. Your Rights Under PIPEDA
          </h2>
          <p className="type-body mb-3" style={{ color: "var(--clr-text-secondary)" }}>
            Under PIPEDA, you have the right to:
          </p>
          <ul
            className="list-disc list-inside space-y-2 ml-2 type-body"
            style={{ color: "var(--clr-text-secondary)" }}
          >
            <li>Know what personal information we hold about you</li>
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Withdraw consent to the collection or use of your information (where applicable)</li>
            <li>File a complaint with the Office of the Privacy Commissioner of Canada</li>
          </ul>
          <p className="type-body mt-4" style={{ color: "var(--clr-text-secondary)" }}>
            To exercise any of these rights, contact us in writing using the details below. We
            will acknowledge your request within 5 business days and respond fully within 30
            calendar days, as required by PIPEDA.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            7. Retention
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            We retain personal information only as long as necessary to fulfil the purposes for
            which it was collected, or as required by applicable law. Service records and related
            personal information are generally retained for a minimum of seven years to satisfy
            tax and business record-keeping requirements under Ontario and federal law.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            8. Changes to This Policy
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or applicable law. Any revisions will be posted on this page with an
            updated date at the top. We encourage you to review this policy periodically.
            Continued use of our website or services after changes are posted constitutes your
            acceptance of the revised policy.
          </p>
        </div>

        <div
          className="p-6 border"
          style={{
            borderColor: "var(--clr-surface-3)",
            backgroundColor: "var(--clr-surface-2)",
          }}
        >
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            Contact Our Privacy Officer
          </h2>
          <p className="type-body mb-4" style={{ color: "var(--clr-text-secondary)" }}>
            If you have questions, concerns, or a request regarding this Privacy Policy or our
            personal information handling practices, please contact us:
          </p>
          <ul className="space-y-1.5 type-body" style={{ color: "var(--clr-text-secondary)" }}>
            <li>
              <strong style={{ color: "var(--clr-text-primary)" }}>{siteConfig.name}</strong>
            </li>
            <li>{siteConfig.location.city}, {siteConfig.location.province}</li>
            <li>
              Phone:{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                style={{ color: "var(--clr-accent)" }}
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ color: "var(--clr-accent)" }}
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
