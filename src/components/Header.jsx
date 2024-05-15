import { useState } from "react";
// import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import DrawerContent from "./DrawerContent";

import logo from "../assests/logo512.png";
// import Drawer from "./Drawer";

export default function Header() {
  const menu = ["Services", "About Us", "Blogs", "Contact Us"];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className=" fixed w-[100vw]  top-0 z-10    bg-[#0D0D0D] ">
      <div className="flex justify-between mx-[2%] h-[8vh] md:h-[5vh] xl:mx-[10%] 2xl:mx-[15%] py-[10%] md:py-[6%] lg:py-[4%] xl:py-[3%] 2xl:py-[3%]">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        <div className="flex items-center">
          <button
            className=" p-2 rounded-full bg-gray-900"
            onClick={handleMenuToggle}
          >
            <IoMenu className="w-5 h-5 text-red-500" />
          </button>

          {/* drawer logic starts */}

          {isDrawerOpen && (
            <div className="fixed inset-0 flex justify-end z-50 transition ease-in-out  duration-1000">
              <div
                className="fixed inset-0 bg-black opacity-50 transition-opacity duration-1000 "
                onClick={closeDrawer}
              ></div>

              <DrawerContent
                isOpen={isDrawerOpen}
                menu={menu}
                closeDrawer={closeDrawer}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
