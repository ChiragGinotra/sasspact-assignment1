export default function LandingPage() {
  return (
    // className="py-[40%] px-[20%]"
    // pt-[30vh] pb-[10vh]

    // bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#530505] from-10%  to-[#121212] to-50%
    <div className="flex items-center  justify-center h-[100vh] mt-[3vh] bg-[#121212] ">
      <div className="absolute h-[321px] w-[120px] top-[25%] right-[25%] z-0 opacity-80 bg-gradient-to-b from-[#f00] from-0% to-[#FF6636] to-100% transform rotate-[-37.748deg] blur-[156px]"></div>
      <div className="absolute h-[321px] w-[120px] top-[20%] left-[20%] z-0 bg-gradient-to-b from-[#C985FF] from-0% to-[#5653FF] to-100% transform rotate-[-37.748deg] blur-[156px]"></div>
      <div></div>
      <div className="px-auto max-w-6xl flex items-center  justify-center ">
        <div className=" flex flex-col gap-5  md:gap-8 xl:gap-10 px-10 md:px-14 ">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-[99px]   font-bold flex justify-center">
            We are Extensive.
          </h1>
          <div className="flex justify-center font-normal  ">
            <p className="px-0 sm:px-10 text-md md:text-xl  lg:text-2xl xl:text-[24px] text-center text-white ">
              Helping you stand out in a{" "}
              <span className="text-[#E62D2D]"> crowded </span> market Helping
              you stand out in a crowded market
            </p>
          </div>

          <div className="flex justify-center mt-[5%] xl:mt-[3%] gap-[5%] font-normal md:font-semibold">
            <button className=" p-3 md:p-4 xl:p-4 2xl:p-4 md:[18px] lg:text-xl   rounded-lg text-white bg-[#E62D2D] tracking-wider">
              GET STARTED
            </button>

            <div className="flex items-center text-[17px]  md:text-[18px] lg:text-xl   uppercase text-[#E62D2D] ">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
