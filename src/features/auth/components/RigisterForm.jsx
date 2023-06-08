import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
    return (
      <div className="grid grid-cols-2 pt-6 gap-2 gap-y-4">
      <div>
        <RegisterInput placeholder="Firstname" />
      </div>
      <div>
        <RegisterInput placeholder="Lastname" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Email" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Phonenumber" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Password" />
      </div>
      <div className="col-span-full">
        <RegisterInput placeholder="Confirm Password" />
      </div>
      <div className="pt-6 flex justify-center col-span-full">
        <button className="h-[2rem] w-[8rem] sm:w-[6rem] sm:h-[2rem] sm:text-[14px] rounded-lg font-semibold bg-white text-gray-400 hover:bg-green-200 hover:text-white">
          Submit
        </button>
      </div>
    </div>
    )
}