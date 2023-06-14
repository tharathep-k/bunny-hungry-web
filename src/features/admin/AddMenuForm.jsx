import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import AddMenuInput from "./AddMenuInput";
import addphotoIcon from "../../icons/addphoto.svg";
import { createMenu } from "../../features/auth/slice/product-slice";

const initialMenu = {
  name: "",
  price: "",
  type: "",
};

export default function AddMenuForm({ onSuccess }) {
  const [input, setInput] = useState(initialMenu);
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);

  console.log(file);

  const inputEl = useRef();

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
    e.preventDefault();
    const validateName = validate(input.name);
    const validatePrice = validate(input.price);
    const validateType = validate(input.type);

    // if (input.name && input.price && input.type ) {
    //   formdata.append("name", input.name)
    //   formdata.append("price", input.price)
    //   formdata.append("type", input.type)
    // }

    const formData = new FormData();
    if (input.name) {
      formData.append("name", input.name);
    }
    if (input.price) {
      formData.append("price", input.price);
    }
    if (input.type) {
      formData.append("type", input.type);
    }
    if (file) {
      formData.append("menuImage", file);
    }

    try {
      // if (validateName && validatePrice && validateType) {
      await dispatch(createMenu(formData)).unwrap();
      onSuccess();
      alert("Add menu success");
      // }
    } catch (error) {
      alert(error);
      onSuccess();
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleOnSubmit}>
      <div className="flex flex-col items-center">
        {/* <div className="flex justify-center items-center mt-4">
          <div className="w-[10rem]" type="file" role="button" ref={inputEl} onChange={e => {if (e.target.files[0]) setFile(e.target.files[0])}}>
            <img src={addphotoIcon} />
          </div>
        </div> */}

        <input
          type="file"
          className="hidden"
          ref={inputEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              // console.log(e.target)
              setFile(e.target.files[0]);
            }
          }}
        />

        {file ? (
          <div
            onClick={() => inputEl.current.click()}
            role="button"
            className="bg-gray-100 relative"
          >
            <img
              alt="post"
              src={URL.createObjectURL(file)}
              className="mx-auto"
            />
            <div
              className="absolute right-1.5 top-1.5 font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
                inputEl.current.value = "";
              }}
            >
              &#10005;
            </div>
          </div>
        ) : (
          <div
            className="bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center flex-col py-12 w-[20rem]"
            onClick={() => inputEl.current.click()}
            role="button"
          >
            <div className="rounded-full bg-gray-300 h-12 w-12 flex items-center justify-center">
              <img src={addphotoIcon} />
            </div>
            <span>Add photo</span>
          </div>
        )}

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
