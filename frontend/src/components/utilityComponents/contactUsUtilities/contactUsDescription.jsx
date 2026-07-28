import React, { useState } from "react";
import { CiGlobe, CiMail, CiServer, CiPhone } from "react-icons/ci";
import { PiMapPinLight } from "react-icons/pi";
import {
    PiXLogo,
    PiFacebookLogo,
    PiInstagramLogo,
    PiYoutubeLogo,
    PiLinkedinLogoLight,
} from "react-icons/pi";
import "../../css/contactUsCss/contactUsDescription.css";
import ApiService from "../../../services/apiService";

export default function ContactUsDescription() {
    const [formData, setFormData] = useState({
        firstname: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg("");
        setErrorMsg("");

        try {
            const res = await ApiService.submitContactInquiry(formData);
            setLoading(false);
            if (res.success) {
                setSuccessMsg("Your message has been delivered successfully! Our team will get back to you soon.");
                setFormData({
                    firstname: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
            } else {
                setErrorMsg(res.message || "Failed to deliver message.");
            }
        } catch (err) {
            setLoading(false);
            const msg = err.response?.data?.message || "Error submitting inquiry. Ensure backend is running.";
            setErrorMsg(msg);
        }
    };

    return (
        <div className="connect-page-master">
            <div className="get-in-touch-heading-container">
                <h1>Get in Touch with</h1>
                <div className="get-in-touch-company-name">
                    <h1>Marvinno Technologies</h1>
                </div>
            </div>
            <div className="connect-page-description">
                <div className="contactUsDisplayGrid">
                    <div className="contact-info-div social-media-div">
                        <CiGlobe className="contact-info-div-icon social-media-icon" />
                        <h3>Social Media</h3>
                        <div className="connect-social-media-link-container">
                            <a href="https://www.youtube.com/channel/UCO9cJ8f5HztqR2HcM9XFY0w">
                                <PiYoutubeLogo className="connect-social-media-link" />
                            </a>

                            <a href="https://www.instagram.com/marvinnotechnologies/">
                                <PiInstagramLogo className="connect-social-media-link" />
                            </a>

                            <a href="https://www.facebook.com/marvinnotechnologies/">
                                <PiFacebookLogo className="connect-social-media-link" />
                            </a>

                            <a href="https://www.twitter.com/marvinnotech">
                                <PiXLogo className="connect-social-media-link" />
                            </a>
                            <a href="https://www.linkedin.com/company/marvinno-technologies/">
                                <PiLinkedinLogoLight className="connect-social-media-link" />
                            </a>
                        </div>
                    </div>
                    <div className="contact-info-div address-div">
                        <PiMapPinLight className="contact-info-div-icon address-icon" />
                        <h3>Address</h3>
                        <p>Experience Center: Dilshad Garden, New Delhi</p>
                        <p>Head Office: New Delhi, India</p>
                        <p>R&D Centre: Dehradun, Uttarakhand</p>
                    </div>
                    <div className="contact-info-div b2b-div">
                        <CiServer className="contact-info-div-icon b2b-icon" />
                        <h3>B2B, Distributors or Dealers Enquiries</h3>
                        <p>Email: info@marvinno.in, info.marvinno@gmail.com</p>
                        <p>Phone Number: +91-8527972527</p>
                    </div>

                    <div className="contact-us-form">
                        <form onSubmit={handleSubmit}>
                            <h2 className="connect-form-heading">Contact Us</h2>

                            {successMsg && (
                                <div style={{
                                    padding: "0.8rem",
                                    marginBottom: "1rem",
                                    borderRadius: "0.5rem",
                                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                                    border: "1px solid #10b981",
                                    color: "#10b981",
                                    fontSize: "0.9rem",
                                    textAlign: "center"
                                }}>
                                    {successMsg}
                                </div>
                            )}

                            {errorMsg && (
                                <div style={{
                                    padding: "0.8rem",
                                    marginBottom: "1rem",
                                    borderRadius: "0.5rem",
                                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                                    border: "1px solid #ef4444",
                                    color: "#ef4444",
                                    fontSize: "0.9rem",
                                    textAlign: "center"
                                }}>
                                    {errorMsg}
                                </div>
                            )}

                            <div className="formDiv">
                                <label className="connect-label firstNAMEWidth" htmlFor="firstname">
                                    Name
                                </label>
                                <div className="firstNameDiv contact-up-form-input-box">
                                    <input
                                        id="firstname"
                                        type="text"
                                        name="firstname"
                                        className="inputArea"
                                        placeholder="Your Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <label className="connect-label mobileWidth" htmlFor="phonenumber">
                                    Phone Number
                                </label>
                                <div className="mobileDiv contact-up-form-input-box">
                                    <input
                                        id="phonenumber"
                                        type="text"
                                        name="phone"
                                        className="inputArea"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <label className="connect-label emailWidth" htmlFor="emailid">
                                    Email
                                </label>
                                <div className="emailDiv contact-up-form-input-box">
                                    <input
                                        id="emailid"
                                        type="email"
                                        name="email"
                                        className="inputArea"
                                        placeholder="Your Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <label className="connect-label addressWidth" htmlFor="address">
                                    Address
                                </label>
                                <div className="addressDiv contact-up-form-input-box">
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        className="inputArea"
                                        placeholder="Your Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <label className="connect-label commentsWidth" htmlFor="comment">
                                    Comments
                                </label>
                                <div className="commentsDiv contact-up-form-input-box">
                                    <textarea
                                        id="comment"
                                        name="message"
                                        rows="8"
                                        className="inputArea"
                                        placeholder="Your Message for us..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <p className="center-submit-connect">
                                    <input
                                        type="submit"
                                        className="submitHeading ReadMoreButton"
                                        value={loading ? "Sending..." : "Submit"}
                                        disabled={loading}
                                    />
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="contact-form-right-side-bar">
                        <div className="contact-info-div email-div">
                            <CiMail className="contact-info-div-icon email-icon" />
                            <h3>Email Address</h3>
                            <p>
                                Email: info@marvinno.in, info.marvinno@gmail.com
                            </p>
                        </div>
                        <div className="contact-info-div ohone-number-div">
                            <CiPhone className="contact-info-div-icon phone-icon" />
                            <h3>Phone Number</h3>
                            <p>Phone Number: +91-8527972527</p>
                            <p>Customer Care: +011-41731619</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
