import HomeCarousel from "../features/home/HomeCarousel";
import FooterFrom from "../features/home/FooterForm";
import SearchFrom from "../features/home/SearchFrom";
import MenuFrom from "../features/home/MenuFrom";

export default function HomePage() {
  return (
    <div className="sm:w-[26.5rem] sm:h-[57rem] flex flex-col fixed">
      <header className="sm:max-w-[27rem] sm:max-h-[18rem] overflow-hidden border border-black">
        <HomeCarousel />
      </header>
      <div className="bg-gray-100 sm:max-w-[27rem] sm:h-[33rem]">
        <div className="sm:max-w-[27rem] sm:h-[5rem] flex justify-center items-center gap-2">
          <SearchFrom />
        </div>
        <div>
          <div className="sm:h-[2rem] sm:max-w-[27rem] pl-4 text-black font-semibold text-[1.5rem]">
            Menu
          </div>
          <MenuFrom />
        </div>
      </div>
      <footer>
        <div className="sm:max-w-[27rem] sm:h-[6rem] flex">
          <FooterFrom />
        </div>
      </footer>
    </div>
  );
}
