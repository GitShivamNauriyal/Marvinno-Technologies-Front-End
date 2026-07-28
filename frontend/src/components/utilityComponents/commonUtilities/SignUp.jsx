import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../../../services/apiService";
import "../../css/commonComponentsCss/SignUpPage.css";
import navbarLogo from "../../images/navbarLogoBlackText.png";
import homeNavbarIcon from "../../images/homeIconNavbar.png";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const res = await ApiService.signUp({ name, email, phone, password, address });
            setLoading(false);

            if (res.success && res.token) {
                localStorage.setItem("marvinno_token", res.token);
                localStorage.setItem("marvinno_user", JSON.stringify(res.user));
                window.dispatchEvent(new Event("userStateUpdated"));
                navigate("/products");
            } else {
                setErrorMsg(res.message || "Registration failed.");
            }
        } catch (err) {
            setLoading(false);
            const msg = err.response?.data?.message || "Cannot connect to server. Ensure backend is running.";
            setErrorMsg(msg);
        }
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

                {errorMsg && (
                    <div className="signup-error-alert" style={{
                        padding: "0.75rem",
                        marginBottom: "1rem",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgba(239, 68, 68, 0.15)",
                        border: "1px solid #ef4444",
                        color: "#ef4444",
                        fontSize: "0.9rem",
                        textAlign: "center"
                    }}>
                        {errorMsg}
                    </div>
                )}

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
                    <button type="submit" className="signup-button" disabled={loading}>
                        {loading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>
                <div className="signup-options">
                    <p>
                        Already have an account? <Link to="/login">Login here</Link>
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

export default SignUpPage;
