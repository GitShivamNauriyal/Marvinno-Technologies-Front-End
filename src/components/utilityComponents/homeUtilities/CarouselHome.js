import React from "react";
import { Carousel } from "react-bootstrap";
import homePageImage1 from "../../images/homePageImage-1.png";
import homePageImage2 from "../../images/homePageImage-2.png";
import homePageImage3 from "../../images/homePageImage-3.png";
import homePageImage4 from "../../images/homePageImage-4.png";
import homePageImage5 from "../../images/homePageImage-5.png";

export default function CarouselHome() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={homePageImage1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={homePageImage2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={homePageImage3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={homePageImage4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={homePageImage5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
