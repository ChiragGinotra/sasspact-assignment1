export default function ProfileCard({
  image,
  quote,

  name,
  designation,
  company,
}) {
  return (
    // items-center justify-center
    <div className=" bg-[#171717] w-[270px] md:w-[550px] lg:w-[800px] xl:w-[1100px] rounded-lg shadow-lg p-6 md:p-10 flex flex-col gap-[3vh] ">
      {/* section-1 */}
      <div className="flex flex-col md:flex-row   justify-between gap-[5%]">
        <div className="flex justify-center md:flex-none">
          <img
            src={image}
            alt={name}
            className=" w-[50%] h-[50%]  md:w-[85%] md:h-[85%] lg:w-full lg:h-full rounded-full "
          />
        </div>

        <div className="flex flex-col  pt-2 md:pt-0 justify-start  text-[#E62D2D] text-xl md:text-3xl lg:text-5xl font-medium  md:font-normal">
          <div className=" text-center md:text-end">{`“${quote}”`}</div>
        </div>
      </div>

      <div className="grid justify-items-center md:justify-items-end gap-1 text-[#E62D2D]  text-md md:text-3xl lg:text-5xl font-medium md:font-normal ">
        <div>{name}</div>

        <div className="h-0 hidden sm:block md:w-36  xl:w-48 md:ml-[5%] lg:ml-[10%] xl:ml-[30%] border-2 justify-self-center border-[#E62D2D]"></div>

        <div className="flex flex-col items-center md:items-end text-md md:text-2xl lg:text-3xl font-medium md:font-normal">
          <div>{designation}</div>
          <div className="text-start">{company}</div>
        </div>
      </div>
    </div>
  );
}
