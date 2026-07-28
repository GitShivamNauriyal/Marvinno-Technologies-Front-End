import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/commonComponentsCss/LogInPage.css";
import navbarLogo from "../../images/navbarLogoBlackText.png";
import homeNavbarIcon from "../../images/homeIconNavbar.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <img
                    className="login-container-logo"
                    src={navbarLogo}
                    alt="Marvinno LOGO"
                />
                <h2>Login to Your Account</h2>
                <div className="error">
                    Login functionality is temporarily disabled
                </div>
                <form onSubmit={handleLogin} className="login-form">
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
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="login-options">
                    <p>
                        Don't have an account? <Link to="/signup">SignUp here</Link>
                    </p>
                    <p>
                        <a href="/forgot-password">Forgot your password?</a>
                    </p>
                </div>
                <Link to="/" className="home-link">
                    <img
                        className="homeLogoNavbar"
                        src={homeNavbarIcon}
                        alt="Home"
                    />
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
