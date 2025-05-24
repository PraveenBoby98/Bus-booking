import React from "react";

const Departtime = ({ departTime, setDepartTime }) => {
  const handleDepartChange = (e) => {
    setDepartTime(e.target.value);
  };

  const clearSelection = () => {
    setDepartTime("");
  };

  return (
    <div className="w-full space-y-4">
      {!departTime ? (
        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <label htmlFor="Departbus" className="block mb-2 font-semibold">
              Depart Time
            </label>
            <select
              name="Departbus"
              id="Departbus"
              value={departTime}
              onChange={handleDepartChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
            >
              <option value="">Select a Time</option>
              <option value="04:00 AM">04:00 AM</option>
              <option value="05:00 AM">05:00 AM</option>
              <option value="06:00 AM">06:00 AM</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="w-full flex items-center gap-x-3">
            <p className="w-fit text-base font-semibold">
              Bus Depart at: <span className="ml-1.5 font-medium">{departBus}</span>
            </p>
            <button
              onClick={clearSelection}
              className="text-sm text-red-600 underline hover:text-red-800"
              aria-label="Clear depart time selection"
            >
              Change
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departtime;
