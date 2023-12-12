import { tableHeaders } from "../../lib/data";

const TableHeader = () => {
  return (
    <thead className="bg-black text-white">
      <tr>
        {tableHeaders.map((header) => (
          <th
            key={header}
            scope="col"
            className={`px-6 py-3 text-center text-xs font-semibold text-white uppercase ${
              header === "Cost" ? "text-end" : ""
            }`}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
