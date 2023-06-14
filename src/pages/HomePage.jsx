import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

import { getMenu } from "../features/auth/slice/product-slice";
import HomeCarousel from "../features/home/HomeCarousel";
import SearchFrom from "../features/home/SearchFrom";
import MenuCardHome from "../features/home/MenuCardHome";

export default function HomePage() {
  const menu = useSelector((state) => state.menu.data);
  console.log(menu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div className="sm:w-[100vh] sm:h-[57rem] flex flex-col fixed">
      <header className="sm:max-w-[27rem] sm:max-h-[18rem] overflow-hidden border border-black">
        <HomeCarousel />
      </header>
      <div className="bg-gray-100 sm:max-w-[27rem] sm:h-[34rem]">
        <div className="sm:max-w-[27rem] sm:h-[5rem] flex justify-center items-center gap-2">
          <SearchFrom />
        </div>
        <div>
          <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 text-black font-semibold text-[1.5rem]">
            Menu
          </div>
          <MenuCardHome menu={menu} />
        </div>
      </div>
    </div>
  );
}
