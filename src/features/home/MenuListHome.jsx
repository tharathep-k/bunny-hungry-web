import { useState } from "react";
import ModalMenuCard from "../../components/ModalMenuCard";

export default function MenuListHome({ item, allAdd }) {
  const [open, setOpen] = useState(false);

  console.log("-------",item);

  const handleOnClickImg = (e) => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center text-black">
      <img
        src={item.menuImage}
        className="w-[13rem] h-[10rem] px-[1.5rem]"
        onClick={handleOnClickImg}
      />
      <ModalMenuCard open={open} onClose={() => setOpen(false)} item={item} allAdd={allAdd} />
      {item.name}
    </div>
  );
}
