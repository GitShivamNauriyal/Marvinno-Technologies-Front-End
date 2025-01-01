import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/commonComponentsCss/Navbar.css";
import homeNavbarIcon from "../../images/homeIconNavbar.png";
import navbarLogo from "../../images/navbarLogoBlackText.png";

export default function NonRespNavbar() {
    // const [showNavbar, setShowNavbar] = useState(true);
    // const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    // const handleScroll = () => {
    //     const currentScrollY = window.scrollY;
    //     if (currentScrollY > lastScrollY) {
    //         setShowNavbar(false);
    //     } else {
    //         setShowNavbar(true);
    //     }
    //     setLastScrollY(currentScrollY);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [lastScrollY]);

    return (
        // <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <div className="navbar-master">
            <div className="navbar-name-login-signup">
                <div className="navbarLogoAlignCenterCss">
                    <img
                        className="navBarLogoImageHeight"
                        src={navbarLogo}
                        alt="Marvinno LOGO"
                    />
                </div>
                <div className="navbar-Login-Signup">
                    <Link
                        className="registration-link signup-link"
                        to="/signup"
                        alt="Sign Up"
                    >
                        Sign-Up
                    </Link>
                    <Link
                        className="registration-link login-link"
                        to="/login"
                        alt="Login"
                    >
                        Login
                    </Link>
                </div>
            </div>
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
                            alt="Home"
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
        // </div>
    );
}
