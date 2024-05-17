export default function Card({ img, name, description, size }) {
  const cardClasses = {
    small: "h-64 md:h-[18rem] lg:h-[22rem] xl:h-[26rem] ", // Adjust height as needed

    large: "h-64 md:h-96 lg:h-full",
  };
  return (
    <div className="border-none shadow-none flex flex-col gap-[2vh]  md:gap-3 bg-opacity-50 ">
      {/* inset-0 flex flex-col  px-4 py-6 */}
      <div className={`w-full ${cardClasses[size]}`}>
        <img
          src={img}
          alt="work-images"
          className={`w-full ${cardClasses[size]} object-cover`}
        />
      </div>

      <div className="flex flex-col gap-1 md:gap-3 ">
        <p className="text-md text-white uppercase">Digital marketing</p>
        <h2 className="text-4xl lg:text-5xl  text-[#E62D2D]  font-normal  uppercase">
          {name}
        </h2>
        <p className="font-light  text-sm  lg:text-[16px] text-white  tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
}
