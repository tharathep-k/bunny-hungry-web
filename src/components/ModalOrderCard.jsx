import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInfoOrder } from "../features/order/slice/order-slice";

export default function ModalOrderCard({ open, onClose, data }) {
  const user = useSelector((state) => state.auth.user);
  console.log("===", user.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoOrder(user?.id));
  }, []);

  const handleOnClose = () => {
    onClose();
  };

  console.log(data);

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white z-20"></div>
          <div className="fixed inset-0 z-30 overflow-auto h-[53rem]">
            <div
              onClick={handleOnClose}
              className="pl-4 pt-4 pb-4 text-gray-600"
            >
              &#10005;
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="border border-black sm:h-[49.5rem] sm:w-[24rem] flex flex-col justify-between">
                <div className="flex justify-between pt-4">
                  <div className="pl-2">orderID : {data.id} </div>
                  <div className="pr-2">Time</div>
                </div>
                <hr />
                <div className="h-[40rem]">
                  <div className="flex justify-between pb-4">
                    <div className="pl-2">1x</div>
                    <div className="w-[16rem]">Description</div>
                    <div className="pr-2">Price</div>
                  </div>
                  <hr />
                </div>
                <hr />
                <div className="flex justify-end pb-4">
                  <div className="pr-2">price amount : 500</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
