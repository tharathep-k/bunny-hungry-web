import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logoHeader from "../assets/bunny-hungry-low-circle-logo.png";
import OrderForm from "../features/order/OrderForm";
import { getOrder } from "../features/order/slice/order-slice";

export default function OrderPage() {
  const user = useSelector((state) => state.auth.user);
  const orderData = useSelector((state) => state.order.orderData);
  console.log(user.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(user?.id));
  }, []);

  return (
    <div className="sm:w-[100vh] flex flex-col overflow-y-auto relative">
      <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
        <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
      </header>
      <div className="bg-gray-100 sm:w-[100vh] sm:h-[60.8vh] flex flex-col">
        <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 pt-4 text-black font-semibold text-[1.5rem]">
          Order
        </div>
        <div className="grid grid-cols-1 gap-4 sm:mx-[2rem] sm:my-10">
          {orderData.map((el) => (
            <OrderForm key={el.id} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
