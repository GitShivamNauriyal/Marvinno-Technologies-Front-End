import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../css/productsCss/MakePayment.css";
import ApiService from "../../../services/apiService";

const PaymentModalPortal = ({ isOpen, onClose, formData, handleChange, handleSubmit, errors }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="close-button"
                    aria-label="Close"
                >
                    ✕
                </button>
                <h3 className="modal-title">Payment Details</h3>
                <p className="modal-subtitle">Enter your transaction details below</p>

                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && (
                            <p className="error">{errors.name}</p>
                        )}
                    </div>

                    <div className="form-field">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && (
                            <p className="error">{errors.phone}</p>
                        )}
                    </div>

                    <div className="form-field">
                        <label>Email Address (Optional)</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>

                    <div className="form-field">
                        <label>City / Address (Optional)</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="City or Installation Location"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Amount (₹)</label>
                        <input
                            type="number"
                            name="amount"
                            placeholder="e.g. 5990"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                        {errors.amount && (
                            <p className="error">{errors.amount}</p>
                        )}
                    </div>

                    <button type="submit" className="submit-button">
                        Proceed to Pay
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
};

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!/^\d{10}$/.test(formData.phone))
            newErrors.phone = "Enter a valid 10-digit phone number";

        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "Enter a valid email address";

        if (
            !formData.amount ||
            isNaN(formData.amount) ||
            Number(formData.amount) <= 0
        )
            newErrors.amount = "Enter a valid amount";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Payment processes are not functional at the moment. Online payment gateway is currently under maintenance. Please contact info@marvinno.in for direct assistance.");
            try {
                await ApiService.processPayment(formData);
            } catch (err) {}
            setIsOpen(false);
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
                <div>
                    <h2>Want to make a Payment?</h2>
                    <p>Instant online checkout & custom payment portal</p>
                </div>
            </div>
            <div className="make-a-payment-button-container">
                <button
                    onClick={() => setIsOpen(true)}
                    className="make-a-payment-button"
                >
                    Make Payment 💳
                </button>
            </div>
            <PaymentModalPortal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
        </div>
    );
};

export default MakeAPayment;
