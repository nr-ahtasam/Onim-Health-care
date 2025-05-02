import BreadCrumbs from "@/components/breadcrumbs/BreadCrumbs";

const page = () => {
  return (
    <div>
      <BreadCrumbs
        title="Terms And Conditions"
        subtitle="In Omni Health Care"
      />
      <div className="container mx-auto">
        <section class="terms-and-conditions px-4 py-10 max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6">Terms and Conditions</h1>

          <p class="mb-4">Effective Date: May 2, 2025</p>

          <p class="mb-4">
            Welcome to <strong>Omni Health Care</strong>. By accessing or using
            our website and services, you agree to comply with and be bound by
            the following terms and conditions. Please read them carefully
            before using our platform.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            1. Use of the Website
          </h2>
          <p class="mb-4">
            Our website allows you to book appointments with qualified
            healthcare professionals. You agree to use the website only for
            lawful purposes and not for any fraudulent or unauthorized
            activities.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            2. Appointment Booking
          </h2>
          <ul class="list-disc pl-6 mb-4">
            <li>All appointment bookings are subject to availability.</li>
            <li>
              You must provide accurate and complete information during booking.
            </li>
            <li>
              We reserve the right to cancel or reschedule appointments if
              necessary.
            </li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            3. Medical Disclaimer
          </h2>
          <p class="mb-4">
            The information on this website is provided for general
            informational purposes only. It is not intended as a substitute for
            professional medical advice, diagnosis, or treatment. Always consult
            a qualified healthcare provider with any questions you may have.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">4. Payments and Fees</h2>
          <ul class="list-disc pl-6 mb-4">
            <li>
              Consultation fees are listed clearly during the booking process.
            </li>
            <li>
              We may offer online or offline payment options (e.g., cash,
              bKash).
            </li>
            <li>
              All payments are final unless stated otherwise in our refund
              policy.
            </li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-4">5. User Accounts</h2>
          <p class="mb-4">
            If you create an account on our website, you are responsible for
            maintaining the confidentiality of your login credentials and for
            all activities that occur under your account.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            6. Intellectual Property
          </h2>
          <p class="mb-4">
            All content on the website including logos, text, graphics, and
            software is the property of Omni Health Care and is protected by
            copyright and trademark laws. You may not use our content without
            prior written consent.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">
            7. Limitation of Liability
          </h2>
          <p class="mb-4">
            Omni Health Care shall not be liable for any indirect, incidental,
            or consequential damages arising out of your use or inability to use
            the website or services.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p class="mb-4">
            We may modify these Terms and Conditions at any time. Changes will
            be posted on this page, and your continued use of the website
            constitutes acceptance of the updated terms.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
          <p class="mb-4">
            These Terms shall be governed by the laws of Bangladesh. Any
            disputes arising from your use of the website shall be resolved
            under the jurisdiction of the courts of Bangladesh.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p class="mb-2">
            If you have any questions about these Terms, you can contact us at:
          </p>
          <p class="mb-2">Omni Health Care</p>
          <p class="mb-2">
            Email:{" "}
            <a
              href="mailto:support@omnihealthcare.com"
              class="text-blue-600 underline"
            >
              support@omnihealthcare.com
            </a>
          </p>
          <p>Phone: +880-XXX-XXXXXXX</p>
        </section>
      </div>
    </div>
  );
};

export default page;
