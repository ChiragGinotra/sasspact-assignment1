import logo from "../../assests/logo512.png";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer2() {
  const footerText = ["About Us", "Book Audit", "Contact", "Services", "Blogs"];
  return (
    <div className="flex flex-col  gap-[6vh] md:gap-[2vh]  pb-[6vh] lg:pb-[4vh]  bg-[#171717]">
      <div className=" flex  flex-col md:flex-row justify-between h-[30vh]  md:h-[25vh] lg:h-[100%] gap-10 md:gap-18 xl:gap-32  mt-[5%] mx-[6%]  md:mx-[5%]  2xl:mx-[15%]">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 md:items-center gap-[25%] md:gap-[1%] lg:[3%] xl:gap-[7%]  text-white text-xl   ">
          {footerText.map((text, index) => (
            <div
              key={index}
              className="w-36 flex justify-start md:justify-center"
              onClick={(e) => e.preventDefault()}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="flex gap-[5%]  md:gap-[10%]  text-white justify-center items-center">
          <div className="w-8 h-8 md:w-16 md:h-8">
            <FaInstagram className="w-full h-full" />
          </div>
          <div className="w-8 h-8 md:w-16 md:h-8">
            <FaSquareFacebook className="w-full h-full" />
          </div>
          <div className="w-8 h-8 md:w-16 md:h-8">
            <FaLinkedin className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="text-center  text-white text-xs md:text-sm font-normal">
        <p>Copyright © 2024 Extensive Advertising | Powered by Saaspect</p>
      </div>
    </div>
  );
}
