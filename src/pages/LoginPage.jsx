import { useNavigate } from "react-router-dom";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    navigate("/home");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-2">
        <div className="w-[25rem] h-[25rem] flex flex-col justify-evenly items-center border border-gray-300 rounded-lg sm:w-[20rem] sm:h-[20rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-pink-100 ">
          <div className="w-full px-4 text-2xl font-semibold flex justify-between">
            <div className="invisible">&#10005;</div>
            <div>Login Form</div>
            <div
              className="text-gray-500"
              role="button"
              onClick={handleOnClick}
            >
              &#10005;
            </div>
          </div>
          <LoginForm />
        </div>
        <RegisterContainer />
      </div>
    </>
  );
}
