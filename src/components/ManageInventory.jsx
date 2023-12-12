import Inventory from "./ui/Inventory";

const ManageInventory = ({ onAddNewItem, data }) => {
  return (
    <>
      <Inventory onAddNewItem={onAddNewItem} data={data} />
      <div className="flex justify-end items-center space-x-2 print:hidden">
        <button
          type="button"
          data-hs-overlay="#hs-overlay-right"
          className="border-2 border-black px-4 py-1.5 bg-white text-black"
        >
          Manage Inventory
        </button>
        <button
          className="border-2 border-black px-4 py-1.5 bg-black text-white"
          onClick={() => print()}
        >
          Print
        </button>
      </div>
    </>
  );
};

export default ManageInventory;
