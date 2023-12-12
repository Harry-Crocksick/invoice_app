import React from "react";

const AvailableItems = ({ data }) => {
  return (
    <ul className="flex flex-col space-y-4">
      {data.map((datum) => (
        <li
          key={datum.id}
          className="flex items-center justify-between p-2 border border-black"
        >
          <p className="font-semibold text-black text-lg">{datum.product}</p>
          <p className="text-slate-500 font-medium text-md">
            {datum.price} MMK
          </p>
        </li>
      ))}
    </ul>
  );
};

export default AvailableItems;
