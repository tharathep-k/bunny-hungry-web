import { createPortal } from "react-dom";

export default function Modal({ title, children, width, open, onClose }) {
  return createPortal(
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
          <div className="fixed inset-0 z-30 ">
            <div className="flex justify-center items-center min-h-full">
              <div
                className="h-[30rem] w-full flex flex-col rounded-lg sm:w-[22rem] sm:h-[26rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-300 to-pink-100 shadow-[0_0_15px_rgb(0_0_0/0.4)] px-2 py-4"
                style={{ maxWidth: `${width}rem` }}
              >
                <div className="flex justify-between px-2">
                  <div className="invisible">&#10005;</div>
                  <div className="text-xl font-semibold">{title}</div>
                  <div
                    className="text-gray-500 hover:text-black cursor-pointer"
                    onClick={onClose}
                    
                  >
                    &#10005;
                  </div>
                </div>
                <div className="overflow-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal")
  );
}
