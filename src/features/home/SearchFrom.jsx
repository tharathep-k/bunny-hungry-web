import searchIcon from "../../icons/search.svg";

export default function SearchFrom() {
  return (
    <>
      <input
        type="text"
        className="w-[20rem] rounded-lg px-2"
        placeholder="What doyou want to eat ?"
      />
      <div className="h-[1rem] w-[1rem] absolute right-16">
        <img src={searchIcon} />
      </div>
    </>
  );
}
