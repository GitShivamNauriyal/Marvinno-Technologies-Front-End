import React, { useState } from "react";
import Cookies from "js-cookie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";
import "../../css/productsCss/products.css";

export default function ProductDescription(props) {
    const [value, setValue] = useState(1);
    const [cartArray, setCartArray] = useState([]);

    // Increase or decrease product quantity
    const increaseVal = () => setValue(value + 1);
    const decreaseVal = () => setValue(value > 1 ? value - 1 : 1);

    // Load cart on component mount
    useEffect(() => {
        const cart = JSON.parse(Cookies.get("cart") || JSON.stringify(new Array(12).fill(null)));
        setCartArray(cart);
    }, []);

    // Handle Add to Cart
    const addToCart = () => {
        // Ensure cartArray is always an array
        const cart = JSON.parse(Cookies.get("cart") || JSON.stringify(new Array(12).fill(null)));

        // Validate product index
        if (props.index < 0 || props.index >= cart.length) {
            alert("Invalid product index!");
            return;
        }

        // Initialize or update the product at the correct index
        const currentProduct = cart[props.index] || {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 0,
        };

        // Update the quantity
        currentProduct.quantity += value;

        // Save the updated product back to the cart array
        cart[props.index] = currentProduct;

        // Save the updated cart to cookies and state
        Cookies.set("cart", JSON.stringify(cart));
        setCartArray(cart);

        // Notify the user
        alert(`${value} units of ${props.name} added to the cart!`);
    };



    // Carousel and product details
    const { img1, img2, img3, img4, img5, img6, img7, img8 } = props;
    const images = [img1, img2, img3, img4, img5, img6, img7, img8].filter(
        (img) => img
    );

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

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
                        <button onClick={addToCart}>Add to Cart</button>
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
                    {/* <div>
                        <h3>Price: {props.price}</h3>
                        <div className="Add-more">
                            <button onClick={decreaseVal}>-</button>
                            <span>{value}</span>
                            <button onClick={increaseVal}>+</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <hr className="module-hr" />

            <Footer />
        </div >
    );
}


{/*
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";
import "../../css/productsCss/products.css";

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

    */}