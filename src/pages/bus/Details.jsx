import React, { useState } from "react";
import Bus from '../../assets/bus9.png';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Destination from "../../components/destination/Destination";
import Departtime from "../../components/departtime/Departtime";
import Seat from "../../components/seat/Seat";

const Details = () => {
  // States for dropdowns and seat selection
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departTime, setDepartTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full grid grid-cols-2 gap-16 items-center">
        <div className="col-span-1 space-y-8">
          <img
            src={Bus}
            alt="detail image"
            className="w-full aspect-[3/2] rounded-md object-contain"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Luxury Bus
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                (Bus Number Plate)
              </span>
            </h1>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                (4.5)
              </p>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
              officiis et. Ipsa officiis ab maiores exercitationem! Assumenda, id
              perferendis illum adipisci magni earum temporibus dolorem? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Iste, quisquam
              perspiciatis dignissimos at quos consectetur ea necessitatibus.
              Accusamus architecto veritatis, minima asperiores suscipit facilis
              fugiat.
            </p>
          </div>
        </div>

        <div className="col-span-1 space-y-10">
          <div className="space-y-6">
            {/* Passing setters to components to update state */}
            <Destination setFrom={setFrom} setTo={setTo} />
            <Departtime setDepartTime={setDepartTime} />
          </div>

          {/* Pass seat state and setter */}
          <Seat selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />

          <div className="flex">
            {/* Pass all data to checkout page via React Router state */}
            <Link
              to="/bus/bus-details/checkout"
              state={{ from, to, departTime, selectedSeats, amount: selectedSeats.length * 750 }}
              className="w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
