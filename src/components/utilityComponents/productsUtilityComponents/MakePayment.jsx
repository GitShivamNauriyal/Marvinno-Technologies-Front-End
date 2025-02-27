import { React, useState } from "react";
import "../../css/productsCss/MakePayment.css";

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

export default MakeAPayment;
