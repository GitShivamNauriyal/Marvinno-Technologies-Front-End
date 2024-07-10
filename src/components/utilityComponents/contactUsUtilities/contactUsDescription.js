import React from "react";
import { CiGlobe, CiMail, CiServer, CiPhone } from "react-icons/ci";
import { PiMapPinLight } from "react-icons/pi";
import {
    PiXLogo,
    PiFacebookLogo,
    PiInstagramLogo,
    PiYoutubeLogo,
    PiPinterestLogo,
} from "react-icons/pi";
import "../../css/contactUsCss/contactUsDescription.css";
import emailjs from "emailjs-com";
// import instagramLogo from "../../images/icons/instagram.jpg";
// import facebookLogo from "../../images/icons/facebook.jpg";
// import youtubeLogo from "../../images/icons/youtube.png";
// import twitterLogo from "../../images/icons/twitter.png";
// import quoraLogo from "../../images/icons/quora.png";

export default function contactUsDescription() {
    // function is created in the component itself
    const sendemail = (e) => {
        e.preventDefault();
        let count = 0;
        const element = document.querySelectorAll(".inputArea");
        element.forEach((element) => {
            if (element.value !== "") {
                count++;
            }
        });
        if (count === 5) {
            emailjs
                .sendForm(
                    "service_oopj7xd",
                    "template_tyo57ji",
                    e.target,
                    "fu2iHxpmP9q3P39mT"
                )
                .then(() => alert("Message has been Delivered successfully"))
                .catch(() =>
                    alert(
                        "OOPS something went wrong, Try Contacting the other way"
                    )
                );
        } else {
            alert("Invalid Entries");
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
                        <a href="https://pin.it/3gPNrJy">
                            <PiPinterestLogo className="connect-social-media-link" />
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
                    <form onSubmit={sendemail}>
                        <h2 className="connect-form-heading">Contact Us</h2>
                        <div className="formDiv">
                            <label
                                className="connect-label firstNAMEWidth"
                                for="firstname"
                                name=""
                            >
                                Name
                            </label>
                            <div className="firstNameDiv">
                                <input
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    className="inputArea"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <label
                                className="connect-label mobileWidth"
                                for="phonenumber"
                                name=""
                            >
                                Phone Number
                            </label>
                            <div className="mobileDiv">
                                <input
                                    id="phonenumber"
                                    type="text"
                                    name="phone"
                                    className="inputArea"
                                    placeholder="Your Phone Number"
                                    required
                                />
                            </div>
                            <label
                                className="connect-label emailWidth"
                                for="emailid"
                                name=""
                            >
                                Email
                            </label>
                            <div className="emailDiv">
                                <input
                                    id="emailid"
                                    type="email"
                                    name="email"
                                    className="inputArea"
                                    placeholder="Your Email Address"
                                    required
                                />
                            </div>
                            <label
                                className="connect-label addressWidth"
                                for="address"
                                name=""
                            >
                                Address
                            </label>
                            <div className="addressDiv">
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    className="inputArea"
                                    placeholder="Your Address"
                                    required
                                />
                            </div>
                            <label
                                className="connect-label commentsWidth"
                                for="comment"
                                name=""
                            >
                                Comments
                            </label>
                            <div className="commentsDiv">
                                <textarea
                                    id="comment"
                                    name="message"
                                    rows="8"
                                    className="inputArea"
                                    placeholder="Your Message for us..."
                                    required
                                />
                            </div>
                            <p className="center-submit-connect">
                                {" "}
                                <input
                                    type="submit"
                                    className="submitHeading ReadMoreButton"
                                    value="Submit"
                                />
                            </p>
                        </div>
                    </form>
                </div>
                <div className="contact-form-right-side-bar">
                    <div className="contact-info-div email-div">
                        <CiMail className="contact-info-div-icon email-icon" />
                        <h3>Email Address</h3>
                        <p>Email: info@marvinno.in, info.marvinno@gmail.com</p>
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
    );
}
