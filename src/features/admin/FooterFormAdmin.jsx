import { Link, useNavigate } from "react-router-dom";

import profileIcon from "../../icons/profile.svg";
import cartIcon from "../../icons/shopping-cart.svg";
import homeIcon from "../../icons/home.svg";
import { useSelector } from "react-redux";

export default function FooterFormAdmin() {
  const staff = useSelector((state) => {
    if (state.auth.user?.role == "admin") {
        return state.auth.user.role
    } else {
      console.log('pls login')
    }
  });

  const navigate = useNavigate();
  const onNavigateToProfile = () => {
    if (staff) {
      navigate("/profileadmin");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="sm:max-w-[27rem] sm:h-[6rem] flex fixed bottom-0">
      <Link
        to="/admin"
        role="button"
        className="h-[6rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={homeIcon} className="fill-white" />
        </div>
      </Link>
      <Link
        to="/cart"
        role="button"
        className="h-[6rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={cartIcon} />
        </div>
      </Link>
      <div
        onClick={onNavigateToProfile}
        // to="/login"
        // role="button"
        className="h-[6rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[4rem] h-[4rem]">
          <img src={profileIcon} />
        </div>
      </div>
    </div>
  );
}
