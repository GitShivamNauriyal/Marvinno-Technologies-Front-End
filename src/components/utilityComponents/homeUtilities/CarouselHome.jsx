import React from "react";
import CarouselPkg from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import homePageImage1 from "../../images/1.jpg";
import homePageImage2 from "../../images/2.jpg";
import homePageImage3 from "../../images/3.jpg";
import homePageImage4 from "../../images/4.jpg";
import homePageImage5 from "../../images/5.jpg";

const Carousel = CarouselPkg.default || CarouselPkg;

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
            >
                <div className="fs-carousel-image">
                    <img src={homePageImage1} alt="Image 1" />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage2} alt="Image 2" />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage3} alt="Image 3" />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage4} alt="Image 4" />
                </div>
                <div className="fs-carousel-image">
                    <img src={homePageImage5} alt="Image 5" />
                </div>
            </Carousel>
        </div>
    );
}
