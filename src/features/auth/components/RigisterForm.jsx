import { useState } from "react";
import { useDispatch } from "react-redux";

import validateRegister from "../validator/validate-register";
import RegisterInput from "./RegisterInput";
import InputErrorMessage from "./InputErrorMessage";
import { registerAsync } from "../slice/auth-slice";

const initialInput = {
  firstname: "",
  lastname: "",
  mobile: "",
  password: "",
  confirmpassword: "",
};

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      console.log(result);
      if (result) {
        return setError(result);
      }
      setError({});

      console.log(input);
      // console.log(result)
      // console.log(dispatch)
      console.log(registerAsync(input));
      await dispatch(registerAsync(input)).unwrap();
      alert("Register successfully");
      onSuccess();
    } catch (error) {
      console.log(error)
      alert("This number is already in use. Please use another number.");
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 pt-6 gap-2 gap-y-4 px-2">
        <div>
          <RegisterInput
            name="firstname"
            placeholder="Firstname"
            value={input.firstname}
            onChange={handleChangeInput}
            isInValid={error.firstname}
          />
          {error.firstname && <InputErrorMessage message={error.firstname} />}
        </div>
        <div>
          <RegisterInput
            name="lastname"
            placeholder="Lastname"
            value={input.lastname}
            onChange={handleChangeInput}
            isInValid={error.lastname}
          />
          {error.lastname && <InputErrorMessage message={error.lastname} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="mobile"
            placeholder="Phone number"
            value={input.mobile}
            onChange={handleChangeInput}
            isInValid={error.mobile}
          />
          {error.mobile && <InputErrorMessage message={error.mobile} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChangeInput}
            isInValid={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="confirmpassword"
            placeholder="Confirm Password"
            value={input.confirmpassword}
            onChange={handleChangeInput}
            isInValid={error.confirmpassword}
          />
          {error.confirmpassword && (
            <InputErrorMessage message={error.confirmpassword} />
          )}
        </div>
        <div className="pt-6 flex justify-center col-span-full">
          <button className="h-[2rem] w-[8rem] sm:w-[6rem] sm:h-[2rem] sm:text-[14px] rounded-lg font-semibold bg-white text-gray-400 hover:bg-green-200 hover:text-white">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
