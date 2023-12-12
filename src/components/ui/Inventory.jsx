import React from "react";
import AvailableItems from "./AvailableItems";
import NewItem from "./NewItem";

const Inventory = ({ onAddNewItem, data }) => {
  return (
    <>
      <div
        id="hs-overlay-right"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed -top-8 end-0 transition-all duration-300 transform h-full max-w-sm w-full z-[60] bg-white border-s dark:bg-gray-800 dark:border-gray-700"
        tabIndex={-1}
      >
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <div>
            <h1 className="font-semibold text-2xl text-black dark:text-white">
              Manage Inventory
            </h1>
            <p className="text-xl text-slate-400 font-semibold">
              Available Items
            </p>
          </div>
          <button
            type="button"
            className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-overlay-right"
          >
            <span className="sr-only">Close modal</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <AvailableItems data={data} />
          <NewItem onAddNewItem={onAddNewItem} />
        </div>
      </div>
    </>
  );
};

export default Inventory;
