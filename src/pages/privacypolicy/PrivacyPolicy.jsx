import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-violet-600">Privacy Policy</h1>

      <div className="bg-zinc-200/30 dark:bg-neutral-800 p-6 rounded-xl shadow-md space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">Introduction</h2>
          <p>
            GBus Holidays is committed to protecting the privacy and security of your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Personal details such as name, phone number, and email address</li>
            <li>Booking details and travel preferences</li>
            <li>Payment and billing information</li>
            <li>Device and browser information for site analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">How We Use Your Information</h2>
          <p>Your data helps us:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Process bookings and provide services</li>
            <li>Send confirmation and service-related messages</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized access, misuse, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">Sharing of Information</h2>
          <p>
            We do not sell your personal data. Information may be shared only with trusted partners
            for service fulfillment, legal compliance, or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">Your Rights</h2>
          <p>You may request to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Access your data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your data (subject to legal limitations)</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-violet-600 mb-2">Contact Us</h2>
          <p>
            For any questions regarding this privacy policy, please contact us at:
            <br />
            📞 <strong>8219097366</strong>
            <br />
            📧 <strong>support@GBusholidays.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
