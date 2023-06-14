import { useState } from "react";
import { useDispatch } from "react-redux";

import AddMenuInput from "./AddMenuInput";
import addphotoIcon from "../../icons/addphoto.svg";
import { createMenu } from "../../features/auth/slice/product-slice";

const initialMenu = {
  name: "",
  price: "",
  type: "",
};

export default function AddMenuForm({onSuccess}) {
  const [input, setInput] = useState(initialMenu);
  const [error, setError] = useState(false);

  const validate = (text) => {
    if (text.trim() === "") {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const dispatch = useDispatch();

  const handleOnChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input);
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateName = validate(input.name);
      const validatePrice = validate(input.price);
      const validateType = validate(input.type);

      if (validateName && validatePrice && validateType) {
        await dispatch(createMenu(input)).unwrap();
        onSuccess()
        alert("Add menu success");
      }
    } catch (error) {
      alert(error);
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
            <AddMenuInput
              placeholder="Name"
              onChange={handleOnChangeInput}
              value={input.name}
              name="name"
            />
            <AddMenuInput
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
            <option value="1">Food</option>
            <option value="2">Drink</option>
          </select>
        </div>
        <button className="w-[6rem] h-[2rem] bg-green-400 text-white hover:bg-white hover:text-green-700 rounded-lg mt-6">
          Submit
        </button>
      </div>
    </form>
  );
}
