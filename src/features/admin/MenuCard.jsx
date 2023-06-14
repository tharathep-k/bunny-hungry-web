import MenuList from "../admin/MenuList";

export default function MenuCard({ menu }) {
  const allMenu = menu;
  console.log(allMenu);

  return (
    <div>
      <div className="flex flex-col gap-4">
        {allMenu.map((el) => (
          <MenuList key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
}
