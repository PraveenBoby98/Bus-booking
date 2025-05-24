import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 bg-gradient-to-br from-white to-violet-100 dark:from-neutral-900 dark:to-violet-900 text-neutral-800 dark:text-white m-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600">
        About Us
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 border-l-4 border-violet-600 pl-4">
          Visions & Missions
        </h2>
        <p className="mb-4">
          As per the Vision of Government and current scenario, GBus Holidays holds the vision to give sustainable transport mobility with Go green Eco friendly Buses.
        </p>
        <p>
          GBus Holidays holds the mission to provide premium, luxurious comfortable and business class journey at affordable prices on PAN India basis.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 border-l-4 border-violet-600 pl-4">
          Who We Are
        </h2>
        <p>
          GBus Holidays travel operator is one of the largest tourist transporters and package providers in North India with a fleet strength of Volvo Luxury buses and other variants of Sleeper buses, luxury cars, and other transportation vehicles.
        </p>
        <p className="mt-4">
          We are spread across North India with many branches covering Himachal Pradesh, Punjab, Chandigarh, Uttar Pradesh, J&K, Uttarakhand, and Delhi. With one of the most affordable rides that speaks about travel comfort, GBus Holidays has become a household name throughout North India.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 border-l-4 border-violet-600 pl-4">
          What Makes Us Different
        </h2>
        <ul className="list-disc list-inside space-y-3 text-base">
          <li>GBus Holidays operates its fleet of Bus services all over North India including Delhi, Himachal, J&K, Chandigarh, Punjab, U.P and Uttarakhand.</li>
          <li>Our aim is to provide the best services for our clients.</li>
          <li>We have been delivering the best services for the past 10 years to our clients.</li>
          <li>Years of knowledge gained from our passengers and clients are summed up to enhance the services we provide.</li>
          <li>We deliver on-time guaranteed bus services for the passengers.</li>
          <li>Women safety is our first priority and we have female-oriented seats in our fleet.</li>
          <li>GBus Holidays keeps adding new fleets of luxury buses for convenient travel.</li>
          <li>Our professional team is always ready to assist clients to make every travel plan comfortable.</li>
          <li>We provide 24/7 assistance to clients during and after the journey to ensure our passengers and clients can rely on us.</li>
          <li>With a manpower size of more than 370+ members, we always try to deliver more to our clients.</li>
          <li>Our buses have surveillance cameras and tracking systems for safety.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
