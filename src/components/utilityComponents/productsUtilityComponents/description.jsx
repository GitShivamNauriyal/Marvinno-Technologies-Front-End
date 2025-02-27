import { React, useState } from "react";
import Module from "./module";
import AOS from "aos";
import "aos/dist/aos.css";
import cardData from "./cardDetails";
import Card_Data_2M from "./cardDetails_2M";
import "../../css/productsCss/products.css";
// import brochure from "../../images/Marvinno SPECTRUM Range Brochure.pdf";
import brochure_all from "../../images/pdfs/Marvinno SPRECTRUM Range Brochure.pdf";
import brochure_2M from "../../images/pdfs/Marvinno Smart 2M Range Brochure.pdf";
import wiring_diagram from "../../images/pdfs/Wiring Diagrams - All Modules.pdf";

const MakeAPayment = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        amount: "",
    });

    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form fields
    const validateForm = () => {
        let newErrors = {};

        // Name validation (required)
        if (!formData.name.trim()) newErrors.name = "Name is required";

        // Phone validation (10-digit number)
        if (!/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Enter a valid 10-digit phone number";

        // Email validation (only if filled)
        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Enter a valid email address";

        // Amount validation (must be a positive number)
        if (
            !formData.amount ||
            isNaN(formData.amount) ||
            Number(formData.amount) <= 0
        )
            newErrors.amount = "Enter a valid amount";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Payment Methods Temporarily Disabled!"); // disabled
            // alert("Payment submitted successfully!");
            setIsOpen(false); // Close modal after successful validation
            setFormData({
                name: "",
                phone: "",
                email: "",
                address: "",
                amount: "",
            });
        }
    };

    return (
        <div className="make-a-payment-section">
            <div className="make-a-payment-heading">
                <h2>Want to make a Payment?👀</h2>
            </div>
            <div className="make-a-payment-button-container">
                <button
                    onClick={() => setIsOpen(true)}
                    className="make-a-payment-button"
                >
                    Click Here!
                </button>
            </div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3 className="modal-title">Payment Details</h3>

                        {/* Form */}
                        <form className="payment-form" onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && (
                                    <p className="error">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.phone && (
                                    <p className="error">{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label>Email (Optional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="error">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label>City/Address (Optional)</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Amount</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.amount && (
                                    <p className="error">{errors.amount}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="submit-button">
                                Proceed to Payment
                            </button>
                        </form>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="close-button"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default function Description() {
    AOS.init({ duration: 1500 });

    return (
        <div className="product-master">
            <MakeAPayment />
            <div className="productHeadingContainer" data-aos="fade-up">
                <p className="p-spectrum-products-heading">
                    Marvinno's SPECTRUM Range
                </p>
            </div>
            <div
                className="product row1"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {cardData.map((item) => (
                    <Module
                        key={item.id} // Don't forget to add a unique key prop when mapping over arrays in React
                        id={item.id}
                        imgsrc={item.img}
                        price={item.price}
                        name={item.name}
                        totalSales={item.totalSales}
                        title={item.btnTitle}
                        rating={item.rating}
                        url={item.url}
                    />
                ))}
            </div>
            <div className="productHeadingContainer" data-aos="fade-up">
                <p className="p-spectrum-products-heading">
                    Marvinno's Smart 2M Range
                </p>
            </div>
            <div className="product row1" data-aos="fade-up">
                {Card_Data_2M.map((item) => (
                    <Module
                        key={item.id} // Don't forget to add a unique key prop when mapping over arrays in React
                        id={item.id}
                        imgsrc={item.img}
                        price={item.price}
                        name={item.name}
                        totalSales={item.totalSales}
                        title={item.btnTitle}
                        rating={item.rating}
                        url={item.url}
                    />
                ))}
            </div>
            <div className="products-top-bg-black" data-aos="fade-up">
                <div className="descriptionProductsCss">
                    <p>
                        Dive into a set of 12 captivating modules, available in
                        Gloss or Matte enchantments. Customize your ideal
                        combination by mixing Base colors (Black or White) with
                        Frame coatings (Gold or Silver). Whether you seek
                        boldness or prefer the timeless, our selection caters to
                        your preferences. Explore a journey of innovation with
                        our groundbreaking modules and their exceptional
                        characteristics. Prepare yourself for a touch of
                        enchantment!
                    </p>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure_all}
                            download
                        >
                            Dowload Spectrum Range Brochure
                        </a>
                    </div>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={brochure_2M}
                            download
                        >
                            Download Smart 2M Range Brochure
                        </a>
                    </div>
                    <div className="download-products">
                        <a
                            className="anchor-tag-items-products-download-top"
                            target="blank"
                            href={wiring_diagram}
                            download
                        >
                            Wiring Diagrams and Connections
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
