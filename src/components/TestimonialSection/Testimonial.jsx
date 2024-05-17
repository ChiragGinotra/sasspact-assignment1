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
    // bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#530505] from-10%  to-[#121212] to-40%
    <div className=" flex  flex-col pt-16  pb-[7vh] md:pb-[5vh] xl:pb-[10vh]  bg-[#121212]">
      <div className="relative">
        <div className="  flex flex-col  mx-auto max-w-6xl gap-10 md:gap-32 mt-[5%] mb-[2vh] md:mb-[3vh] lg:mb-[5vh] xl:mb-[10vh] px-6 md:px-8 xl:px-4">
          <h1 className="text-[#E62D2D] w-[100%] text-4xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold">
            Testimonials
          </h1>
        </div>
        <div className="absolute h-[480px] w-[150px] top-[20%] left-[0%] z-0 bg-gradient-to-b from-[#F00] from-0% to-[#FF6636] to-100% transform rotate-[-37.748deg] blur-[156px]"></div>
      </div>

      <Carousel cards={cards} />
    </div>
  );
}
