import React, { useState } from "react";
import "../../css/commonComponentsCss/SignUpPage.css";
import navbarLogo from "../../images/navbarLogoBlackText.png";
import homeNavbarIcon from "../../images/homeIconNavbar.png";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log("Signing up with", {
            name,
            email,
            phone,
            password,
            confirmPassword,
            address,
        });
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <img
                    className="signup-container-logo"
                    src={navbarLogo}
                    alt="Marvinno LOGO"
                />
                <h2>Create Your Account</h2>
                <form onSubmit={handleSignUp} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address (Optional)</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-input"
                            placeholder="Enter your address"
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>
                <div className="signup-options">
                    <p>
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                </div>
                <a href="/" className="home-link">
                    <img
                        className="homeLogoNavbar"
                        src={homeNavbarIcon}
                        alt="Home"
                    />
                </a>
            </div>
        </div>
    );
};

export default SignUpPage;
