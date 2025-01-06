import React, { useState } from "react"; // ✌️ Importing React and useState hook for state management
import "../../css/commonComponentsCss/LogInPage.css"; // ✌️ Importing CSS for styling
import navbarLogo from "../../images/navbarLogoBlackText.png"; // ✌️ Importing logo image
import homeNavbarIcon from "../../images/homeIconNavbar.png"; // ✌️ Importing home icon image

const LoginPage = () => {
    const [email, setEmail] = useState(""); // ✌️ State for managing email input
    const [password, setPassword] = useState(""); // ✌️ State for managing password input

    const handleLogin = (e) => {
        e.preventDefault(); // 😲 Prevents default form submission behavior
        // 💀 Handle login logic here (currently just logs credentials)
        console.log("Logging in with", email, password); // 😊 Debugging/logging user input(🚩🚩🚩🚩NOT for production)
    };

    return (
        <div className="login-page">
            {/* ✌️ Container for the login page */}
            <div className="login-container">
                {/* ✌️ Main container for login form */}
                <img
                    className="login-container-logo"
                    src={navbarLogo}
                    alt="Marvinno LOGO" // 😲 Important for accessibility and SEO
                />
                <h2>Login to Your Account</h2>{" "}
                <div className="error">
                    Login functionality is temporarily disabled
                </div>
                {/* ✌️ Heading for the login page */}
                <form onSubmit={handleLogin} className="login-form">
                    {/* 🤔 Form submission triggers handleLogin */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>{" "}
                        {/* ✌️ Input label for accessibility */}
                        <input
                            type="email" // ✌️ Ensures input is email formatted
                            id="email" // ✌️ Links input with its label
                            value={email} // ✌️ Controlled input bound to email state
                            onChange={(e) => setEmail(e.target.value)} // ✌️ Updates email state on user input
                            required // 😲 Makes this field mandatory
                            className="form-input"
                            placeholder="Enter your email" // 😘 Placeholder text for guidance
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>{" "}
                        {/* ✌️ Input label for accessibility */}
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
                    <button type="submit" className="login-button">
                        {/* ✌️ Triggers form submission */}
                        Login
                    </button>
                </form>
                <div className="login-options">
                    {/* ✌️ Additional links for navigation */}
                    <p>
                        Don't have an account? <a href="/signup">SignUp here</a>
                        {/* 😊 Link to signup page */}
                    </p>
                    <p>
                        <a href="/forgot-password">Forgot your password?</a>
                        {/* 😊 Link to password recovery */}
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

export default LoginPage; // 🗿✌️ Exports the component for use in other files
