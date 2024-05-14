import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "./ProfileCard";

export default function Carousel({ cards }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
        <div key={index}>
          <ProfileCard {...card} />
        </div>
      ))}
    </Slider>
  );
}
