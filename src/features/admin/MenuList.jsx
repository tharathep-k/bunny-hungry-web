import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ModalEditMenu from "../../components/ModalEditManu";
import binIcon from "../../icons/bin.svg";
import editIcon from "../../icons/edit.svg";
import { deleteMenu, getMenu } from "../auth/slice/product-slice";
import EditMenuFrom from "./EditMenuFrom";

export default function MenuList({ item }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, [remove]);

  const handleOnDelete = async (e) => {
    try {
      await dispatch(deleteMenu(item.id)).unwrap();
      setRemove(true);
      alert("Delete success");
    } catch (error) {
      alert("Please Try again");
    }
  };

  return (
    <div className="sm:h-[6.5rem] sm:w-[22rem] mb-[0.5rem] rounded-lg border border-gray-500 flex justify-between items-center">
      <div className="w-[10rem]">
        <div className="mx-4">{item.name}</div>
      </div>
      <div onClick={() => setOpenEdit(true)}>
        <img src={editIcon} className="w-[2rem] h-[2rem]" />
      </div>

      {openEdit && (
        <ModalEditMenu
          open={openEdit}
          onClose={() => {
            // console.log("gg",openEdit)
            setOpenEdit(false);
          }}
          title="Edit Menu"
          setOpenEdit={setOpenEdit}
        >
          <EditMenuFrom item={item} />
        </ModalEditMenu>
      )}
      <div onClick={handleOnDelete}>
        <img src={binIcon} className="w-[2rem] h-[2rem] mr-4" />
      </div>
    </div>
  );
}
