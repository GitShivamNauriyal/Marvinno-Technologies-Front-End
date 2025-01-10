import React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homePageImage1 from "../../images/1.jpg";
import homePageImage2 from "../../images/2.jpg";
import homePageImage3 from "../../images/3.jpg";
import homePageImage4 from "../../images/4.jpg";
import homePageImage5 from "../../images/5.jpg";

export default function CarouselHome() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <div className="carousel-container-master">
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5 * 1000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
            >
                <div className="fs-carousel-image">
                    <img src={homePageImage1} alt="Image_1 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage2} alt="Image_2 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage3} alt="Image_3 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage4} alt="Image_4 Loading..." />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage5} alt="Image_5 Loading..." />
                </div>
            </Carousel>
            {/* <Carousel>
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
            </Carousel> */}
        </div>
    );
}
