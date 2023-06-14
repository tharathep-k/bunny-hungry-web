import binIcon from "../../icons/bin.svg";

export default function OrderAdminForm() {
  return (
    <div className="sm:h-[6rem] sm:w-[22rem] border border-gray-500 flex justify-between items-center">
      <div className="mx-4">ข้าวกะเพราหมูกรอบ</div>
      <div className="flex gap-2">
        <div role="button" className="text-[1.5rem] text-black">
          -
        </div>
        <input type="number" className="w-6" /*value="0"*/ />
        <div role="button" className="text-[1.5rem] text-black">
          +
        </div>
      </div>
      <div>
        <img src={binIcon} className="w-[2rem] h-[2rem] mr-4" />
      </div>
    </div>
  );
}
