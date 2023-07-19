import { useDispatch } from "react-redux";
import { getAllOrder, updateStatusOrder } from "../order/slice/order-slice";

export default function OrderAdminCard({ data }) {
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    await dispatch(updateStatusOrder(data.id)).upwrap();
    await dispatch(getAllOrder()).upwrap();
  };

  return (
    <div className="sm:h-[6rem] sm:w-[22rem] border border-gray-500 flex justify-between items-center">
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

    // <div className="w-[8rem] text-center mr-2 p-1 rounded-lg bg-gray-400 text-white hover:bg-white hover:text-gray-400 ">
    //   Confirm Pay
    // </div>
  );
}
