import Card from "./Card";
import work1 from "../../assests/work1.png";
import work2 from "../../assests/work2.png";
import work3 from "../../assests/work3.png";
import work4 from "../../assests/work4.jpg";

export default function OurWork() {
  return (
    <div className=" flex items-center pt-[10%] md:pt-[5%] pb-[2vh]   bg-[#171717] ">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col  gap-5 md:gap-2 lg:gap-5  px-6 md:px-8 xl:px-4">
          <p className="  text-white text-4xl  md:text-6xl lg:text-7xl xl:text-8xl font-bold md:leading-snug lg:leading-snug xl:leading-tight">
            Our Work
            <br />
            speaks for itself
          </p>
          <h6 className="text-[#E62D2D] text-md font-normal md:font-semibold">
            - Chexkout our portfolio
          </h6>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-x-5 gap-y-16 mt-[4%]">
            <div>
              <Card
                name="Robin Lisa"
                img={work1}
                description="Lowered the CPL by 66% and increasing the whole pipeline."
                size="large"
              />
            </div>
            <div>
              <Card
                name="GAMER ADVANTAGE"
                img={work2}
                description="Branded the new products and increased sale"
                size="small"
              />
            </div>
            <div>
              <Card
                name="TORVA"
                img={work4}
                description="Helped find the ideal customer and lowering the monthly advertising expenditures"
                size="small"
              />
            </div>
            <div>
              <Card
                name="SHANTI BALANCE"
                img={work3}
                description="Provided significant boost in customer traffic and engagement"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
