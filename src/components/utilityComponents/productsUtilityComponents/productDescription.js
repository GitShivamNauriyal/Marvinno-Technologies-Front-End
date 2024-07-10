import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../css/productsCss/description.css";
import Navbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";

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

    const { img1, img2, img3, img4, img5, img6, img7, img8 } = props;

    const images = [img1, img2, img3, img4, img5, img6, img7, img8].filter(
        (img) => img
    );

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
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            autoPlay={true}
                            autoPlaySpeed={3 * 1000}
                            containerClass="pd-carousel-container"
                            dotListClass="custom-dot-list-style"
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="product-carousel-image"
                                >
                                    <img
                                        src={image}
                                        alt={`Image_${index + 1} Loading...`}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="middleSectionProduct">
                        <h5 className="card-title headingColorWhite">Size</h5>
                        <p className="card-text product-description-detail">
                            {props.size}
                        </p>
                        <h5 className="card-title headingColorWhite">
                            Touch Buttons
                        </h5>
                        <p className="card-text product-description-detail">
                            {props.touchbuttons}
                        </p>
                        <h5 className="card-title headingColorWhite">Color</h5>
                        <p className="card-text product-description-detail productColorPara">
                            {props.color}
                        </p>
                        <p className="card-text product-description-detail productColorPara">
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
                            <div className="Add-more-value-contailer">
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
                        <p className="card-text product-description-detail">
                            {props.loadcapacity}
                        </p>
                        <h5 className="card-title headingColorWhite">
                            Max Load at Socket
                        </h5>
                        <p className="card-text product-description-detail">
                            {props.maxloadsocket}
                        </p>
                        <h5 className="card-title headingColorWhite">
                            Max Load at Switch
                        </h5>
                        <p className="card-text product-description-detail">
                            {props.maxloadswitch}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="module-hr" />
            <Footer />
        </div>
    );
}
