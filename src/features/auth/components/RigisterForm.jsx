import { useState } from "react";
import validateRegister from "../validator/validate-register";
import RegisterInput from "./RegisterInput";
import InputErrorMessage from "./InputErrorMessage";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const result = validateRegister(input);
    if (result) {
      return setError(result);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 pt-6 gap-2 gap-y-4 px-2">
        <div>
          <RegisterInput
            name="firstName"
            placeholder="Firstname"
            value={input.firstName}
            onChange={handleChangeInput}
            isInValid={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <RegisterInput
            name="lastName"
            placeholder="Lastname"
            value={input.lastName}
            onChange={handleChangeInput}
            isInValid={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="phoneNumber"
            placeholder="Phonenumber"
            value={input.phoneNumber}
            onChange={handleChangeInput}
            isInValid={error.phoneNumber}
          />
          {error.phoneNumber && (
            <InputErrorMessage message={error.phoneNumber} />
          )}
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
            name="confirmPassword"
            placeholder="Confirm Password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            isInValid={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
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
