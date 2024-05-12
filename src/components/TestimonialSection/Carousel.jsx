import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "./ProfileCard";

export default function Carousel({ cards }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000, // Change card every 2 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
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
