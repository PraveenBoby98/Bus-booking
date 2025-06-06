import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

// Reusable Seat Component
const Seat = ({ seatNumber, isSelected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`Seat ${seatNumber}`}
      aria-pressed={isSelected}
      className={`text-3xl -rotate-90 cursor-pointer focus:outline-none ${
        isSelected ? "text-violet-600" : "text-neutral-600 hover:text-violet-600"
      }`}
    >
      <MdOutlineChair />
    </button>
  );
};

const BusSeatLayout = ({ selectedSeats, setSelectedSeats }) => {
  const totalSeats = 41;

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seatNumber)) {
        // Remove seat
        return prevSelected.filter((seat) => seat !== seatNumber);
      } else {
        if (prevSelected.length < 10) {
          // Add seat
          return [...prevSelected, seatNumber];
        } else {
          alert("You can only select a maximum of 10 seats.");
          return prevSelected;
        }
      }
    });
  };

  // Render all seats once, then slice them where needed
  const allSeats = [];
  for (let i = 1; i <= totalSeats; i++) {
    allSeats.push(
      <Seat
        key={i}
        seatNumber={i}
        isSelected={selectedSeats.includes(i)}
        onClick={() => handleSeatClick(i)}
      />
    );
  }

  return (
    <div className="space-y-5">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
        Choose a Seat
      </h2>

      {/* Seat layout container */}
      <div className="w-full flex justify-between">
        <div className="flex-1 w-full flex">
          <div className="w-full flex-1 flex gap-x-5 items-stretch">
            <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-800">
              <GiSteeringWheel className="text-3xl mt-6 text-violet-600 -rotate-90" />
            </div>

            {/* Seat grids */}
            <div className="flex flex-col items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {allSeats.slice(0, 10)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {allSeats.slice(10, 20)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  <div className="col-span-9"></div>
                  {allSeats.slice(20, 21)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {allSeats.slice(21, 31)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {allSeats.slice(31, 41)}
                </div>
              </div>
            </div>
          </div>

          {/* Instruction and info panel */}
          <div className="space-y-3 w-28 ml-6">
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-lg text-neutral-500 -rotate-90" />
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Available
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-lg text-red-500 -rotate-90" />
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Booked
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-lg text-violet-600 -rotate-90" />
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Selected
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <RiMoneyRupeeCircleLine className="text-lg text-neutral-500" />
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Rs. 750
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Seats */}
      {selectedSeats.length > 0 && (
        <div className="!mt-10">
          <h3 className="text-lg font-bold">Selected seats:</h3>
          <div className="flex flex-wrap">
            {selectedSeats.map((seat) => (
              <div
                key={seat}
                className="w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-violet-600/30 flex items-center justify-center"
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Total Price */}
      {selectedSeats.length > 0 && (
        <div className="!mt-5 flex items-center gap-x-4">
          <h3 className="text-lg font-bold">Total Fare Price:</h3>
          <p className="text-lg font-medium">Rs. {selectedSeats.length * 750}</p>
          <span className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
            (Including all taxes)
          </span>
        </div>
      )}
    </div>
  );
};

export default BusSeatLayout;
