import { useState } from "react";
import { Heading, Table, AddRecord, ManageInventory } from "./components";
import { tableData } from "./lib/data";

const initialData = tableData;

export default function App() {
  const [data, setData] = useState(initialData);
  let nextId = data.length;

  function handleAddNewItem(product, price) {
    const isAlreadyExist = data.some(
      (datum) => datum.product.toLowerCase() === product.toLowerCase()
    );
    if (!isAlreadyExist) {
      setData([
        ...data,
        {
          id: nextId++,
          product,
          quantity: 0,
          price,
          cost: 0,
        },
      ]);
    } else {
      alert("Item already exits...!");
    }
  }

  function handleAddRecord(product, quantity) {
    setData(
      data.map((datum) => {
        if (datum.product === product) {
          return {
            ...datum,
            quantity: datum.quantity + Number(quantity),
          };
        } else {
          return datum;
        }
      })
    );
  }

  function handleDeleteRecord(productID) {
    setData(data.filter((datum) => datum.id !== productID));
  }

  return (
    <main className="min-h-screen print:flex justify-center items-center">
      <section className="max-w-[768px] w-full mx-auto my-6 p-4 flex flex-col space-y-8 min-h-[650px]">
        <Heading />
        <AddRecord onAddRecord={handleAddRecord} data={data} />
        <Table onDeleteRecord={handleDeleteRecord} data={data} />
        <ManageInventory onAddNewItem={handleAddNewItem} data={data} />
        <p className="hidden print:block text-black text-center text-2xl font-medium">
          Thank you for your purchase!
        </p>
      </section>
    </main>
  );
}
