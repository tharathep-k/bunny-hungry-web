import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { createCart } from "../features/cart/slice/cart-slice";

export default function ModalMenuCard({ onClose, open, item, allAdd }) {
  const [count, setCount] = useState(1);
  const [sum, setSum] = useState("");
  const [spicy, setSpicy] = useState("");
  const [addEgg, setAddEgg] = useState(+"");
  const [extra, setExtra] = useState(+"");
  const [input, setInput] = useState({});

  const user = useSelector((state) => state.auth.user);

  // console.log("-----", user.id);

  // console.log("extra", extra);

  const dispatch = useDispatch()
  // const navigate = useNavigate();

  useEffect(() => {
    setSum((+item.price + extra + addEgg) * count);
    setInput({ ...input, extra, spicy, addEgg, count, name:item.name, userId: user?.id, sumPrice: sum });
  }, [count, spicy, addEgg, extra, sum]);
  // console.log("sent all input :", input);

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
    dispatch(createCart(input))
    onClose()
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
                <a>{item.price} &#3647;</a>
              </div>

              {/* ----- addSpicy ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <a>เลือกระดับความเผ็ด</a>
                <div className="flex gap-4">
                  <label class="container">
                    <input
                      type="radio"
                      name="spicy"
                      value={allAdd.spicy[0].levelSpicy}
                      onChange={() => {
                        setSpicy(allAdd.spicy[0].levelSpicy);
                      }}
                    />
                    <span></span> {allAdd.spicy[0].name}
                  </label>
                </div>
                <div className="flex gap-4">
                  <label class="container">
                    <input
                      type="radio"
                      name="spicy"
                      value={allAdd.spicy[1].levelSpicy}
                      onChange={() => {
                        setSpicy(allAdd.spicy[1].levelSpicy);
                      }}
                    />
                    <span></span> {allAdd.spicy[1].name}
                  </label>
                </div>
                <div className="flex gap-4">
                  <label class="container">
                    <input
                      type="radio"
                      name="spicy"
                      value={allAdd.spicy[2].levelSpicy}
                      onChange={() => {
                        setSpicy(allAdd.spicy[2].levelSpicy);
                      }}
                    />
                    <span></span> {allAdd.spicy[2].name}
                  </label>
                </div>
                <div className="flex gap-4">
                  <label class="container">
                    <input
                      type="radio"
                      name="spicy"
                      value={allAdd.spicy[3].levelSpicy}
                      onChange={() => {
                        setSpicy(allAdd.spicy[3].levelSpicy);
                      }}
                    />
                    <span></span> {allAdd.spicy[3].name}
                  </label>
                </div>
              </div>

              {/* ----- addEgg ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <a>เลือกเพิ่มไข่</a>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input
                        type="radio"
                        name="egg"
                        value={allAdd.eggs[0].id}
                        onChange={() => {
                          setAddEgg(+allAdd.eggs[0].price);
                        }}
                      />
                      <span></span> {allAdd.eggs[0].name}
                    </label>
                  </div>
                  <a>+ {allAdd.eggs[0].price} &#3647;</a>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input
                        type="radio"
                        name="egg"
                        value={allAdd.eggs[1].id}
                        onChange={() => {
                          setAddEgg(+allAdd.eggs[1].price);
                        }}
                      />
                      <span></span> {allAdd.eggs[1].name}
                    </label>
                  </div>
                  <a>+ {allAdd.eggs[1].price} &#3647;</a>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input
                        type="radio"
                        name="egg"
                        value={allAdd.eggs[2].id}
                        onChange={() => {
                          setAddEgg(+allAdd.eggs[2].price);
                        }}
                      />
                      <span></span> {allAdd.eggs[2].name}
                    </label>
                  </div>
                  <a>+ {allAdd.eggs[2].price} &#3647;</a>
                </div>
              </div>

              {/* ----- Extra ----- */}
              <div className="flex flex-col py-4 px-6 gap-2 border border-slate-400 rounded-md">
                <a>ปริมาณอาหาร</a>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label className="container">
                      <input
                        type="radio"
                        name="extra"
                        value={allAdd.extra[0].id}
                        // onChange={handleChangeInput}
                        onChange={() => {
                          setExtra(+allAdd.extra[0].price);
                        }}
                      />
                      <span></span> {allAdd.extra[0].name}
                    </label>
                  </div>
                  <a>+ {allAdd.extra[0].price} &#3647;</a>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <label class="container">
                      <input
                        type="radio"
                        name="extra"
                        value={allAdd.extra[1].id}
                        // onChange={handleChangeInput}
                        onChange={() => {
                          setExtra(+allAdd.extra[1].price);
                        }}
                      />
                      <span></span> {allAdd.extra[1].name}
                    </label>
                  </div>
                  <a>+ {allAdd.extra[1].price} &#3647;</a>
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
