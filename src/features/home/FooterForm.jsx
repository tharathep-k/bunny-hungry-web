import { Link, useNavigate } from "react-router-dom";

import profileIcon from "../../icons/profile.svg";
import cartIcon from "../../icons/shopping-cart.svg";
import homeIcon from "../../icons/home.svg";
import { useSelector } from "react-redux";

export default function FooterFrom() {
  const user = useSelector((state) => state.auth.user);
  // const user = false
  // const staff = useSelector((state) => state.auth.staff);

  const navigate = useNavigate();
  const onNavigateToProfile = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="sm:max-w-[27rem] sm:h-[4.5rem] flex fixed bottom-0">
      <Link
        to="/home"
        role="button"
        className="h-[4.5rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[3rem] h-[3rem]">
          <img src={homeIcon} className="fill-white" />
        </div>
      </Link>
      <Link
        to="/cart"
        role="button"
        className="h-[4.5rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[3rem] h-[3rem]">
          <img src={cartIcon} />
        </div>
      </Link>
      <div
        onClick={onNavigateToProfile}
        // to="/login"
        // role="button"
        className="h-[4.5rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[3rem] h-[3rem]">
          <img src={profileIcon} />
        </div>
      </div>
    </div>
  );
}
