import { useSelector } from "react-redux";
import logoHeader from "../assets/bunny-hungry-low-circle-logo.png";
import OrderForm from "../features/cart/OrderForm";

export default function CartPage() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  console.log("------ isAuthen", isAuthen);

  return (
    <>
      {isAuthen ? (
        <div className="sm:w-[100vh] flex flex-col overflow-y-auto relative">
          <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
            <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
          </header>
          <div className="bg-gray-100 sm:w-[100vh] sm:h-[52.2vh] flex flex-col">
            <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 pt-4 text-black font-semibold text-[1.5rem]">
              Cart
            </div>
            <div className="grid grid-cols-1 gap-4 sm:mx-[2rem] sm:my-10">
              <OrderForm />
              <OrderForm />
              <OrderForm />
              <OrderForm />
              <OrderForm />
              <OrderForm />
              <OrderForm />
            </div>
            <div className="sm:w-[100vh] sm:h-[8.5vh] bg-gray-100 fixed top-[83.5vh]">
              <div className="sm:h-[3rem] sm:w-[24rem] bg-gray-300 rounded-lg sm:mx-[1rem] sm:mb-6 flex justify-around items-center fixed top-[85.5vh]">
                <div className="text-black">Amout : </div>
                <button className="sm:h-[1.5rem] sm:w-[4rem] bg-green-300 rounded-lg text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:w-[100vh] flex flex-col overflow-y-auto relative">
          <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
            <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
          </header>
          <div className="bg-gray-100 sm:w-[100vh] sm:h-[61vh] flex flex-col">
            <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 pt-4 text-black font-semibold text-[1.5rem]">
              Cart
            </div>
            <div className="sm:w-[45vh] sm:h-[61vh] flex justify-center items-center">
              <div className="text-2xl">Please Login to Order</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
