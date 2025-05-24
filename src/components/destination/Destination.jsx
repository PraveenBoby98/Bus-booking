import React from "react";

const Destination = ({ from, to, setFrom, setTo }) => {
  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const clearSelection = () => {
    setFrom("");
    setTo("");
  };

  const isDestinationSelected = from && to;

  return (
    <div className="w-full space-y-4">
      {!isDestinationSelected ? (
        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              value={from}
              onChange={handleFromChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
            >
              <option value="">Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="himachal">Himachal</option>
            </select>
          </div>
          <div>
            <label htmlFor="to" className="block mb-2 font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              value={to}
              onChange={handleToChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
            >
              <option value="">Select Location</option>
              <option value="delhi">Delhi</option>
              <option value="himachal">Himachal</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            Your Destination
          </h1>
          <div className="w-full flex items-center gap-x-3">
            <div className="w-fit text-base font-semibold">
              From: <span className="ml-1.5 font-medium">{from}</span>
            </div>
            <div className="flex-1">
              <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80" />
              <div className="w-fit text-base font-semibold mt-2">
                To: <span className="ml-1.5 font-medium">{to}</span>
              </div>
            </div>
            <button
              onClick={clearSelection}
              className="text-sm text-red-600 underline hover:text-red-800"
              aria-label="Change destination"
            >
              Change
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
