import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalOrderCard from "../../components/ModalOrderCard";
import {
  getAllOrder,
  getInfoOrder,
  updateStatusOrder,
} from "../order/slice/order-slice";

export default function OrderAdminCard({ data }) {
  const modalData = useSelector(state => state.order.showAllData)

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOnClick = async () => {
    await dispatch(updateStatusOrder(data.id)).upwrap();
    await dispatch(getAllOrder()).upwrap();
  };

  const handleOnClickOpen = async () => {
    setOpen(true);
    await dispatch(getInfoOrder(data.id)).upwrap();
  };

  const newData = data;
  console.log("----", newData);

  return (
    <>
      <div
        className="sm:h-[6rem] sm:w-[22rem] border border-gray-500 flex justify-between items-center"
        onClick={handleOnClickOpen}
        role="button"
      >
        <div className="ml-2">OrderID: {data.id} </div>
        <div className="w-[8rem] ml-3">Status: {data.status} </div>
        {data.status == "pending" ? (
          <div
            className="mr-4 p-1 rounded-lg bg-gray-400 text-white hover:bg-white hover:text-gray-400"
            onClick={handleOnClick}
          >
            Confirm Pay
          </div>
        ) : (
          <div className="invisible mr-4 p-1">Confirm Pay</div>
        )}
      </div>
      <ModalOrderCard
        open={open}
        onClose={() => setOpen(false)}
        data={newData}
        modalData={modalData}
      />
    </>
  );
}
