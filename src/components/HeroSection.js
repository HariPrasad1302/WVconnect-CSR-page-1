import React from "react";
import Slider from "react-slick";
import Slide from "./slide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/donationss.png",
      title: "WV Connect 2024",
      mainTitle: "WEDDING WITH HOPE",
      price: "Renewing Bonds Igniting Hearts",
      buttonText: "Learn More",
    },
    {
      id: 1,
      img: "/donate1.jpg",
      title: "101 Weddings With Hope",
      mainTitle: "Join Us & Contribute",
      price: "A Journey of Love, Unity, and Change",
      buttonText: "Donate Now",
    },
    {
      id: 2,
      img: "/donationss1.png",
      title: "Featured Gifts",
      mainTitle: "Gifts from the Heart",
      price: "Straight from Our Pure Heart",
      buttonText: "Donate Now",
    },
  ];

  return (
    <div className="relative bg-white">
      <div className="mb-10 justify-center items-center relative z-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
              buttonText={item.buttonText}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
