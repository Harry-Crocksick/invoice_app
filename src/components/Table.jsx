import TableBody from "./ui/TableBody";
import TableFoot from "./ui/TableFoot";
import TableHeader from "./ui/TableHeader";

const Table = ({ data, onDeleteRecord }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <TableHeader />
              <TableBody data={data} onDeleteRecord={onDeleteRecord} />
              <TableFoot data={data} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
