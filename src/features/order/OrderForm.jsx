import { useState } from "react";
import ModalOrderCard from "../../components/ModalOrderCard";

export default function OrderForm({ data }) {
  const [open, setOpen] = useState(false);

  const handleOnClickOpen = (e) => {
    setOpen(true);
  };
  console.log("open", open);
  return (
    <>
      <div
        className="sm:h-[6rem] sm:w-[22rem] border border-gray-500 flex justify-between items-center"
        onClick={handleOnClickOpen}
      >
        <div className="ml-4">OrderID: {data.id}</div>
        <div className="w-[10rem] ml-5">Status: {data.status}</div>
        {data.status == "pending" ? (
          <div className="mr-4 p-1 rounded-lg bg-gray-400 text-white hover:bg-white hover:text-gray-400 ">
            Pay Bill
          </div>
        ) : (
          <div className="invisible mr-4 p-1">Pay Bill</div>
        )}
      </div>
      <ModalOrderCard
        open={open}
        onClose={() => setOpen(false)}
        data={newData}
      />
    </>
  );
}
