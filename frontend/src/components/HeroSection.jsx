// HeroSection.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <Slider {...settings} className="overflow-hidden">
        <div className="outline-none">
          <img
            src="https://images.wedmegood.com/wp-content/uploads/2017/11/1557573331_DeekAmit_20190216_Deek_Ready_0068.jpg"
            alt="Slider Image 1"
            className="w-full"
          />
        </div>
        <div className="outline-none">
          <img
            src="https://images.wedmegood.com/wp-content/uploads/2017/11/1557573331_DeekAmit_20190216_Deek_Ready_0068.jpg"
            alt="Slider Image 2"
            className="w-full"
          />
        </div>
        <div className="outline-none">
          <img
            src="https://images.wedmegood.com/wp-content/uploads/2017/11/1557573331_DeekAmit_20190216_Deek_Ready_0068.jpg"
            alt="Slider Image 3"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
