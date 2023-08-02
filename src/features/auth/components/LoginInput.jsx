import createClasses from "../../../utils/create-classes";

export default function LoginInput({ placeholder, isInvalid, onChange, value, name, type }) {
  const defaultClassnameLogin =
    "w-[20rem] py-1 px-3 rounded-lg sm:w-[16rem] outline-none focus:ring";

  const className = createClasses(
    defaultClassnameLogin,
    isInvalid
      ? "border border-red-600 focus:ring-2 focus:ring-red-400"
      : "border border-gray-300  focus:ring-green-200 focus:border-green-200"
  );

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
