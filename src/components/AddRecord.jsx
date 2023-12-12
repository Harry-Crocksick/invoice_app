import { useState } from "react";

const AddRecord = ({ onAddRecord, data }) => {
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Selected:", selected);
    onAddRecord(selected, quantity);
    setSelected("");
    setQuantity("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 md:grid-cols-6 gap-4 print:hidden"
    >
      <select
        value={selected}
        name="product"
        className="col-span-full md:col-span-2"
        onChange={(e) => setSelected(e.target.value.trim())}
        required
      >
        <option value="">Select Product</option>
        {data.map((datum) => (
          <option key={datum.id}>{datum.product}</option>
        ))}
      </select>
      <input
        type="number"
        name="number"
        value={quantity}
        id="number"
        className="col-span-full md:col-span-2"
        placeholder="quantity"
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button
        type="submit"
        className="col-span-full py-2.5 md:py-0 md:col-span-2 bg-black text-white font-semibold"
      >
        Add Record
      </button>
    </form>
  );
};

export default AddRecord;
