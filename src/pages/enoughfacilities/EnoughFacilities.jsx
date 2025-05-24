import React from "react";

const facilities = [
  { icon: "fa-bolt", title: "Charging Ports", description: "Stay powered throughout your journey." },
  { icon: "fa-bed", title: "Blankets & Pillows", description: "Enjoy cozy and restful sleep." },
  { icon: "fa-tv", title: "Entertainment Screens", description: "Watch movies and shows during your trip." },
  { icon: "fa-wifi", title: "Free Wi-Fi", description: "Browse and stay connected on the go." },
  { icon: "fa-snowflake", title: "Air Conditioning", description: "Fully air-conditioned buses for comfort." },
  { icon: "fa-chair", title: "Reclining Seats", description: "Stretch out in ergonomic reclining seats." },
  { icon: "fa-toilet", title: "Restroom Facilities", description: "Clean restrooms at scheduled stops." },
  { icon: "fa-shield-alt", title: "Safety Surveillance", description: "24x7 CCTV and GPS tracking." },
];

const EnoughFacilities = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600">Enough Facilities for Every Traveler</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-zinc-200/30 dark:bg-neutral-800 border border-violet-300 dark:border-violet-700 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-violet-600 text-3xl mb-4">
              <i className={`fas ${facility.icon}`}></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
            <p className="text-sm">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnoughFacilities;
