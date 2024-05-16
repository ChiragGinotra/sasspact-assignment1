import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "./ProfileCard";

export default function Carousel({ cards }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    centerMode: true, // Center the active slide
    variableWidth: true, // Allow variable slide widths
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        },
      },
    ],
  };

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   display: flex,
  //   speed: 500, // Adjust speed for smoother transition
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000, // Change card every 8 seconds
  //   cssEase: "linear",
  //   pauseOnHover: false,
  //   swipeToSlide: true, // Enable swipe to slide on touch devices
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="px-6 md:px-2 2xl:px-32 ">
          <ProfileCard {...card} />
        </div>
      ))}
    </Slider>
  );
}

// mx-[13vw] md:mx-[10vw]  2xl:mx-[17vw]
