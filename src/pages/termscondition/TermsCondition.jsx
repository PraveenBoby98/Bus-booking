import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-violet-600">Terms & Conditions</h1>

      <div className="bg-zinc-200/30 dark:bg-neutral-800 p-6 rounded-xl shadow-md space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">1. Acceptance of Terms</h2>
          <p>
            By booking any travel or transport services with GBus Holidays, you agree to be bound by these terms and conditions. Please read them carefully before making any reservation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">2. Booking & Payments</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>All bookings are confirmed only after full payment.</li>
            <li>Payments can be made via online modes, UPI, debit/credit cards, or bank transfers.</li>
            <li>We reserve the right to cancel any booking due to non-payment or incorrect details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">3. Cancellation & Refunds</h2>
          <p>
            Cancellation charges may apply as per our cancellation policy. Refunds will be processed within 7 working days, excluding transaction charges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">4. Responsibilities of the Traveler</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Travelers must carry valid ID proof during the journey.</li>
            <li>Arrival at the boarding point at least 30 minutes prior to departure is mandatory.</li>
            <li>GBus Holidays is not responsible for any delays due to traffic, weather, or natural events.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">5. Liability Disclaimer</h2>
          <p>
            While we strive to provide a smooth experience, GBus Holidays is not liable for any indirect, incidental, or consequential damages arising from travel disruptions or losses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">6. Modification of Terms</h2>
          <p>
            Laxmi Holidays reserves the right to update or modify these terms at any time without prior notice. Continued use of our services after changes implies acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">7. Contact Information</h2>
          <p>
            For any concerns or questions about these Terms & Conditions, reach out to us at:
            <br />
            📞 <strong>8091074230</strong>
            <br />
            📧 <strong>support@GBusholidays.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
