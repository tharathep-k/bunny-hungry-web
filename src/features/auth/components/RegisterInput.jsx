import createClasses from "../../../utils/create-classes";

export default function RegisterInput({ placeholder, value, onChange, name, isInValid }) {
  const defaultClassname =
    "block w-full py-1 px-3 rounded-lg outline-none focus:ring";
  const className = createClasses(
    defaultClassname,
    isInValid
      ? "border border-red-600 focus:ring-2 focus:ring-red-400"
      : "border border-gray-300 focus:ring-green-200 focus:border-green-200"
  );

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
