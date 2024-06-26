import { IoClose } from "react-icons/io5";
// import { ImCross } from "react-icons/im";
import { Transition } from "@headlessui/react";

const DrawerContent = ({ menu, closeDrawer, isOpen }) => {
  return (
    <Transition
      show={isOpen}
      enter="transition-transform duration-1000"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-transform duration-1000"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="bg-[#111111] w-full md:w-[63%] lg:w-1/2 xl:w-[40%] 2xl:w-[30vw]  shadow-md   p-4 transform transition-transform  transition duration-1000 ease-in-out translate-x-0">
        <div className="flex justify-end">
          <button
            className=" p-2 rounded-full bg-gray-800"
            onClick={closeDrawer}
          >
            <IoClose className="w-7 h-7 text-[#E62D2D]" />
          </button>
        </div>
        <div className="px-[10%] h-screen text-red flex mt-20 md:mt-0 md:pb-28 items-start md:items-center transition ease-in-out duration-1000 transition-opacity ">
          <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 ">
            {menu.map((item) => (
              <div key={item} onClick={closeDrawer}>
                <p className="text-4xl font-medium  md:text-5xl lg:text-6xl xl:text-[62px] text-[#E62D2D] font-playfair">
                  {item}
                </p>
              </div>
            ))}

            <button
              className=" w-72 md:w-96 xl:w-80 h-12 xl:h-16 md:p-2 md:text-xl xl:text-lg rounded-lg font-medium text-white bg-[#E62D2D] tracking-normal"
              onClick={closeDrawer}
            >
              BOOK A FREE MARKETING AUDIT
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default DrawerContent;
// 2xl:py-[20%] py-[15%]
