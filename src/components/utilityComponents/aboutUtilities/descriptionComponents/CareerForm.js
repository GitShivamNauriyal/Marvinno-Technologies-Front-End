import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

import "../../../css/aboutCss/careerSection.css";

const CareerForm = () => {
    // const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [submissionSuccessful, setSubmissionSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        schoolName: "",
        state: "Andhra Pradesh",
        institutionCategory: "School",
        gender: "Male",
        language: "English",
        stream: "Science",
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

        // Validate phone number
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
        }

        // Validate email
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Validate date of birth
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
            setLoading(false); // Stop the loader if validation fails
            return;
        }

        // Backend integration is commented for now
        // Uncomment the following code when integrating with backend APIs
        /*
        try {
            const response = await axios.post(
                "/your-endpoint", // Replace with your actual API endpoint
                {
                    ...formData,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            setLoading(false);
            setSubmissionSuccess(true);
            setTimeout(() => {
                setSubmissionSuccess(false);
                navigate("/"); // Navigate to home page after 3 seconds
            }, 5000);
        } catch (error) {
            console.error(
                "Error:",
                error.response ? error.response.data : error.message
            );
            // Handle error (e.g., show an error message)
        }
        */

        // Temporary behavior
        alert(
            "The form is not currently accepting responses. Please try again later."
        );
        setSubmissionSuccess(false); //this is temporary, remove this line when integrating with backend

        setLoading(false);
    };

    return (
        <div>
            <div className="about-career-section">
                <h1 className="about-section-headings">Career at MARVINNO</h1>
                <p className="about-career-section-paragraph">
                    Join Our Innovation Journey: Embark on a career with us and
                    be part of a pioneering team driving technological
                    advancements.
                </p>
                <div className="about-career-section-form-container">
                    {!submissionSuccessful && (
                        <form
                            className="internship-form"
                            onSubmit={handleSubmit}
                        >
                            <p className="error">
                                This form is temporaryly not taking response
                            </p>
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
                                        placeholder="+91"
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
                            {/* <div>
                            <label className="internship-label">
                                School/College/Institution Name संस्थान का नाम:
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div> */}
                            <div>
                                <label className="internship-label">
                                    State
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Andra Pradesh">
                                            Andhra Pradesh
                                        </option>
                                        <option value="Arunachal Pradesh">
                                            Arunachal Pradesh
                                        </option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">
                                            Chandigarh
                                        </option>
                                        <option value="Chhattisgarh">
                                            Chhattisgarh
                                        </option>
                                        <option value="Dadar and Nagar Haveli">
                                            Dadar and Nagar Haveli
                                        </option>
                                        <option value="Daman and Diu">
                                            Daman and Diu
                                        </option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">
                                            Himachal Pradesh
                                        </option>
                                        <option value="Jammu and Kashmir">
                                            Jammu and Kashmir
                                        </option>
                                        <option value="Jharkhand">
                                            Jharkhand
                                        </option>
                                        <option value="Karnataka">
                                            Karnataka
                                        </option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Lakshadeep">
                                            Lakshadeep
                                        </option>
                                        <option value="Madya Pradesh">
                                            Madya Pradesh
                                        </option>
                                        <option value="Maharashtra">
                                            Maharashtra
                                        </option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">
                                            Meghalaya
                                        </option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">
                                            Nagaland
                                        </option>
                                        <option value="Orissa">Orissa</option>
                                        <option value="Pondicherry">
                                            Pondicherry
                                        </option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">
                                            Rajasthan
                                        </option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">
                                            Tamil Nadu
                                        </option>
                                        <option value="Telangana">
                                            Telangana
                                        </option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttaranchal">
                                            Uttarakhand
                                        </option>
                                        <option value="Uttar Pradesh">
                                            Uttar Pradesh
                                        </option>
                                        <option value="West Bengal">
                                            West Bengal
                                        </option>
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
                                        <option value="content">
                                            Content Writing
                                        </option>
                                        <option value="research">
                                            Research Work
                                        </option>
                                        <option value="presentation">
                                            Presentations
                                        </option>
                                        <option value="workshop">
                                            Organizing Workshop
                                        </option>
                                        <option value="field">
                                            Field Activities
                                        </option>
                                        <option value="social">
                                            Social Media
                                        </option>
                                        <option value="leadership">
                                            Team leadership
                                        </option>
                                        <option value="other">Other</option>
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
                                    I want to receive updates about the
                                    internship/job vacancies
                                </label>
                            </div>
                            <div className="button-container">
                                <button
                                    type="submit"
                                    className="internship-button"
                                >
                                    {!loading && <p>Submit</p>}
                                    <PulseLoader
                                        loading={loading}
                                        color="#fff"
                                    />
                                </button>
                            </div>
                        </form>
                    )}
                    {submissionSuccessful && (
                        <div className="submission-success-message">
                            <h2>Form submitted successfully!</h2>
                            <p> We will reach you soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareerForm;
