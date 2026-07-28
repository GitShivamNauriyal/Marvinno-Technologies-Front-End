import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import ApiService from "../../../../services/apiService";
import "../../../css/aboutCss/careerSection.css";

const CareerForm = () => {
    const [loading, setLoading] = useState(false);
    const [submissionSuccessful, setSubmissionSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        state: "Delhi",
        interest: "Content Writing",
        termsAgreed: false,
        receiveUpdates: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = "Date of birth is required.";
        } else {
            const today = new Date();
            const birthDate = new Date(formData.dateOfBirth);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();
            if (
                monthDifference < 0 ||
                (monthDifference === 0 && today.getDate() < birthDate.getDate())
            ) {
                age = age - 1;
            }
            if (age < 18) {
                newErrors.dateOfBirth = "You must be at least 18 years old.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!validateForm()) {
            setLoading(false);
            return;
        }

        try {
            await ApiService.submitContactInquiry(formData);
            setLoading(false);
            setSubmissionSuccess(true);
        } catch (error) {
            console.error("Submission error:", error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="about-career-section">
                <h1 className="about-section-headings">Career at MARVINNO</h1>
                <p className="about-career-section-paragraph">
                    Join Our Innovation Journey: Embark on a career with us and be part of a pioneering team driving technological advancements.
                </p>
                <div className="about-career-section-form-container">
                    {!submissionSuccessful ? (
                        <form
                            className="internship-form"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="internship-label">
                                    First name
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Last name
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && (
                                        <span className="error">
                                            {errors.email}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Phone number
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="10-digit phone number"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phoneNumber && (
                                        <span className="error">
                                            {errors.phoneNumber}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    Date of Birth
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.dateOfBirth && (
                                        <span className="error">
                                            {errors.dateOfBirth}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    State
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Delhi">Delhi</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label className="internship-label">
                                    Area of Interest
                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Engineering & IoT">Engineering & IoT</option>
                                        <option value="Full Stack Development">Full Stack Development</option>
                                        <option value="Sales & Operations">Sales & Operations</option>
                                        <option value="Content & Marketing">Content & Marketing</option>
                                        <option value="Field Support">Field Support</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    <input
                                        type="checkbox"
                                        name="termsAgreed"
                                        checked={formData.termsAgreed}
                                        onChange={handleChange}
                                        required
                                    />
                                    I agree to the Terms and Conditions
                                </label>
                            </div>
                            <div>
                                <label className="internship-label">
                                    <input
                                        type="checkbox"
                                        name="receiveUpdates"
                                        checked={formData.receiveUpdates}
                                        onChange={handleChange}
                                    />
                                    I want to receive updates about career opportunities
                                </label>
                            </div>
                            <div className="button-container">
                                <button
                                    type="submit"
                                    className="internship-button"
                                    disabled={loading}
                                >
                                    {!loading && <span>Submit Application</span>}
                                    <PulseLoader
                                        loading={loading}
                                        color="#fff"
                                        size={8}
                                    />
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="submission-success-message" style={{ textAlign: "center", padding: "3rem" }}>
                            <h2>Application Submitted Successfully!</h2>
                            <p>Thank you for your interest in Marvinno. Our team will review your application and contact you soon.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareerForm;
