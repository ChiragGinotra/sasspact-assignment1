import saaspect from "../assests/companiesLogo/saaspect.png";
import wallmart from "../assests/companiesLogo/wallmart.png";
import blueStar from "../assests/companiesLogo/blueStarWater.png";
import doctorAhuja from "../assests/companiesLogo/doctorAujla.png";
import neoCode from "../assests/companiesLogo/neoCode.png";
import gamerAdv from "../assests/companiesLogo/gamerAdvantage.webp";
import moderneid from "../assests/companiesLogo/moderneid.webp";
import robinLisa from "../assests/companiesLogo/robinLisa.webp";
import saveTheRain from "../assests/companiesLogo/saveTheRainforest.png";
import torva from "../assests/companiesLogo/torva.png";
import axia from "../assests/companiesLogo/axia.webp";

export default function Portfolio() {
  return (
    <div className="flex items-center pt-[10%] md:pt-[15%] pb-[2vh]    bg-[#111111]">
      <div className="mx-[2%] mx-[6%] sm:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] flex flex-col gap-10 md:gap-32">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-[#E62D2D] w-[100%] text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ">
            Together <br /> with our partners
          </h1>
          <h6 className="text-[#ec4c6c] text-sm md:text-2xl  xl:text-4xl w-[100%] font-normal">
            We are creating innovative solutions that drive real-world results.
          </h6>
        </div>

        {/* companies logo*/}

        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-20">
          <img src={saaspect} alt="saaspact-logo" />
          <img src={wallmart} alt="Wallmart-logo" />
          <img src={blueStar} alt="BlueStarWater-logo" />
          <img src={doctorAhuja} alt="DoctorAhuja-logo" />
          <img src={neoCode} alt="NeoCode-logo" />
          <img src={gamerAdv} alt="GamerAdvantage-logo" />
          <img src={moderneid} alt="Moderneid-logo" />
          <img src={robinLisa} alt="RobinLisa-logo" />
          <img src={saveTheRain} alt="saveTheRainForest-logo" />
          <img src={torva} alt="toorva-logo" />
          <img src={axia} alt="axia-logo" />
        </div>
      </div>
    </div>
  );
}
