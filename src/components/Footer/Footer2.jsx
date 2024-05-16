import logo from "../../assests/logo512.png";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer2() {
  const footerText = ["About Us", "Book Audit", "Contact", "Services", "Blogs"];
  return (
    <div className="  pb-[3vh] md:pb-[6vh] lg:pb-[4vh] xl:pb-[8vh] bg-[#171717]">
      <div className="mx-auto max-w-6xl flex flex-col justify-start gap-[4vh] md:gap-[2vh] xl:gap-[3vh]">
        <div className="  flex  flex-col md:flex-row justify-between h-[30vh]  md:h-[15vh] lg:h-[100%] gap-10 md:gap-16 lg:gap-[24] xl:gap-32  pt-[5%] md:pt-[5%] px-6 md:px-8 lg:px-16 xl:px-8">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16  lg:w-12 lg:h-12"
            />
          </div>

          <div className="grid grid-cols-2  lg:grid-cols-5 md:items-center lg:items-start 2xl:items-center gap-y-[25%] md:gap-y-[1%] lg:gap-[3%] xl:gap-[15%]  text-white text-xl md:text-2xl lg:text-xl ">
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
    </div>
  );
}
