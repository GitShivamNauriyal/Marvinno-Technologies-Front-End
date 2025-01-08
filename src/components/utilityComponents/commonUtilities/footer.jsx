import React from "react";
import "../../css/commonComponentsCss/footer.css";
import { Link } from "react-router-dom";
import appStoreImage from "../../images/website icons/appstoreLink.png";
import playStoreImage from "../../images/website icons/googlePlayLink.png";
import footerMarvinnoLogo from "../../images/website icons/marvinnoApp.png";

import {
    PiXLogo,
    PiFacebookLogo,
    PiInstagramLogo,
    PiYoutubeLogo,
    PiLinkedinLogoLight,
} from "react-icons/pi";
import termsAndConditions from "../../images/Terms_and_Conditions.pdf";

export default function Footer() {
    const products = [
        "s",
        "p",
        "e",
        "c",
        "t",
        "r",
        "u",
        "m1",
        "m3",
        "x",
        "y",
        "z",
    ];
    const socialLinks = [
        {
            href: "https://www.youtube.com/channel/UCO9cJ8f5HztqR2HcM9XFY0w",
            icon: PiYoutubeLogo,
        },
        {
            href: "https://www.instagram.com/marvinnotechnologies/",
            icon: PiInstagramLogo,
        },
        {
            href: "https://www.facebook.com/marvinnotechnologies/",
            icon: PiFacebookLogo,
        },
        { href: "https://www.twitter.com/marvinnotech", icon: PiXLogo },
        {
            href: "https://www.linkedin.com/company/marvinno-technologies/",
            icon: PiLinkedinLogoLight,
        },
    ];

    return (
        <div className="footer-container">
            <div className="footer-margin">
                {/* Products Section */}
                <div className="footer-div-grid div1">
                    <Link
                        className="heading-center-more products-heading-footer"
                        to="/products"
                    >
                        Products
                    </Link>
                    <br />
                    {products.map((module) => (
                        <li className="li-items-footer" key={module}>
                            <Link
                                className="anchor-tag-items-footer"
                                to={`/products/${module}-module`}
                            >
                                {module.toUpperCase()} - Module
                            </Link>
                        </li>
                    ))}
                </div>

                {/* More Links Section */}
                <div className="footer-div-grid div2">
                    <a className="heading-center-more heading-footer" href="/">
                        More
                    </a>
                    <br />
                    <li className="li-items-footer">
                        <Link className="anchor-tag-items-footer" to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="li-items-footer">
                        <Link
                            className="anchor-tag-items-footer"
                            to="/products"
                        >
                            Products
                        </Link>
                    </li>
                    <li className="li-items-footer">
                        <Link
                            className="anchor-tag-items-footer"
                            to="/solutions"
                        >
                            Solutions
                        </Link>
                    </li>
                    <li className="li-items-footer">
                        <Link className="anchor-tag-items-footer" to="/connect">
                            Connect
                        </Link>
                    </li>
                    <li className="li-items-footer">
                        <a
                            className="anchor-tag-items-footer"
                            target="_blank"
                            href={termsAndConditions}
                        >
                            Terms & Conditions
                        </a>
                    </li>
                    <li className="li-items-footer">
                        <Link
                            className="anchor-tag-items-footer"
                            target="_blank"
                            to="/Privacy"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                </div>

                {/* Social Media Section */}
                <div className="footer-div-grid div3">
                    <p className="heading-footer">Connect With Us</p>
                    <div className="footer-connect-social-media-link-container">
                        {socialLinks.map(({ href, icon: Icon }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="connect-social-media-link" />
                            </a>
                        ))}
                    </div>

                    {/* Footer Contact Details */}
                    <p className="footer-address">
                        Experience Center: Dilshad Garden, New Delhi
                    </p>
                    <p className="footer-address">
                        Head Office: New Delhi, India
                    </p>
                    <p className="footer-address">Email: info@marvinno.in</p>
                    <p className="footer-address">
                        Phone Number: +91-8527972527
                    </p>
                    <div className="footer-download-links">
                        <a
                            className="footer-download-images"
                            target="blank"
                            href="https://play.google.com/store/apps/details?id=in.marvinno"
                        >
                            <img
                                className="footer-download-images"
                                src={playStoreImage}
                                alt="playstore link"
                            />
                        </a>
                        <br />
                        <a
                            className="footer-download-images"
                            target="blank"
                            href="https://apps.apple.com/in/app/marvinno/id1615715918"
                        >
                            <img
                                className="footer-download-images appstore-link"
                                src={appStoreImage}
                                alt="appstore link"
                            />
                        </a>
                        <br />
                    </div>
                </div>

                <hr className="line-break-footer" />

                {/* Footer Branding */}
                <div className="footer-div-grid div4 footer-div4">
                    <img
                        className="footer-marvinno-image"
                        alt="marvinno logo"
                        src={footerMarvinnoLogo}
                    />
                    <p className="footer-copyright-text">
                        &#169; 2025 Marvinno Technologies India Pvt. Ltd. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
