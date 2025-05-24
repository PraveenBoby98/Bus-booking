import React  from "react";
import Bus1 from '../../assets/bus1.png'
import EBus from '../../assets/bus2.png'
import HRTC1 from '../../assets/HRTC1.png'
import Bus4 from '../../assets/bus4.png'
import Bus5 from '../../assets/bus5.png'
import Bus6 from '../../assets/bus6.png'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Bus = () => {
    return (
       <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] my-[8ch] space-y-14">
        <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between">
        <div className="flex items-center gap-x-2 col-span-2">
              <input type="text" id="Seats" placeholder="Search Buses" className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800" />
            <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-200">
                <FaSearch></FaSearch>
            </button>
        </div>
        <div className="col-span-2"></div>
         <div className="col-span-2">
            <select
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 py-2 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
            >
              <option value="">Select Bus Type</option>
              <option value="Tourist">Tourist Bus</option>
              <option value="Private">Private Bus</option>
              <option value="Luxury">Luxury Bus</option>
              <option value="Deluxe">Deluxe Bus</option>
              <option value="Deluxe"> Eco-Friendly Bus</option>
            </select>
         </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-10">
        <Link to={"bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
        <img src={Bus1} alt="bus image" className="w-full aspect-video object-contain object-center" />
        <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
 Tourist Bus
</h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
            </p>

            </div>
        </div>
        </Link>
        <Link to={"bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
        <img src={Bus4} alt="bus image" className="w-full aspect-video object-contain object-center" />
        <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
 Deluxe Bus
</h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
            </p>

            </div>
        </div>
        </Link>
        <Link to={"bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
        <img src={Bus5} alt="bus image" className="w-full aspect-video object-contain object-center" />
        <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
 Luxury Bus
</h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
            </p>

            </div>
        </div>
        </Link>
        <Link to={"bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
        <img src={Bus6} alt="bus image" className="w-full aspect-video object-contain object-center" />
        <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
 Private Bus
</h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
            </p>

            </div>
        </div>
        </Link>
        <Link to={"bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
        <img src={HRTC1} alt="bus image" className="w-full aspect-video object-contain object-center" />
        <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
 State Transport Bus (HRTC)
</h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
            </p>

            </div>
        </div>
        </Link>
        <Link to={"bus-details"} className="w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4">
        <img src={EBus} alt="bus image" className="w-full aspect-video object-contain object-center" />
        <div className="px-3 py-4 space-y-2">
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
  Eco-Friendly Bus
</h1>
            <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                60 passengers
            </p>

            </div>
        </div>
        </Link>
        </div>
       </div>
    )
}

export default Bus