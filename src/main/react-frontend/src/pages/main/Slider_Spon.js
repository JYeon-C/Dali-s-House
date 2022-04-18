import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spon_item from "./component/Spon_item";

const Slider_Spon = () => {
  const settings = {
    // focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="container">
      <style>{cssstyle}</style>
      <Slider {...settings}>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드1"}
            activity={6}
            review={132}
            type={"feed"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드2"}
            activity={6}
            review={132}
            type={"blanket"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드3"}
            activity={6}
            review={132}
            type={"money"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드4"}
            activity={6}
            review={132}
            type={"feed"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드5"}
            activity={6}
            review={132}
            type={"blanket"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드6"}
            activity={6}
            review={132}
            type={"money"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드7"}
            activity={6}
            review={132}
            type={"feed"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드9"}
            activity={6}
            review={132}
            type={"blanket"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드9"}
            activity={6}
            review={132}
            type={"money"}
          />
        </div>
        <div className="item">
          <Spon_item
            organ={"광주동물보호협회 위드10"}
            activity={6}
            review={132}
            type={"feed"}
          />
        </div>
      </Slider>
    </div>
  );
};

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 5px 40px 30px 40px;
  width: 80%;
}
.slick-next:before, .slick-prev:before {
  color: #EEEFF1;
}
.item{
    overflow: hidden;
}
`;

export default Slider_Spon;