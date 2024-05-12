// import WhatWeDoBG from "../assests/WhatWeDoBG.jpg";
export default function WhatWeDo() {
  return (
    // items-center justify-center
    <div
      className=" flex items-center  pt-[10%]  pb-[2vh]  bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#530505] from-10%  to-[#111111] to-50%"
      // style={{ backgroundImage: `url(${WhatWeDoBG})` }}
    >
      <div className="flex flex-col sm:flex-row mx-[3%] md:mx-[5%] xl:mx-[10%] 2xl:mx-[15%] gap-[5%] md:gap-[15%] lg:gap-[20%] ">
        {/* Left Box */}
        <div className="flex flex-col justify-center gap-2 lg:gap-7  xl:gap-9 p-[3%] md:p-0 bg-red-300 md:bg-transparent">
          <div className="text-white text-4xl text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-tight md:leading-normal ">
            WHAT
            <br /> WE DO.
          </div>
          <div className="text-white flex items-start text-lg  lg:text-xl xl:text-3xl font-normal leading-tight md:leading-normal xl:leading-relaxed">
            Let us show you what we can do for you and your business.
          </div>
        </div>
        {/* Right Box */}

        <div className="w-[100%] md:w-[70vw] 2xl:w-[60vw] flex flex-col py-[5%] px-[5%] md:p-0 justify-center font-extrabold md:font-semibold lg:font-normal  text-4xl md:text-3xl lg:text-5xl 2xl:text-6xl gap-5 md:gap-16  text-[#E62D2D]  ">
          <div>Social Media Marketing</div>
          <div>SEO</div>
          <div>E-commerce Marketing</div>
          <div>Lead Generation</div>
          <div>Content Marketing</div>
        </div>
      </div>
    </div>
  );
}