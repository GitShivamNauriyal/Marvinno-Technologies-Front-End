import React from "react";
import { Link } from "react-router-dom";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardData from "../productsUtilityComponents/cardDetails";
import Module from "../productsUtilityComponents/module";
import "../../css/homeCss/HomeProductDisplay.css";

const HomeProductDisplay = () => {
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
        <div className="home-product-display-master">
            <div className="product-display-grid">
                <div className="product-display-description-container">
                    <div className="product-display-description-top-banner">
                        <p>Discover New Lifestyle</p>
                    </div>
                    <div className="product-display-description-heading">
                        <h1 className="product-display-description-heading-static">
                            Find Technological Solutions With
                        </h1>
                        <h1 className="product-display-description-heading-dynamic">
                            Marvinno Technologies
                        </h1>
                    </div>
                    <div className="product-display-description-para">
                        <p>
                            Experience unparalleled convenience, enhanced
                            productivity, and the latest in smart technology
                            with our comprehensive range of solutions.
                        </p>
                    </div>
                    <div className="product-display-discover-div">
                        <div className="product-display-discover-div-heading">
                            <h4>
                                Discover the <span>SPECTRUM</span>
                            </h4>
                        </div>
                        <Link to="/products">
                            <div className="product-display-discover-div-button">
                                <p>Checkout Products</p>
                                <PiArrowCircleUpRightThin className="product-display-discover-div-button-link-arrow" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="product-display-image-container">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        // ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        removeArrowOnDeviceType={[
                            "desktop",
                            "tablet",
                            "mobile",
                        ]}
                        autoPlay={true}
                        autoPlaySpeed={3 * 1000}
                        containerClass="home-carousel-container"
                        dotListClass="custom-dot-list-style"
                        className="product-display-image-container-carousel"
                    >
                        {cardData.map((item) => (
                            <Module
                                // id="1"
                                // imgsrc="../card_image/S black.png"
                                // price="₹3999"
                                // name="module"
                                // totalSales="99"
                                // title="add"
                                // rating="5"
                                // url="/products/s1-module"
                                key={item.id}
                                id="0"
                                imgsrc={item.img}
                                price={item.price}
                                name={item.name}
                                totalSales={item.totalSales}
                                title="Buy Now"
                                rating={item.rating}
                                url={item.url}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1720538020">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default HomeProductDisplay;
