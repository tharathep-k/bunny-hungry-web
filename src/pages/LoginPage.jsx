import LoginForm from "../features/auth/components/LoginForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-2">
        <div className="w-[25rem] h-[25rem] flex flex-col justify-evenly items-center border border-gray-300 rounded-lg sm:w-[20rem] sm:h-[20rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-pink-100 ">
          <div className="text-2xl font-semibold ">Login Form</div>
          <LoginForm />
        </div>
        <RegisterContainer />
      </div>
    </>
  );
}
