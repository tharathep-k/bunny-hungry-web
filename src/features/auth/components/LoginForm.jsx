import { useState } from "react";
import { useDispatch } from "react-redux";

import validateLogin from "../validator/validate-login";
import LoginInput from "./LoginInput";
import LoginSelect from "./LoginSelect";
import InputErrorMessage from "./InputErrorMessage";
import { loginAsync } from "../slice/auth-slice";

const initialLogin = {
  mobile: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialLogin);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleChangeInputLogin = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      const result = validateLogin(input);
      if (result) {
        return setError(result);
      }
      setError({});

      await dispatch(loginAsync(input)).unwrap();
      alert("Enjoy your order !!");
    } catch (error) {
      alert("Login false, please try again.");
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-6"
      onSubmit={handleSubmitLogin}
    >
      <div>
        <LoginInput
          name="mobile"
          placeholder="Phone number"
          onChange={handleChangeInputLogin}
          type="text"
          value={input.mobile}
          isInvalid={error.mobile}
        />
        {error.mobile && <InputErrorMessage message={error.mobile} />}
      </div>
      <div>
        <LoginInput
          name="password"
          placeholder="Password"
          onChange={handleChangeInputLogin}
          type="password"
          value={input.password}
          isInvalid={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>
      {/* Select Table */}

      {/* <LoginSelect /> */}

      <button className="h-[2rem] w-[8rem] sm:w-[6rem] sm:h-[2rem] sm:text-[14px] rounded-lg font-semibold bg-white text-gray-400 hover:bg-green-200 hover:text-white">
        Login
      </button>
    </form>
  );
}
