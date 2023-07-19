import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import binIcon from "../../icons/bin.svg";
import { deleteCart, getCart } from "./slice/cart-slice";

export default function OrderForm({ menu, data, egg, spicy, extra, quantity }) {
  const [sum, setSum] = useState("");

  const user = useSelector((state) => state.auth.user);
  const userId = user.id;

  const dispatch = useDispatch();

  const cartId = data.id;
  // console.log("ID :",cartId);

  useEffect(() => {
    setSum((+menu.price + +extra.price + +egg.price) * quantity);
  }, [quantity]);

  const handleOnClickDelete = () => {
    console.log("Click Delete");
    dispatch(deleteCart(cartId));
    dispatch(getCart(userId));

  };

  return (
    <div className="sm:h-[6rem] sm:w-[22rem] border border-gray-500 flex justify-between items-center">
      <div className="ml-4 w-[9rem]">
        {menu.name}
        <div className="invisible">x</div>
        <div className="text-[14px] text-gray-500">
          {egg.name} {spicy.name} {extra.name}
        </div>
      </div>
      <div className="text-center text-[18px] w-[3rem] ml-2"> {sum} </div>
      <div className="flex gap-2">
        <div role="button" className="text-[1.5rem] text-black">
          -
        </div>
        <div className="text-[1rem] text-black flex items-center">
          {quantity}
        </div>
        <div role="button" className="text-[1.5rem] text-black">
          +
        </div>
      </div>
      <div onClick={handleOnClickDelete} role="button">
        <img src={binIcon} className="w-[1.5rem] h-[1.5rem] mr-4" />
      </div>
    </div>
  );
}
