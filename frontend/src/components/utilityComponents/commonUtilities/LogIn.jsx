import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../../../services/apiService";
import "../../css/commonComponentsCss/LogInPage.css";
import navbarLogo from "../../images/navbarLogoBlackText.png";
import homeNavbarIcon from "../../images/homeIconNavbar.png";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        try {
            const res = await ApiService.login({ email, password });
            setLoading(false);
            if (res.success && res.token) {
                localStorage.setItem("marvinno_token", res.token);
                localStorage.setItem("marvinno_user", JSON.stringify(res.user));
                window.dispatchEvent(new Event("userStateUpdated"));
                navigate("/products");
            } else {
                setErrorMsg(res.message || "Login failed. Please check your credentials.");
            }
        } catch (err) {
            setLoading(false);
            const msg = err.response?.data?.message || "Cannot connect to server. Ensure backend is running.";
            setErrorMsg(msg);
        }
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

                {errorMsg && (
                    <div className="login-error-alert" style={{
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
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
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
