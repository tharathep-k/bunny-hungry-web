import LoginInput from "./LoginInput";
import LoginSelect from "./LoginSelect";

export default function LoginForm() {
  return (
    <>
      <div>
        <LoginInput placeholder="Username" />
      </div>
      <div>
        <LoginInput placeholder="Password" />
      </div>
      <LoginSelect />
      <button className="h-[2rem] w-[8rem] sm:w-[6rem] sm:h-[2rem] sm:text-[14px] rounded-lg font-semibold bg-white text-gray-400 hover:bg-green-200 hover:text-white">
        Login
      </button>
    </>
  );
}
