import React from "react";
import { Link } from 'react-router-dom';

import Bus1 from '../../../assets/bus1.png';
import Bus2 from '../../../assets/bus6.png';
import Bus3 from '../../../assets/bus9.png';

const Category = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium">Category</h1>
        <Link to="/bus" className="text-violet-600">View All</Link>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Link
          to="/bus"
          className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group overflow-hidden transition-all duration-300"
        >
          <img src={Bus1} alt="bus img" className="w-full aspect-video object-contain" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 hidden group-hover:flex items-center justify-center transition-all duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
              Private Bus
            </h2>
          </div>
        </Link>
        <Link
          to="/bus"
          className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group overflow-hidden transition-all duration-300"
        >
          <img src={Bus2} alt="bus img" className="w-full aspect-video object-contain" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 hidden group-hover:flex items-center justify-center transition-all duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
              Tourist Bus
            </h2>
          </div>
        </Link>
        <Link
          to="/bus"
          className="bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl px-4 py-5 relative group overflow-hidden transition-all duration-300"
        >
          <img src={Bus3} alt="bus img" className="w-full aspect-video object-contain" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 hidden group-hover:flex items-center justify-center transition-all duration-300">
            <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
              Government Bus
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
