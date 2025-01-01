import React, { useState } from "react"; // ✌️ Importing React and useState hook for state management
import "../../css/commonComponentsCss/SignUpPage.css"; // ✌️ Importing CSS for styling
import navbarLogo from "../../images/navbarLogoBlackText.png"; // ✌️ Importing logo image
import homeNavbarIcon from "../../images/homeIconNavbar.png"; // ✌️ Importing home icon image

const SignUpPage = () => {
    const [name, setName] = useState(""); // ✌️ State for managing name input
    const [email, setEmail] = useState(""); // ✌️ State for managing email input
    const [phone, setPhone] = useState(""); // ✌️ State for managing phone input
    const [password, setPassword] = useState(""); // ✌️ State for managing password input
    const [confirmPassword, setConfirmPassword] = useState(""); // ✌️ State for managing confirm password input
    const [address, setAddress] = useState(""); // ✌️ State for managing address input

    const handleSignUp = (e) => {
        e.preventDefault(); // 😲 Prevents default form submission behavior
        // 💀 Handle sign-up logic here (currently just logs user input)
        console.log("Signing up with", {
            name,
            email,
            phone,
            password,
            confirmPassword,
            address,
        }); // 😊 Debugging/logging user input
    };

    return (
        <div className="signup-page">
            {/* ✌️ Container for the sign-up page */}
            <div className="signup-container">
                {/* ✌️ Main container for sign-up form */}
                <img
                    className="signup-container-logo"
                    src={navbarLogo}
                    alt="Marvinno LOGO" // 😲 Accessibility for the logo image
                />
                <h2>Create Your Account</h2>{" "}
                {/* ✌️ Heading for the sign-up page */}
                <form onSubmit={handleSignUp} className="signup-form">
                    {/* 🤔 Form submission triggers handleSignUp */}
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>{" "}
                        {/* ✌️ Input label for accessibility */}
                        <input
                            type="text" // ✌️ Ensures input is text formatted
                            id="name" // ✌️ Links input with its label
                            value={name} // ✌️ Controlled input bound to name state
                            onChange={(e) => setName(e.target.value)} // ✌️ Updates name state on user input
                            required // 😲 Makes this field mandatory
                            className="form-input"
                            placeholder="Enter your full name" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>{" "}
                        {/* ✌️ Input label for accessibility */}
                        <input
                            type="email" // ✌️ Ensures input is email formatted
                            id="email"
                            value={email} // ✌️ Controlled input bound to email state
                            onChange={(e) => setEmail(e.target.value)} // ✌️ Updates email state on user input
                            required // 😲 Makes this field mandatory
                            className="form-input"
                            placeholder="Enter your email" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>{" "}
                        {/* ✌️ Input label for accessibility */}
                        <input
                            type="tel" // ✌️ Ensures input is phone number formatted
                            id="phone"
                            value={phone} // ✌️ Controlled input bound to phone state
                            onChange={(e) => setPhone(e.target.value)} // ✌️ Updates phone state on user input
                            required // 😲 Makes this field mandatory
                            className="form-input"
                            placeholder="Enter your phone number" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>{" "}
                        {/* ✌️ Input label for password */}
                        <input
                            type="password" // ✌️ Masks input for privacy
                            id="password"
                            value={password} // ✌️ Controlled input bound to password state
                            onChange={(e) => setPassword(e.target.value)} // ✌️ Updates password state on user input
                            required // 😲 Makes this field mandatory
                            className="form-input"
                            placeholder="Enter your password" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        {/* ✌️ Input label for confirm password */}
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword} // ✌️ Controlled input bound to confirmPassword state
                            onChange={(e) => setConfirmPassword(e.target.value)} // ✌️ Updates confirmPassword state on user input
                            required // 😲 Makes this field mandatory
                            className="form-input"
                            placeholder="Confirm your password" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address (Optional)</label>{" "}
                        {/* ✌️ Input label for optional address */}
                        <input
                            type="text"
                            id="address"
                            value={address} // ✌️ Controlled input bound to address state
                            onChange={(e) => setAddress(e.target.value)} // ✌️ Updates address state on user input
                            className="form-input"
                            placeholder="Enter your address" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        {/* ✌️ Submits the form */}
                        Sign Up
                    </button>
                </form>
                <div className="signup-options">
                    {/* ✌️ Additional links for navigation */}
                    <p>
                        Already have an account? <a href="/login">Login here</a>{" "}
                        {/* 😊 Link to login page */}
                    </p>
                </div>
                <a href="/" className="home-link">
                    {/* ✌️ Link back to homepage */}
                    <img
                        className="homeLogoNavbar"
                        src={homeNavbarIcon}
                        alt="Home" // 😲 Accessibility for the home icon
                    />
                </a>
            </div>
        </div>
    );
};

export default SignUpPage; // 🗿✌️ Exports the component for use in other files
