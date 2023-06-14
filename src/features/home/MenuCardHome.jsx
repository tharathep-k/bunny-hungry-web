import MenuListHome from "./MenuListHome";

export default function MenuCardHome({ menu }) {
  const showMenu = menu;
  console.log(showMenu);

  return (
    <div className="sm:h-[24rem] sm:max-w-[27rem] grid grid-cols-2 pt-6 pr-3 gap-3 overflow-auto">
      {showMenu.map((el) => (
        <MenuListHome key={el.id} item={el} />
      ))}
    </div>
  );
}
