import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const features = [
  { icon: "fa-bolt", title: "Charging Point" },
  { icon: "fa-bed", title: "Blankets & Pillow" },
  { icon: "fa-book", title: "Reading Light" },
  { icon: "fa-fire-extinguisher", title: "Fire Extinguisher" },
  { icon: "fa-briefcase-medical", title: "First Aid Box" },
  { icon: "fa-user-tie", title: "Travel World Class - With Experienced Captain" },
  { icon: "fa-clock", title: "On Time - Arrival and Departure" },
  { icon: "fa-glass-water", title: "Water Bottle - With Purified Water" },
  { icon: "fa-mobile-alt", title: "Go Paperless - Choose E-Tickets" },
  { icon: "fa-toilet", title: "Hygienic Restroom & Restaurants During Stops" },
  { icon: "fa-bus", title: "Celebrate the Journey - With Luxury Buses" },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600">
        Why Choose Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-zinc-200/30 dark:bg-neutral-800 border border-violet-300 dark:border-violet-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-violet-600 text-2xl mt-1 min-w-[28px] text-center">
              <i className={`fas ${item.icon}`} aria-hidden="true"></i>
            </div>
            <div className="text-base font-medium">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
