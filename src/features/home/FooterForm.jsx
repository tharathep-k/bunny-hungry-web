import { Link, useNavigate } from "react-router-dom";

import profileIcon from "../../icons/profile.svg";
import cartIcon from "../../icons/shopping-cart.svg";
import homeIcon from "../../icons/home.svg";
import menuIcon from "../../icons/menu.svg";
import { useSelector } from "react-redux";

export default function FooterFrom() {
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const onNavigateToProfile = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="sm:max-w-[27rem] sm:h-[6rem] flex fixed bottom-0">
      <Link
        to="/home"
        role="button"
        className="h-[6rem] w-[6.75rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={homeIcon} className="fill-white" />
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
      <div
        onClick={onNavigateToProfile}
        // to="/login"
        // role="button"
        className="h-[6rem] w-[6.75rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={profileIcon} />
        </div>
      </div>
    </div>
  );
}
