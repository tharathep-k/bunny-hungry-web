import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import logoHeader from "../assets/bunny-hungry-low-circle-logo.png";
import Modal from "../components/Modal";
import addIcon from "../icons/add.svg";
import { getMenu } from "../features/auth/slice/product-slice";
import MenuCard from "../features/admin/MenuCard";
import AddMenuForm from "../features/admin/AddMenuForm";

export default function AdminHomePage() {
  const [open, setOpen] = useState(false);

  const menu = useSelector(state => state.menu.data)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  

  return (
    <>
      <div className="sm:w-[100vh] flex flex-col overflow-y-auto">
        <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
          <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
        </header>
        <div className="bg-gray-100 sm:w-[42vh] flex flex-col">
          <div className="flex justify-between">
            <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 pt-4 text-black font-semibold text-[1.5rem]">
              Menu List
            </div>
            <div onClick={() => setOpen(true)}>
              <img src={addIcon} className="w-[2rem] h-[2rem] mt-5" />
            </div>
            <Modal open={open} onClose={() => setOpen(false)} title="Add Menu">
              <AddMenuForm />
            </Modal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:mx-[2rem] sm:my-4">
            <MenuCard menu={menu}/>
          </div>
        </div>
      </div>
    </>
  );
}
