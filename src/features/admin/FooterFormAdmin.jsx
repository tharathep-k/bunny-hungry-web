import { useNavigate } from "react-router-dom";

import profileIcon from "../../icons/profile.svg";
import billIcon from "../../icons/bill.svg";
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

  const onNavigateToEdit = () => {
    navigate("/admin")
  }

  const onNavigateToOrderAdmin = () => {
    navigate("/orderadmin")
  }

  return (
    <div className="sm:max-w-[27rem] sm:h-[4.5rem] flex fixed bottom-0">
      <div
        onClick={onNavigateToEdit}
        className="h-[4.5rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[3rem] h-[3rem]">
          <img src={homeIcon} className="fill-white" />
        </div>
      </div>
      <div
        onClick={onNavigateToOrderAdmin}
        className="h-[4.5rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[3rem] h-[3rem]">
          <img src={billIcon} />
        </div>
      </div>
      <div
        onClick={onNavigateToProfile}
        className="h-[4.5rem] w-[9rem] bg-red-900 flex items-center justify-center border border-black"
      >
        <div className="w-[3rem] h-[3rem]">
          <img src={profileIcon} />
        </div>
      </div>
    </div>
  );
}
