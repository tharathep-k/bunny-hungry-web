import { Link } from "react-router-dom";

import Logo from "../../../assets/bunny-hungry-logo.jpeg";

export default function StartForm() {
    return (
        <div
      className="bg-cover bg-center sm:w-[27rem] sm:h-[57rem] fixed"
      style={{ backgroundImage: `url(${Logo})` }}
    >
      <div className="border border-white sm:w-full sm:h-full flex flex-col justify-evenly items-center">
        <div className="invisible">x</div>
        <Link to="home" role="button" className="sm:h-[2rem] sm:w-[8rem] pt-1 bg-white text-center rounded-lg font-semibold">
          Let's Order
        </Link>
      </div>
    </div>
    )
}