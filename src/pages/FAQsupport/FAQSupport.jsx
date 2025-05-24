import React from "react";

const faqs = [
  {
    question: "How do I book a ticket with GBus Holidays?",
    answer:
      "You can book your tickets through our website or mobile app. Simply search for your route, choose the seat, and complete payment securely.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, bookings can be modified or canceled from your dashboard. Refunds are processed as per our cancellation policy.",
  },
  {
    question: "Is it safe for solo women travelers?",
    answer:
      "Absolutely. We provide women-reserved seats, trained staff, GPS tracking, and 24/7 customer support to ensure safety.",
  },
  {
    question: "Do I get an e-ticket after booking?",
    answer:
      "Yes. An e-ticket is sent to your registered email and mobile number instantly after booking confirmation.",
  },
  {
    question: "Are the buses sanitized?",
    answer:
      "All our vehicles are cleaned and sanitized before each journey. Hygiene is a top priority at GBus Holidays.",
  },
  {
    question: "What if I miss the bus?",
    answer:
      "Please contact our helpline immediately. While we try to accommodate, refunds are not guaranteed for missed buses.",
  },
];

const FAQSupport = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600">FAQs & Support</h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-zinc-200/30 dark:bg-neutral-800 border border-violet-300 dark:border-violet-700 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-violet-700 mb-2">
              <i className="fas fa-question-circle mr-2"></i>
              {faq.question}
            </h3>
            <p className="text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Support Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-violet-600 mb-4">Need Further Assistance?</h2>
        <p className="text-base mb-4">Our support team is available 24/7 for any travel-related queries or issues.</p>
        <p className="text-base mb-4">
          <i className="fas fa-phone-alt mr-2 text-violet-500"></i> Call us: <strong>8219097366</strong>
        </p>
        <p className="text-base">
          <i className="fas fa-envelope mr-2 text-violet-500"></i> Email: <strong>support@gbusholidays.com</strong>
        </p>
      </div>
    </div>
  );
};

export default FAQSupport;
