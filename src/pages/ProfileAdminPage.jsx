import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import logoHeader from "../assets/bunny-hungry-low-circle-logo.png";
import { logoutAsync } from "../features/auth/slice/auth-slice";
import profileIcon from "../icons/profile.svg";

export default function ProfileAdminPage() {
    const staff = useSelector((state) => (state.auth.user))
    // console.log(staff)

    const firstNameStaff = staff.firstname
    const lastNameStaff = staff.lastname
    const mobileStaff = staff.mobile

    const dispatch = useDispatch();

    const navigate = useNavigate()
    const onNavigateToHome = () => {
      dispatch(logoutAsync())
      navigate("/home")
    }

      return (
        <div className="sm:w-[100vh] flex flex-col fixed">
          <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
            <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
          </header>
          <div className="bg-gray-100 sm:w-[27rem] sm:h-[51vh] flex flex-col items-center gap-4 pt-10">
            <div className="sm:h-[4.5rem] sm:w-[4.5rem] text-black font-semibold text-[1.5rem]">
              <img src={profileIcon} />
            </div>
            <div className="font-semibold text-[1rem] hover:text-gray-400 hover:underline">
              Edit Picture
            </div>
            <div className="sm:w-[22rem] sm:h-[10rem] mr-2 px-2 py-4 pt-6 border grid grid-cols-2 gap-2 rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100 to-red-200 shadow-lg">
              <div className="border border-black w-[10rem] h-[3rem] pl-2 pt-1 text-[1.5rem] rounded-lg">
                {firstNameStaff}
              </div>
              <div className="border border-black w-[10rem] h-[3rem] pl-2 pt-1 text-[1.5rem] rounded-lg">
                {lastNameStaff}
              </div>
              <div className="border border-black h-[3rem] col-span-full pl-2 pt-1 text-[1.5rem] rounded-lg">
                {mobileStaff}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 sm:w-[27rem] sm:h-[10vh] pb-6 flex justify-center items-center">
            <button
              className="sm:h-[3rem] sm:w-[8rem] bg-red-400 rounded-lg text-white text-[1.5rem] hover:bg-white hover:text-red-600"
              onClick={onNavigateToHome}
            >
              Logout
            </button>
          </div>
        </div>
      );

}
