import React from "react";

const safetyPoints = [
  {
    title: "Surveillance & Tracking",
    description: "All our buses are equipped with real-time GPS tracking and onboard CCTV cameras for safety monitoring throughout the journey.",
    icon: "fa-video",
  },
  {
    title: "Female Friendly Travel",
    description: "We prioritize women’s safety with female-reserved seats and professional onboard staff assistance.",
    icon: "fa-female",
  },
  {
    title: "24/7 Helpline Support",
    description: "Our customer care team is available round-the-clock to assist passengers before, during, and after the journey.",
    icon: "fa-headset",
  },
  {
    title: "Verified Drivers",
    description: "All drivers go through strict background verification, training, and follow safe driving protocols.",
    icon: "fa-id-badge",
  },
  {
    title: "Emergency Preparedness",
    description: "All vehicles are equipped with fire extinguishers, first-aid kits, and emergency exit protocols.",
    icon: "fa-shield-alt",
  },
  {
    title: "Clean & Sanitized Fleet",
    description: "Every vehicle is deep-cleaned and sanitized before each trip to ensure a hygienic environment for passengers.",
    icon: "fa-pump-soap",
  },
];

const SafetyGuarantee = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600">Our Safety Guarantee</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {safetyPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-zinc-200/30 dark:bg-neutral-800 border border-violet-300 dark:border-violet-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-violet-600 text-2xl mt-1 min-w-[30px] text-center">
              <i className={`fas ${point.icon}`} aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
              <p className="text-sm">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyGuarantee;
