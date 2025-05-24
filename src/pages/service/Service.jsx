import React from "react";

const Services = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-slate-100 dark:from-neutral-900 dark:to-neutral-800 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600">Services We Offer</h1>


      {/* BUS ROUTES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-violet-600 pl-4">Bus Routes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Delhi-Dharamshala-Delhi", "Delhi-Shimla-Delhi", "Delhi-Pathankot-Delhi",
            "Delhi-Lucknow-Delhi", "Delhi-Manali-Delhi", "Delhi-Jammu-Delhi",
            "Delhi-Jalandhar-Delhi", "Delhi-Gorakhpur-Delhi", "Delhi-Kasol-Delhi",
            "Delhi-Katra-Delhi", "Delhi-Ludhiana-Delhi", "Delhi-Varanasi-Delhi",
            "Delhi-Bir-Delhi", "Delhi-Amritsar-Delhi", "Delhi-Dehradun-Delhi",
            "Delhi-Allahabad-Delhi", "Delhi-Palampur-Delhi", "Delhi-Chandigarh-Delhi",
            "Delhi-Rishikesh-Delhi"
          ].map((route, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg rounded-xl p-4 text-center text-sm font-medium transition duration-300 border border-neutral-200 dark:border-neutral-700"
            >
              {route}
            </div>
          ))}
        </div>
      </section>

      {/* TOURS */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-violet-600 pl-4">Tours | F.I.T & G.I.T</h2>
        <ul className="space-y-4 list-disc list-inside text-base">
          <li>Domestic packages and tours for Himachal, J&K, Ladakh, Uttarakhand, Punjab, Delhi and Rajasthan.</li>
          <li>Hotel bookings on PAN India.</li>
          <li>Trekking and adventure tours in Himachal, Ladakh, J&K and Uttarakhand.</li>
          <li>Yoga Tours in Himachal Pradesh & Rishikesh.</li>
          <li>Students educational tours for Himachal, Rajasthan and Uttarakhand.</li>
          <li>Pilgrimage tour for Vaishnodevi (Katra) and Amarnath (Sonmarg).</li>
          <li>Golden triangle tours from Delhi.</li>
          <li>Taxi and cab bookings across Central and North India.</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;