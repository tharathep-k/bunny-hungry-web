export default function RegisterInput({ placeholder }) {
  return (
    <input
      type="text"
      className="block w-full border-gray-300 py-1 px-3 rounded-lg outline-none focus:ring focus:ring-green-200 focus:border-green-200"
      placeholder={placeholder}
    />
  );
}
