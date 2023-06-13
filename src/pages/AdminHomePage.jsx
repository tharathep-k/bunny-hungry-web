import logoHeader from "../assets/bunny-hungry-low-circle-logo.png";
import FooterFormAdmin from "../features/admin/FooterFormAdmin";

export default function AdminHomePage() {
  return (
    <>
    <div className="sm:w-[100vh] flex flex-col fixed">
      <header className="sm:w-[27rem] sm:h-[18rem] overflow-hidden border border-black">
        <img src={logoHeader} className="sm:w-[27rem] sm:h-[18rem]" />
      </header>
    </div>
    <div></div>
    <FooterFormAdmin/>
    </>
  );
}
