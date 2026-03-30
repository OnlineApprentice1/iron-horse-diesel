import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service | Iron Horse Diesel Service",
  description:
    "Terms of service for Iron Horse Diesel Service — diesel engine repair, fleet maintenance, and heavy equipment service in Sault Ste. Marie, Ontario.",
};

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6">
      <h1 className="type-section mb-2">Terms of Service</h1>
      <p className="type-small mb-10" style={{ color: "var(--clr-text-muted)" }}>
        Last updated: March 2026
      </p>

      <div className="space-y-10">

        <div>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            Please read these Terms of Service carefully before using the services provided by{" "}
            {siteConfig.name} (&quot;Iron Horse,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). By requesting a quote, booking a service, or using our website, you
            agree to be bound by these terms. If you do not agree, please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            1. Services
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            {siteConfig.name} provides diesel engine repair, engine rebuilds, fleet maintenance
            programmes, heavy equipment service, fuel system diagnostics and injection work, and
            24/7 mobile breakdown service. All services are subject to availability, technician
            scheduling, and parts supply. We serve customers in Sault Ste. Marie, Algoma District,
            Blind River, Elliot Lake, Wawa, and the Northern Ontario corridor. We reserve the right
            to decline any service request at our sole discretion.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            2. Estimates and Pricing
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            All written estimates are provided in good faith based on information available at the
            time of diagnosis. Actual costs may change if additional fault conditions or damage are
            discovered during disassembly or repair. We will contact you for authorisation before
            proceeding with work that exceeds the approved estimate by more than 10% or $100,
            whichever is greater. Estimates are valid for 30 days from the date of issue unless
            otherwise stated in writing. Prices are in Canadian dollars and are subject to
            applicable taxes.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            3. Authorisation and Work Orders
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            Work will not begin until you have provided written or verbal authorisation. By
            authorising a work order, you confirm that you are the owner of the vehicle or
            equipment (or have authority from the owner), and that you authorise us to perform
            the described repairs. A signed work order constitutes a binding agreement between
            you and {siteConfig.name}.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            4. Payment Terms
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            Payment is due upon completion of the agreed-upon work unless alternate arrangements
            have been confirmed in writing prior to work commencing. For fleet accounts, invoices
            are due net 30 days unless a separate credit agreement is in place. A deposit may be
            required for major engine rebuilds or parts orders. Late payments bear interest at the
            rate of 2% per month (24% per annum) compounded monthly, as permitted under Ontario
            law. Vehicles or equipment left on our premises after 5 business days following
            completion and notification may be subject to a storage fee.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            5. Warranties
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            Labour performed by {siteConfig.name} is warranted against defects in workmanship for
            90 days or 5,000 km from the date of service, whichever comes first. Parts supplied
            by us carry the manufacturer&apos;s warranty, which we will facilitate on your behalf.
            Warranty coverage is void if the equipment is misused, improperly maintained following
            our service, or modified by a third party. This warranty is in addition to any rights
            you may have under the Ontario{" "}
            <em>Consumer Protection Act, 2002</em> or other applicable legislation.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            6. Limitation of Liability
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            To the fullest extent permitted by applicable law, {siteConfig.name}&apos;s total
            liability for any claim arising out of or related to our services shall not exceed
            the amount you paid for the specific service giving rise to the claim. We are not
            liable for any indirect, incidental, consequential, or punitive damages, including
            lost revenue, downtime costs, or cargo losses. Nothing in these terms limits our
            liability for fraud, gross negligence, or any other liability that cannot be excluded
            under Ontario or federal Canadian law.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            7. Cancellation and No-Shows
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            If you need to cancel or reschedule a booked appointment, please provide at least
            48 hours&apos; notice. Cancellations with less than 48 hours&apos; notice may be
            subject to a cancellation fee equal to one hour of labour at our posted shop rate.
            For mobile breakdown calls, cancellation fees may apply if our technician has already
            been dispatched. Deposits paid toward special-order parts are non-refundable once
            the order has been placed with our supplier.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            8. Governing Law
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            These Terms of Service are governed by and construed in accordance with the laws of
            the Province of Ontario and the applicable federal laws of Canada. Any dispute arising
            under or in connection with these terms shall be subject to the exclusive jurisdiction
            of the courts of the Province of Ontario sitting in Sault Ste. Marie.
          </p>
        </div>

        <div>
          <h2 className="type-card mb-4" style={{ color: "var(--clr-text-primary)" }}>
            9. Changes to These Terms
          </h2>
          <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
            We may update these Terms of Service from time to time. Revised terms will be posted
            on this page with an updated date. Your continued use of our services after any
            changes constitutes acceptance of the updated terms.
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
            Contact Us
          </h2>
          <p className="type-body mb-4" style={{ color: "var(--clr-text-secondary)" }}>
            Questions about these Terms of Service? Get in touch:
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
