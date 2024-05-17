// import WhatWeDoBG from "../assests/WhatWeDoBG.jpg";
export default function WhatWeDo() {
  return (
    // items-center justify-center
    // bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#530505] from-10%  to-[#121212] to-50%
    <div
      className=" flex items-center  pt-[10%]  pb-[2vh] md:pb-[20%] xl:pb-[10%] bg-[#121212]"
      // style={{ backgroundImage: `url(${WhatWeDoBG})` }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row gap-[5%] md:gap-[10%] lg:gap-[13%] xl:gap-[11%] px-6 md:px-10 xl:px-6">
          {/* Left Box */}

          <div className="relative flex flex-col justify-center gap-2 md:gap-5 lg:gap-7  xl:gap-9 p-[3%] md:p-0 bg-gradient-to-r from-pink-300 from-10%  to-[#E7D7F6] to-50% md:bg-none">
            <div className="absolute h-[480px] w-[150px] top-[20%] left-[0%] z-0 bg-gradient-to-b from-[#F00] from-0% to-[#FF6636] to-100% transform rotate-[-37.748deg] blur-[156px]"></div>
            <div className="z-10 text-white text-4xl text-3xl md:text-4xl lg:text-6xl xl:text-[85px]  font-bold leading-tight md:leading-snug lg:leading-snug xl:leading-tight">
              WHAT
              <br /> WE DO.
            </div>
            <div className="z-10 pr-16 2xl:pr-10 text-white flex items-start text-lg  lg:text-3xl xl:text-[40px] font-normal leading-tight md:leading-normal xl:leading-tight">
              Let us show you what we can do for you and your business.
            </div>
          </div>
          {/* Right Box */}

          <div className="w-[100%] md:w-[70vw] xl:w-[80vw] 2xl:w-[60vw] flex flex-col py-[5%] px-[3%]  md:px-0 md:p-0 justify-center font-extrabold md:font-semibold lg:font-normal  text-4xl md:text-[35px] lg:text-5xl xl:text-[59px] gap-5 md:gap-16  xl:gap-20 text-[#E62D2D]  ">
            <div>Social Media Marketing</div>
            <div>SEO</div>
            <div>E-commerce Marketing</div>
            <div>Lead Generation</div>
            <div>Content Marketing</div>
          </div>
        </div>
      </div>
    </div>
  );
}
