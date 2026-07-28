import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/commonComponentsCss/Navbar.css";
import homeNavbarIcon from "../../images/homeIconNavbar.png";
import navbarLogo from "../../images/navbarLogoBlackText.png";
import CartService from "../../../services/cartService";
import { FaShoppingCart, FaUserCheck, FaSignOutAlt } from "react-icons/fa";

export default function NonRespNavbar() {
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const updateCount = () => {
            const items = CartService.getCart();
            const total = items.reduce((acc, curr) => acc + (curr.quantity || 1), 0);
            setCartCount(total);
        };

        const checkUser = () => {
            const storedUser = localStorage.getItem("marvinno_user");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (e) {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        };

        updateCount();
        checkUser();

        window.addEventListener("cartUpdated", updateCount);
        window.addEventListener("userStateUpdated", checkUser);
        return () => {
            window.removeEventListener("cartUpdated", updateCount);
            window.removeEventListener("userStateUpdated", checkUser);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("marvinno_user");
        setUser(null);
        window.dispatchEvent(new Event("userStateUpdated"));
        navigate("/");
    };

    return (
        <div className="navbar-master">
            <div className="navbar-name-login-signup">
                <div className="navbar-left-spacer" />
                <div className="navbarLogoAlignCenterCss">
                    <Link to="/">
                        <img
                            className="navBarLogoImageHeight"
                            src={navbarLogo}
                            alt="Marvinno LOGO"
                        />
                    </Link>
                </div>
                <div className="navbar-actions-group">
                    <Link to="/cart" className="navbar-cart-btn" aria-label="Cart">
                        <FaShoppingCart className="cart-icon" />
                        <span className="cart-text">Cart</span>
                        {cartCount > 0 && (
                            <span className="cart-badge-count">{cartCount}</span>
                        )}
                    </Link>

                    {user ? (
                        <div className="navbar-user-profile-badge" style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            padding: "0.35rem 0.8rem",
                            borderRadius: "4rem",
                            background: "#10b98118",
                            border: "1px solid #10b98150"
                        }}>
                            <FaUserCheck style={{ color: "#10b981", fontSize: "0.95rem" }} />
                            <span style={{ fontWeight: "700", color: "#059669", fontSize: "0.88rem" }}>
                                {user.name || user.email?.split("@")[0]}
                            </span>
                            <button
                                onClick={handleLogout}
                                title="Log Out"
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#ef4444",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0 0.2rem",
                                    fontSize: "0.95rem"
                                }}
                            >
                                <FaSignOutAlt />
                            </button>
                        </div>
                    ) : (
                        <div className="navbar-Login-Signup">
                            <Link
                                className="registration-link signup-link"
                                to="/signup"
                                alt="Sign Up"
                            >
                                SignUp
                            </Link>
                            <Link
                                className="registration-link login-link"
                                to="/login"
                                alt="Login"
                            >
                                Login
                            </Link>
                        </div>
                    )}
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
    );
}
