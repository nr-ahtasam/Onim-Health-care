import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";

const page = () => {
  return (
    <div>
      <BreadCrumbs title="Privacy Popicy" subtitle="In Omni Health Care" />
      <div className="container mx-auto">
        <section class="privacy-policy px-4 py-10 max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p class="mb-4">Effective Date: May 2, 2025</p>

          <p class="mb-4">
            At <strong>Omni Health Care</strong>, your privacy is of utmost
            importance to us. This Privacy Policy outlines how we collect, use,
            disclose, and safeguard your personal information when you visit our
            website and use our services, including our doctor booking system.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p class="mb-4">We may collect the following information:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Demographic details (age, gender, etc.)</li>
            <li>
              Medical history and preferences (as required for appointment
              bookings)
            </li>
            <li>Payment details (if booking a paid consultation)</li>
            <li>
              IP address and browser information (for security and analytics)
            </li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p class="mb-4">We use your information to:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Schedule appointments with doctors</li>
            <li>Send appointment confirmations and reminders</li>
            <li>Improve our website and services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Process payments securely</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p class="mb-4">
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            4. Sharing of Information
          </h2>
          <p class="mb-4">
            We do not sell or rent your personal data. We may share your
            information with:
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li>
              Licensed doctors for the purpose of providing healthcare services
            </li>
            <li>
              Third-party service providers (e.g., payment gateways) under
              strict confidentiality agreements
            </li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            5.Tracking Technologies
          </h2>
          <p class="mb-4">
            Our website uses cookies and similar tracking technologies to
            enhance your user experience and analyze usage. You may disable
            cookies through your browser settings.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p class="mb-4">
            You have the right to access, update, or delete your personal data.
            To exercise your rights, please contact us at{" "}
            <a
              href="mailto:privacy@omnihealthcare.com"
              class="text-blue-600 underline"
            >
              privacy@omnihealthcare.com
            </a>
            .
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            7. Changes to This Policy
          </h2>
          <p class="mb-4">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with the updated effective date.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p class="mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <p class="mb-2">Omni Health Care</p>
          <p class="mb-2">
            Email:{" "}
            <a
              href="mailto:privacy@omnihealthcare.com"
              class="text-blue-600 underline"
            >
              privacy@omnihealthcare.com
            </a>
          </p>
          <p>Phone: +880-XXX-XXXXXXX</p>
        </section>
      </div>
    </div>
  );
};

export default page;
