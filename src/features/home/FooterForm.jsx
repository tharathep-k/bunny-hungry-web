import { Link } from "react-router-dom";

import profileIcon from "../../icons/profile.svg";
import cartIcon from "../../icons/shopping-cart.svg";
import homeIcon from "../../icons/home.svg";
import menuIcon from "../../icons/menu.svg";

export default function FooterFrom() {
  return (
    <>
      <Link
        to="/home"
        role="button"
        className="h-[6rem] w-[6.75rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={homeIcon} className="fill-white"/>
        </div>
      </Link>
      <Link
        role="button"
        className="h-[6rem] w-[6.75rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={menuIcon} />
        </div>
      </Link>
      <Link
        to="/cart"
        role="button"
        className="h-[6rem] w-[6.75rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={cartIcon} />
        </div>
      </Link>
      <Link
        to="/login"
        role="button"
        className="h-[6rem] w-[6.75rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={profileIcon} />
        </div>
      </Link>
    </>
  );
}
