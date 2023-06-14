import EditMenuInput from "./EditMenuInput";
import addphotoIcon from "../../icons/addphoto.svg";
import { useDispatch, useSelector } from "react-redux";
import { editMenu } from "../auth/slice/product-slice";
import { useState } from "react";

export default function EditMenuFrom({ item }) {

  const [input, setInput] = useState(item);

  const handleOnChangeInput = (e) => {
    setInput({ ...item, [e.target.name]: e.target.value });
    console.log(input);
  };

  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    try {
      await dispatch(editMenu(input)).unwrap();
    } catch (error) {
      alert("Please Try again");
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleOnSubmit}>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center mt-4">
          <div className="w-[10rem]">
            <img src={addphotoIcon} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="grid grid-cols-2 pt-6 gap-2 gap-y-4 px-2">
            <EditMenuInput
              placeholder="Name"
              onChange={handleOnChangeInput}
              value={input.name}
              name="name"
            />
            <EditMenuInput
              placeholder="Price"
              onChange={handleOnChangeInput}
              value={input.price}
              name="price"
            />
          </div>
          <select
            name="type"
            id="type"
            className="w-[10.5rem]"
            onChange={handleOnChangeInput}
            value={input.type}
          >
            <option disabled selected value="0">
              Select Type Product
            </option>
            <option value="Food">Food</option>
            <option value="Drink">Drink</option>
          </select>
        </div>
        <button className="w-[6rem] h-[2rem] bg-green-400 text-white hover:bg-white hover:text-green-700 rounded-lg mt-6">
          Submit
        </button>
      </div>
    </form>
  );
}
