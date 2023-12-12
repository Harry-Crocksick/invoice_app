import { useState } from "react";

const NewItem = ({ onAddNewItem }) => {
  const [formInputs, setFormInputs] = useState({
    product: "",
    price: "",
  });

  function handleChange(e) {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddNewItem(formInputs.product, formInputs.price);
    setFormInputs({
      product: "",
      price: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2 mt-8">
      <input
        type="text"
        name="product"
        value={formInputs.product}
        className="col-span-full"
        placeholder="New Item Name"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        value={formInputs.price}
        className="col-span-2"
        placeholder="Price"
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-black text-white">
        Add New
      </button>
    </form>
  );
};

export default NewItem;
