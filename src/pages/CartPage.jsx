import FooterFrom from "../features/home/FooterForm";
import logoHeader from "../assets/bunny-hungry-low-circle-logo.png";
import OrderForm from "../features/cart/OrderForm";

export default function CartPage() {
  return (
    <div className="sm:w-[26.5rem] sm:h-[57rem] flex flex-col fixed">
      <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
        <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
      </header>
      <div className="bg-gray-100 sm:max-w-[27rem] sm:h-[33rem] flex flex-col">
        <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 pt-4 text-black font-semibold text-[1.5rem]">
          Cart
        </div>
        <div className="grid grid-cols-1 gap-4 sm:mx-[2rem] sm:my-10 overflow-auto">
          <OrderForm />
          <OrderForm />
          <OrderForm />
          <OrderForm />
        </div>
        <div className="sm:h-[3rem] sm:w-[24rem] bg-gray-300 rounded-lg sm:mx-[1rem] sm:mb-8 flex justify-around items-center " >
            <div className="text-black">Amout : </div>
            <button className="sm:h-[1.5rem] sm:w-[4rem] bg-green-300 rounded-lg text-white">Submit</button>
        </div>
      </div>
      <footer>
        <div className="sm:max-w-[27rem] sm:h-[6rem] flex">
          <FooterFrom />
        </div>
      </footer>
    </div>
  );
}
