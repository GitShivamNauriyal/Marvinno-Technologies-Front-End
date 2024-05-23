import React from "react";
import { Link } from "react-router-dom";
import "../../css/commonComponentsCss/newNavbar.css";
import homeNavbarIcon from "../../images/homeIconNavbar.png";
import navbarLogo from "../../images/navbarLogoBlackText.png";

export default function nonRespNavbar() {
    return (
        <div className="navbar-master">
            <p className="navbarLogoAlignCenterCss">
                <img
                    className="navBarLogoImageHeight"
                    src={navbarLogo}
                    alt="..."
                />
            </p>
            <ul className="ulElementsNavbar">
                <li className="liElementsNavbar productsMarginLeft li-elements-navbar">
                    <Link
                        className="liElementsLink  a-elements-navbar"
                        to="/products"
                    >
                        Products
                    </Link>
                </li>
                <li className="liElementsNavbar liElementsNavbar-solutions li-elements-navbar">
                    <Link
                        className="liElementsLink a-elements-navbar"
                        to="/solutions"
                    >
                        Solutions
                    </Link>
                </li>
                <li className="liElementsNavbar liElementsNavbar-home li-elements-navbar">
                    <Link className="liElementsLink a-elements-navbar" to="/">
                        <img
                            className="homeLogoNavbar"
                            src={homeNavbarIcon}
                            alt="..."
                        />
                    </Link>
                </li>
                <li className="liElementsNavbar li-elements-navbar">
                    <Link
                        className="liElementsLink a-elements-navbar"
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li className="liElementsNavbar li-elements-navbar">
                    <Link
                        className="liElementsLink a-elements-navbar"
                        to="/connect"
                    >
                        Connect
                    </Link>
                </li>
            </ul>
        </div>
    );
}
