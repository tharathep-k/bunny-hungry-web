export default function MenuListHome({ item }) {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <img src={item.menuImage} className="w-[13rem] h-[10rem] px-[1.5rem]" />
      {item.name}
    </div>
  );
}
