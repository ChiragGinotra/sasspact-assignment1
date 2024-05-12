export default function LandingPage() {
  return (
    // className="py-[40%] px-[20%]"
    // pt-[30vh] pb-[10vh]

    <div className="flex items-center  justify-center h-[100vh]   bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#530505] from-10%  to-[#111111] to-50%">
      <div className=" flex flex-col gap-5  md:gap-8 xl:gap-10 mx-[8%] lg:mx-[20%]  2xl:mx-[10%]">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl  font-bold flex justify-center">
          We are Extensive.
        </h1>
        <div className="flex justify-center font-normal">
          <p className=" text-md md:text-xl  text-white  text-center">
            Helping you stand out in a{" "}
            <span className="text-[#E62D2D]">crowded market</span> Helping you
            stand out in a crowded market
          </p>
        </div>

        <div className="flex justify-center mt-[5%] xl:mt-[3%] gap-[5%] font-normal md:font-semibold">
          <button className=" p-3 md:p-4 xl:p-6 2xl:p-4 md:text-xl   rounded-lg text-white bg-red-500 ">
            GET STARTED
          </button>

          <div className="flex items-center text-xl md:text-2xl   text-[#E62D2D]  ">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}
