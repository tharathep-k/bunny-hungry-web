export default function EditMenuInput({ value, name, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="block w-full py-1 px-3 rounded-lg outline-none border border-red-600 focus:ring-2 focus:ring-red-400 bg-white"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
