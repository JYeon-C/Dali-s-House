import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Volunteer_item from "./component/Volunteer_item";

const Slider_Volunteer = () => {
  const settings = {
    // focusOnSelect: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="container">
      <style>{cssstyle}</style>
      <Slider {...settings}>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다1"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다2"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다3"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다4"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다5"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다6"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다7"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다8"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다9"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
        <div className="item">
          <Volunteer_item
            title={"산책 봉사자 모집합니다10"}
            organ={"죽전 유기견 보호소"}
          />
        </div>
      </Slider>
    </div>
  );
};

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 50px 40px 30px 40px;
  width: 50%;
}
.slick-next:before, .slick-prev:before {
  color: #f34949;
}
.item{
    overflow: hidden;
}
`;

export default Slider_Volunteer;
