import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moogob from "../assets/moogob.jpeg";

export default function ModalMenuCard({ onClose, open, item, allAdd }) {
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState(0);
  const [isCheckedSpicy, setIsCheckedSpicy] = useState(false);
  const [extra, setExtra] = useState(0);

  // console.log("egg", allAdd.eggs);

  const navigate = useNavigate();

  useEffect(() => {
    // setExtra()
    setSum(item.price * count + extra);
  }, [count]);

  const spicyChecked = () => {
    setIsCheckedSpicy(!isCheckedSpicy);
  };

  const handleOnClose = () => {
    setCount(1);
    onClose();
  };

  const handleOnClickDecrease = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  const handleOnClickAdd = () => {
    setCount(count + 1);
  };

  const handleOnClickSubmit = () => {
    navigate("/cart");
  };

  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white z-20"></div>
          <div className="fixed inset-0 z-30 overflow-auto h-[53rem]">
            <div
              onClick={handleOnClose}
              className="pl-4 pt-4 absolute text-gray-600"
            >
              &#10005;
            </div>
            <div>
              <img
                src={item.menuImage}
                alt="picture"
                className="h-[19.2rem] w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              {/* ----- Title ----- */}
              <div className="border border-slate-400 rounded-b-md h-[6rem] px-6 flex justify-between items-center">
                <a>{item.name}</a>
                <a>{item.price} Bath</a>
              </div>

              {/* ----- addSpicy ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <a>เลือกระดับความเผ็ด</a>
                <div className="flex gap-4">
                  <label class="container">
                    <input type="radio" name="spicy" />
                    <span></span> {allAdd.spicy[0].name}
                  </label>
                </div>
                <div className="flex gap-4">
                  <label class="container">
                    <input type="radio" name="spicy" />
                    <span></span> {allAdd.spicy[1].name}
                  </label>
                </div>
                <div className="flex gap-4">
                  <label class="container">
                    <input type="radio" name="spicy" />
                    <span></span> {allAdd.spicy[2].name}
                  </label>
                </div>
                <div className="flex gap-4">
                  <label class="container">
                    <input type="radio" name="spicy" />
                    <span></span> {allAdd.spicy[3].name}
                  </label>
                </div>
              </div>

              {/* ----- addEgg ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <a>เลือกเพิ่มไข่</a>
                <div className="flex gap-4">
                  <label class="container">
                    <input type="radio" name="egg" />
                    <span></span> {allAdd.eggs[0].name}
                  </label>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input type="radio" name="egg" />
                      <span></span> {allAdd.eggs[1].name}
                    </label>
                  </div>
                  <a>+ {allAdd.eggs[1].price} Bath</a>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input type="radio" name="egg" />
                      <span></span> {allAdd.eggs[2].name}
                    </label>
                  </div>
                  <a>+ {allAdd.eggs[2].price} Bath</a>
                </div>
              </div>

              {/* ----- Extra ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <a>เลือกระดับความเผ็ด</a>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label className="container">
                      <input
                        type="radio"
                        name="radio"
                        onChange={() => {
                          setExtra(+allAdd.extra[0].price);
                        }}
                      />
                      <span></span> {allAdd.extra[0].name}
                    </label>
                  </div>
                  <a>+ {allAdd.extra[0].price} Bath</a>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input
                        type="radio"
                        name="radio"
                        onChange={() => {
                          setExtra(+allAdd.extra[1].price);
                        }}
                      />
                      <span></span> {allAdd.extra[1].name}
                    </label>
                  </div>
                  <a>+ {allAdd.extra[1].price} Bath</a>
                </div>
              </div>

              {/* ----- Add Order ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <div className="flex justify-center gap-2">
                  <div
                    role="button"
                    className="flex justify-center text-[1.5rem] w-[2rem] rounded-sm text-black border border-gray-400 hover:bg-slate-200 hover:text-white"
                    onClick={handleOnClickDecrease}
                  >
                    -
                  </div>
                  <input
                    type="number"
                    className="w-6 text-center"
                    value={count}
                  />
                  <div
                    role="button"
                    className="flex justify-center text-[1.5rem] w-[2rem] rounded-sm text-black border border-gray-400 hover:bg-slate-200 hover:text-white"
                    onClick={handleOnClickAdd}
                  >
                    +
                  </div>
                </div>
              </div>

              {/* ----- Price amount / Back To Menu ----- */}
              <div>
                {count >= 1 ? (
                  <div className="flex justify-center pb-6 px-6">
                    <div
                      className="text-center p-2 w-[15rem] rounded-lg bg-slate-200 hover:bg-slate-200 hover:text-white"
                      role="button"
                      onClick={handleOnClickSubmit}
                    >
                      Amount {sum} - Add to Cart
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center pb-6 px-6 mt-0">
                    <div
                      className="text-center p-2 w-[14rem] rounded-lg bg-slate-200 hover:bg-slate-200 hover:text-white"
                      role="button"
                      onClick={handleOnClose}
                    >
                      Back To Menu
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
