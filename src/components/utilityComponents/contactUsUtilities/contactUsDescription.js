import React from "react";
import "../../css/contactUsCss/contactUsDescription.css";
import emailjs from "emailjs-com";
import instagramLogo from "../../images/icons/instagram.jpg";
import facebookLogo from "../../images/icons/facebook.jpg";
import youtubeLogo from "../../images/icons/youtube.png";
import twitterLogo from "../../images/icons/twitter.png";
import quoraLogo from "../../images/icons/quora.png";

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
        <div>
            <div className="contactUsDisplayFlex">
                <div className="contactUsBgColor">
                    <form onSubmit={sendemail}>
                        <div className="formDiv">
                            <label className="firstNAMEWidth" name="">
                                Name<span className="astrick-connect">*</span>
                            </label>
                            <div className="firstNameDiv">
                                <input
                                    type="text"
                                    name="firstname"
                                    className="inputArea"
                                />
                            </div>
                            <label className="mobileWidth" name="">
                                Contact Number
                                <span className="astrick-connect">*</span>
                            </label>
                            <div className="mobileDiv">
                                <input
                                    type="text"
                                    name="phone"
                                    className="inputArea"
                                />
                            </div>
                            <label className="emailWidth" name="">
                                Email<span className="astrick-connect">*</span>
                            </label>
                            <div className="emailDiv">
                                <input
                                    type="email"
                                    name="email"
                                    className="inputArea"
                                />
                            </div>
                            <label className="addressWidth" name="">
                                Address
                                <span className="astrick-connect">*</span>
                            </label>
                            <div className="addressDiv">
                                <input
                                    type="text"
                                    name="address"
                                    className="inputArea"
                                />
                            </div>
                            <label className="commentsWidth" name="">
                                Comments
                                <span className="astrick-connect">*</span>
                            </label>
                            <div className="commentsDiv">
                                <textarea
                                    name="message"
                                    rows="8"
                                    className="inputArea"
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

                <div className="rightSectionOfContactUs">
                    <h3 className="headingContactUs headingContactUs-social-media">
                        Social Media
                    </h3>
                    <div className="icons-footer icons-connect">
                        <a
                            className="li-social-connect socialMediaFooterYoutube"
                            target="blank"
                            href="https://www.youtube.com/channel/UCO9cJ8f5HztqR2HcM9XFY0w"
                        >
                            <img
                                src={youtubeLogo}
                                className="youtube-link youtube-link-connect link-social-media-footer link-social-media-connect"
                                alt="..."
                            />
                        </a>
                        <a
                            className="li-social-connect socialMediaFooterQuora"
                            target="blank"
                            href="https://pin.it/3gPNrJy"
                        >
                            <img
                                src={quoraLogo}
                                className="link-social-media-footer link-social-media-connect"
                                alt="..."
                            />
                        </a>
                        <a
                            className="li-social-connect socialMediaFooterInstagram"
                            target="blank"
                            href="https://www.instagram.com/marvinnotechnologies/"
                        >
                            <img
                                src={instagramLogo}
                                className="instagram-link link-social-media-footer link-social-media-connect"
                                alt="..."
                            />
                        </a>
                        <a
                            className="li-social-connect socialMediaFooterFacebook"
                            target="blank"
                            href="https://www.facebook.com/marvinnotechnologies/"
                        >
                            <img
                                src={facebookLogo}
                                className="facebook-link link-social-media-footer link-social-media-connect"
                                alt="..."
                            />
                        </a>
                        <a
                            className="li-social-connect socialMediaFooterTwitter"
                            target="blank"
                            href="https://www.twitter.com/marvinnotech"
                        >
                            <img
                                src={twitterLogo}
                                className="twitter-link link-social-media-footer link-social-media-connect"
                                alt="..."
                            />
                        </a>
                    </div>
                    <div className="flexDiv flexDiv-1">
                        <h3 className="headingContactUs">Address</h3>
                        <p className="descriptionContactUs">
                            Experience Center: Dilshad Garden, New Delhi
                        </p>
                        <p className="descriptionContactUs">
                            Head Office: New Delhi, India
                        </p>
                    </div>
                    <div className="flexDiv flexDiv-2">
                        <h3 className="headingContactUs">Contact</h3>
                        <p className="descriptionContactUs">
                            <p>Phone Number: +91-8527972527</p>
                            <p>Customer Care: +011-41731619</p>
                        </p>
                    </div>
                    <div className="flexDiv flexDiv-3">
                        <h3 className="headingContactUs">Email</h3>
                        <p className="descriptionContactUs descriptionContactUs-email-2">
                            info@marvinno.in
                        </p>
                        <p className="descriptionContactUs-email-2">
                            info.marvinno@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
