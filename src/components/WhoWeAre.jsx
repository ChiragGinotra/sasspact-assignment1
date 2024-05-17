export default function WhoWeAre() {
  return (
    <div className="flex items-center pt-[5vh] pb-[10vh]   bg-[#121212]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col  gap-5 md:gap-8 xl:gap-10 px-10 ">
          <p className="text-[#E62D2D]   text-4xl md:text-6xl  lg:text-7xl xl:text-8xl font-bold leading-snug md:leading-snug lg:leading-snug xl:leading-tight">
            What We have to Say About Our Company?
          </p>

          <p className=" text-sm md:text-md lg:text-xl   xl:text-2xl text-white font-normal leading-snug">
            Welcome to your one-stop shop for all of your digital marketing
            requirements! We are a full-service digital marketing agency that
            specializes in developing tailored solutions to assist businesses in
            achieving their objectives and growing their online presence. Our
            expert staff is committed to providing great outcomes and optimizing
            ROI for our clients.
          </p>

          <div className="flex mt-[1%] md:mt-[5%] md:mt-[2%] xl:mt-0 gap-[5%]">
            <button className=" w-72 md:w-96 h-12 xl:h-16 md:p-2 md:text-lg md:font-semibold rounded-lg text-white bg-[#E62D2D] ">
              BOOK A FREE MARKETING AUDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
