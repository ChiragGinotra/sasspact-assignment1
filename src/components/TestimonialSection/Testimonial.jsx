import Carousel from "./Carousel";
import Person from "../../assests/person.svg";

export default function Testimonial() {
  const cards = [
    {
      image: Person,
      quote: "Working with Extensive is great",
      name: "Arnauld",
      designation: "Head of marketing",
      company: "the X Company",
    },
    {
      image: Person,
      quote: "Working with Extensive is great",
      name: "Arnauld",
      designation: "Head of marketing",
      company: "the X Company",
    },

    {
      image: Person,
      quote: "Working with Extensive is great",
      name: "Arnauld",
      designation: "Head of marketing",
      company: "the X Company",
    },
  ];
  return (
    <div className=" flex flex-col   pb-[10vh]  bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#530505] from-10%  to-[#111111] to-40% ">
      <div className=" flex flex-col gap-10 md:gap-32  mt-[5%] mb-[2vh] md:mb-[3vh] lg:mb-[5vh] xl:mb-[10vh] mx-[6%]  md:mx-[5%]  2xl:mx-[15%]">
        <h1 className="text-[#E62D2D] w-[100%] text-4xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold">
          Testimonials
        </h1>
      </div>

      <Carousel cards={cards} />
    </div>
  );
}
