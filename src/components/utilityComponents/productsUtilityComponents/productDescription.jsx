import React, { useState } from "react";
import Navbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";
import "../../css/productsCss/products.css";
import CartService from "../../../services/cartService";
import { FaStar, FaShieldAlt, FaTruck, FaTools, FaBolt, FaMobileAlt } from "react-icons/fa";

export default function ProductDescription(props) {
    const { img1, img2, img3, img4, img5, img6, img7, img8 } = props;
    const images = [img1, img2, img3, img4, img5, img6, img7, img8].filter(Boolean);

    const [selectedImage, setSelectedImage] = useState(images[0] || "");
    const [quantity, setQuantity] = useState(1);

    const increaseVal = () => setQuantity((prev) => prev + 1);
    const decreaseVal = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        const product = {
            id: props.id,
            name: props.name,
            price: props.price,
            img: selectedImage || img1,
        };
        CartService.addToCart(product, quantity);
        alert(`${quantity} unit(s) of ${props.name} added to your cart!`);
    };

    const getAccentGlow = (colorProp) => {
        if (!colorProp) return "rgba(16, 185, 129, 0.15)";
        if (colorProp.startsWith("#")) {
            const hex = colorProp.slice(1, 7);
            const r = parseInt(hex.slice(0, 2), 16) || 16;
            const g = parseInt(hex.slice(2, 4), 16) || 185;
            const b = parseInt(hex.slice(4, 6), 16) || 129;
            return `rgba(${r}, ${g}, ${b}, 0.2)`;
        }
        return "rgba(16, 185, 129, 0.15)";
    };

    const ambientAccent = getAccentGlow(props.bgcolor);

    return (
        <div className="product-detail-page-master">
            <Navbar />

            {/* Deep Slate Dark Mode Canvas for High-Contrast Visibility across all pages */}
            <div
                className="bgColorProductDescription"
                style={{
                    backgroundColor: "#0b1329",
                    backgroundImage: `radial-gradient(circle at 50% 15%, ${ambientAccent} 0%, rgba(11, 19, 41, 0) 65%)`,
                }}
            >
                <div className="product-detail-container">
                    {/* Breadcrumbs */}
                    {/* <div className="product-breadcrumb">
                        <span>Home</span> &rsaquo; <span>Products</span> &rsaquo; <span>SPECTRUM Series</span> &rsaquo; <span className="active-breadcrumb">{props.name}</span>
                    </div> */}

                    <div className="ecommerce-product-layout">
                        {/* LEFT COLUMN: Gallery Viewport */}
                        <div className="ecommerce-gallery-column">
                            <div className="main-image-viewer-card">
                                <span className="product-badge-overlay">SPECTRUM SERIES</span>
                                <img
                                    src={selectedImage || images[0]}
                                    alt={props.name}
                                    className="main-product-image"
                                />
                            </div>

                            {/* Thumbnail Selector */}
                            {images.length > 1 && (
                                <div className="product-thumbnails-grid">
                                    {images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`thumbnail-card ${selectedImage === img || (!selectedImage && idx === 0) ? "active-thumbnail" : ""}`}
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img src={img} alt={`Thumb ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Guarantee Trust Badges */}
                            <div className="trust-badges-bar">
                                <div className="trust-badge-item">
                                    <FaShieldAlt className="trust-icon" />
                                    <div>
                                        <strong>1 Year Warranty</strong>
                                        <p>Comprehensive Coverage</p>
                                    </div>
                                </div>
                                <div className="trust-badge-item">
                                    <FaTruck className="trust-icon" />
                                    <div>
                                        <strong>Free Shipping</strong>
                                        <p>All Over India</p>
                                    </div>
                                </div>
                                <div className="trust-badge-item">
                                    <FaTools className="trust-icon" />
                                    <div>
                                        <strong>Retrofit Fitting</strong>
                                        <p>No Rewiring Required</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Product Info & E-Commerce Buy Actions */}
                        <div className="ecommerce-info-column">
                            {/* Header */}
                            <div className="product-header-block">
                                <span className="category-pill">Made-in-India Smart Home Automation</span>
                                <h1 className="product-main-title">{props.name}</h1>
                                <p className="product-subtitle-fullform">{props.fullform}</p>

                                {/* Rating & Sales */}
                                <div className="ratings-sales-row">
                                    <div className="star-rating-box">
                                        <FaStar className="star-icon" />
                                        <FaStar className="star-icon" />
                                        <FaStar className="star-icon" />
                                        <FaStar className="star-icon" />
                                        <FaStar className="star-icon" />
                                        <span className="rating-score">5.0</span>
                                    </div>
                                    <span className="divider-dot">&bull;</span>
                                    <span className="sales-count">247 Units Installed</span>
                                    <span className="divider-dot">&bull;</span>
                                    <span className="in-stock-badge">In Stock</span>
                                </div>
                            </div>

                            {/* Price Card */}
                            <div className="ecommerce-price-card">
                                <div className="price-main-display">
                                    <span className="price-currency">Price:</span>
                                    <span className="price-amount">{props.price}</span>
                                    <span className="price-tax-inclusive">Inclusive of all taxes</span>
                                </div>
                                <div className="price-perks">
                                    <span>✓ Free Doorstep Delivery</span>
                                    <span>✓ Expert Installation Available</span>
                                </div>
                            </div>

                            {/* Product Highlights Grid */}
                            <div className="highlights-grid-container">
                                <h4 className="section-small-title">Key Highlights</h4>
                                <div className="highlights-2x2-grid">
                                    <div className="highlight-pill-item">
                                        <FaBolt className="hl-icon" />
                                        <span>{props.touchbuttons || "Capacitive"} Touch Buttons</span>
                                    </div>
                                    <div className="highlight-pill-item">
                                        <FaMobileAlt className="hl-icon" />
                                        <span>Alexa, Siri & App Controlled</span>
                                    </div>
                                    <div className="highlight-pill-item">
                                        <FaTools className="hl-icon" />
                                        <span>{props.size || "Modular Fitting"}</span>
                                    </div>
                                    <div className="highlight-pill-item">
                                        <FaShieldAlt className="hl-icon" />
                                        <span>Toughened Glass Panel</span>
                                    </div>
                                </div>
                            </div>

                            {/* Variant Info */}
                            <div className="variant-specs-row">
                                <div className="variant-chip">
                                    <span className="chip-label">Finishes</span>
                                    <span className="chip-value">{props.color || "Black & White Glass"}</span>
                                </div>
                                <div className="variant-chip">
                                    <span className="chip-label">Frame</span>
                                    <span className="chip-value">{props.frame || "Gold & Chrome"}</span>
                                </div>
                                {props.Sensor && (
                                    <div className="variant-chip">
                                        <span className="chip-label">Sensor</span>
                                        <span className="chip-value">{props.Sensor}</span>
                                    </div>
                                )}
                            </div>

                            {/* Buy & Cart Actions */}
                            <div className="checkout-action-box">
                                <div className="quantity-selector-bar">
                                    <span className="qty-label">Quantity:</span>
                                    <div className="quantity-btn-group">
                                        <button onClick={decreaseVal}>-</button>
                                        <span className="qty-number">{quantity}</span>
                                        <button onClick={increaseVal}>+</button>
                                    </div>
                                </div>

                                <div className="action-buttons-row">
                                    <button className="cart-cta-button" onClick={handleAddToCart}>
                                        Add to Cart 🛒
                                    </button>
                                </div>
                            </div>

                            {/* Technical Specifications Accordion Table */}
                            <div className="tech-specs-table-container">
                                <h3 className="specs-table-header">Technical Specifications</h3>
                                <div className="specs-table-body">
                                    <div className="spec-table-row">
                                        <span className="spec-table-key">Load Capacity</span>
                                        <span className="spec-table-val">{props.loadcapacity}</span>
                                    </div>
                                    <div className="spec-table-row">
                                        <span className="spec-table-key">Max Load (Socket)</span>
                                        <span className="spec-table-val">{props.maxloadsocket}</span>
                                    </div>
                                    <div className="spec-table-row">
                                        <span className="spec-table-key">Max Load (Switch)</span>
                                        <span className="spec-table-val">{props.maxloadswitch}</span>
                                    </div>
                                    <div className="spec-table-row">
                                        <span className="spec-table-key">Form Factor</span>
                                        <span className="spec-table-val">{props.size}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
