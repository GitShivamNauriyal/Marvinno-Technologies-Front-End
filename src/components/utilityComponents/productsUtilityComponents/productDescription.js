import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Carousel } from "react-bootstrap";
import "../../css/productsCss/description.css";
import Navbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";
import image from "../../images/1.jpg";

export default function ProductDescription(props) {
    const [value, setValue] = useState(1);
    const increaseVal = () => {
        setValue(value + 1);
    };
    const decreaseVal = () => {
        if (value === 1) {
        } else {
            setValue(value - 1);
        }
    };
    /**/
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
    /**/
    return (
        <div>
            <Navbar />
            <div className="bgColorProductDescription">
                <div className="rowMarginLeftWholeContent">
                    <div className="name-fullform">
                        <h5 className="moduleNameCss">{props.name}</h5>
                        <h5 className="moduleFullForm">{props.fullform}</h5>
                    </div>
                    <hr className="module-hr" />
                    <div className="leftSectionProduct">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            // ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3 * 1000}
                            containerClass="pd-carousel-container"
                            dotListClass="custom-dot-list-style"
                        >
                            <div className="product-carousel-image">
                                <img
                                    src={props.img1}
                                    alt="Image_1 Loading..."
                                />
                            </div>
                            <div className="product-carousel-image">
                                <img
                                    src={props.img2}
                                    alt="Image_2 Loading..."
                                />
                            </div>
                            <div className="product-carousel-image">
                                <img
                                    src={props.img3}
                                    alt="Image_3 Loading..."
                                />
                            </div>
                            <div className="product-carousel-image">
                                <img
                                    src={props.img4}
                                    alt="Image_4 Loading..."
                                />
                            </div>
                        </Carousel>
                        {/*----------------------------------old carousel-----------------------------------*/}
                        {/* <Carousel>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={props.img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100 "
                                    src={props.img2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            {props.img3 && (
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block  w-100"
                                        src={props.img3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            )}
                            {props.img4 && (
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100 "
                                        src={props.img4}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                            )}
                            {props.img5 && (
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100 "
                                        src={props.img5}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel> */}
                    </div>

                    <div className="middleSectionProduct">
                        <h5 className="card-title headingColorWhite">Size</h5>
                        <p className="card-text descriptionCss">{props.size}</p>
                        <h5 className="card-title headingColorWhite">
                            Touch Buttons
                        </h5>
                        <p className="card-text descriptionCss">
                            {props.touchbuttons}
                        </p>
                        <h5 className="card-title headingColorWhite">Color</h5>
                        <p className="card-text descriptionCss productColorPara">
                            {props.color}
                        </p>
                        <p className="card-text descriptionCss productColorPara">
                            {props.frame}
                        </p>
                        <hr className="price-hr" />
                        <h3 className="module-price">Price: {props.price}</h3>
                        <hr className="price-hr" />
                        <div className="Add-more">
                            <div
                                className="decrement-container"
                                onClick={decreaseVal}
                            >
                                <span className="decrement">
                                    <h4>-</h4>
                                </span>
                            </div>
                            <div>
                                <span className="Add-more-Value">{value}</span>
                            </div>
                            <div
                                className="increment-container"
                                onClick={increaseVal}
                            >
                                <span className="increment">
                                    <h4>+</h4>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rightSectionProduct">
                        <h5 className="card-title headingColorWhite">
                            Load Capacity
                        </h5>
                        <p className="card-text descriptionCss">
                            {props.loadcapacity}
                        </p>
                        <h5 className="card-title headingColorWhite">
                            Max Load at Socket
                        </h5>
                        <p className="card-text descriptionCss">
                            {props.maxloadsocket}
                        </p>
                        <h5 className="card-title headingColorWhite">
                            Max Load at Switch
                        </h5>
                        <p className="card-text descriptionCss">
                            {props.maxloadswitch}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="module-hr" />

            {/*
            <div className="centerHighlightsSectionModule">
                <h4 className="headingHighlightsModuleDescription">
                    HIGHLIGHTS
                </h4>
                <hr />
                <div className="buttonGroupCss">
                    <h5 className="buttonCssHighlights buttonCssHighlights1">
                        &#x2713; IoT Technology
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights2">
                        &#x2713; Touch Buttons
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights3">
                        &#10003; Application Control
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights4">
                        &#x2713; Alexa Voice Controlled
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights5">
                        &#x2713; Sleek & Stylish
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights6">
                        &#x2713; Retrofit & Adoptable
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights7">
                        &#x2713; Make Scenes
                    </h5>
                    <h5 className="buttonCssHighlights buttonCssHighlights8">
                        &#x2713; Make In India
                    </h5>
                </div>
            </div>
                    */}
            <Footer />
        </div>
    );
}
