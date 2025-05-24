import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const navigate = useNavigate();

  const handleCheckAvailability = () => {
    navigate("bus/bus-details"); // Redirects to /details
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40">
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end p-6">
          <div className="">
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
            >
              <option value="">Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="himachal">Himachal</option>
            </select>
          </div>

<div className="">
            <label htmlFor="to" className="block mb-2 font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
            >
              <option value="">Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="himachal">Himachal</option>
            </select>
          </div>
<div className="">
            <label htmlFor="Date" className="block mb-2 font-semibold">
              Choose Date
            </label>
            <input type="date" id="date" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800" />
          </div>
          <div className="">
            <label htmlFor="Time" className="block mb-2 font-semibold">
              Choose Time
            </label>
            <input type="time" id="Time" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800" />
          </div>
          <div className="">
            <label htmlFor="Seats" className="block mb-2 font-semibold">
              Total Seats
            </label>
            <input type="number" id="Seats" placeholder="Enter Seat" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800" />
          </div>
          <div className="">
           <button onClick={handleCheckAvailability} className="w-full px-4 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded">
  Check  Availability
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
