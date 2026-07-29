import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartService from "../../../services/cartService";
import ApiService from "../../../services/apiService";
import NonRespNavbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";
import "../../css/productsCss/cart.css";
import { FaTrash, FaShoppingBag, FaShieldAlt, FaTruck, FaLock, FaUserLock, FaTag } from "react-icons/fa";

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    // Coupon State
    const [couponCode, setCouponCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    const [couponMsg, setCouponMsg] = useState("");

    // Delivery Address Form State
    const [shippingDetails, setShippingDetails] = useState({
        receiverName: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        state: "Uttarakhand",
    });

    useEffect(() => {
        // Load cart
        setCartItems(CartService.getCart());

        // Check logged-in user state
        const storedUser = localStorage.getItem("marvinno_user");
        if (storedUser) {
            try {
                const parsed = JSON.parse(storedUser);
                setUser(parsed);
                setShippingDetails((prev) => ({
                    ...prev,
                    receiverName: parsed.name || parsed.email || "",
                }));
            } catch (e) {
                console.error("Failed to parse user session", e);
            }
        }

        const handleCartUpdate = () => {
            setCartItems(CartService.getCart());
        };

        window.addEventListener("cartUpdated", handleCartUpdate);
        return () => window.removeEventListener("cartUpdated", handleCartUpdate);
    }, []);

    // Calculate Pricing
    const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        const num = String(priceStr).replace(/[^\d.]/g, "");
        return parseFloat(num) || 0;
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + parsePrice(item.price) * (item.quantity || 1),
        0
    );
    const discountAmount = (subtotal * discountPercent) / 100;
    const grandTotal = Math.max(0, subtotal - discountAmount);

    // Quantity updates
    const handleQtyChange = (productId, delta) => {
        const item = cartItems.find((i) => i.id === productId);
        if (!item) return;
        const newQty = (item.quantity || 1) + delta;
        if (newQty <= 0) {
            CartService.removeFromCart(productId);
        } else {
            CartService.addToCart(item, delta);
        }
        setCartItems(CartService.getCart());
    };

    const handleRemoveItem = (productId) => {
        CartService.removeFromCart(productId);
        setCartItems(CartService.getCart());
    };

    const handleApplyCoupon = () => {
        if (couponCode.trim().toUpperCase() === "MARVINNO2026") {
            setDiscountPercent(10);
            setCouponMsg("✓ 10% Discount Applied Successfully!");
        } else if (couponCode.trim()) {
            setCouponMsg("❌ Invalid Coupon Code.");
            setDiscountPercent(0);
        }
    };

    // Proceed Handler
    const handleProceedToCheckout = () => {
        if (!user) {
            setShowAuthModal(true);
        } else {
            setShowCheckoutForm(true);
        }
    };

    // Address Change
    const handleInputChange = (e) => {
        setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
    };

    // Razorpay Integration Ready Function
    const handleRazorpayPayment = async (e) => {
        e.preventDefault();

        if (!shippingDetails.receiverName || !shippingDetails.phone || !shippingDetails.address) {
            alert("Please fill in all required shipping address fields.");
            return;
        }

        const orderData = {
            userId: user?.id || "guest",
            customerName: shippingDetails.receiverName,
            phone: shippingDetails.phone,
            address: `${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.state} - ${shippingDetails.pincode}`,
            items: cartItems,
            totalAmount: grandTotal,
            currency: "INR",
        };

        // If Razorpay SDK is loaded
        if (window.Razorpay) {
            const options = {
                key: "rzp_test_MARVINNO2026_KEY", // Replace with production key
                amount: grandTotal * 100, // Amount in paise
                currency: "INR",
                name: "Marvinno Technologies",
                description: "Smart Home Automation Order",
                image: "/assets/tbi_logo-Cb_VHawd.jpg",
                handler: async function (response) {
                    alert(`Payment Successful! Razorpay Payment ID: ${response.razorpay_payment_id}`);
                    await ApiService.post("/orders", { ...orderData, paymentId: response.razorpay_payment_id });
                    CartService.clearCart();
                    setCartItems([]);
                    setShowCheckoutForm(false);
                },
                prefill: {
                    name: shippingDetails.receiverName,
                    contact: shippingDetails.phone,
                    email: user?.email || "",
                },
                theme: { color: "#10b981" },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            // Simulated Payment Handler for development / offline testing
            console.log("[Razorpay Ready Handler Payload]", orderData);
            alert(`Razorpay SDK Template Triggered!\n\nOrder Total: ₹${grandTotal.toLocaleString("en-IN")}\nReceiver: ${shippingDetails.receiverName}\nShipping Address: ${shippingDetails.address}`);

            try {
                await ApiService.createOrder(orderData);
            } catch (err) {
                console.log("Mock API order log saved local");
            }

            CartService.clearCart();
            setCartItems([]);
            setShowCheckoutForm(false);
            alert("Thank you! Your order has been placed successfully.");
        }
    };

    return (
        <div className="cart-page-master">
            <NonRespNavbar />

            <div className="cart-dark-canvas">
                <div className="cart-max-container">
                    <div className="cart-header-title-bar">
                        <h1>Your Shopping Cart</h1>
                        <span className="cart-count-badge-head">{cartItems.length} Item(s)</span>
                    </div>

                    {cartItems.length > 0 ? (
                        <div className="cart-content-grid">
                            {/* LEFT COLUMN: Items List / Checkout Form */}
                            <div className="cart-items-section">
                                {!showCheckoutForm ? (
                                    <>
                                        <div className="cart-items-card-list">
                                            {cartItems.map((item) => {
                                                const unitPrice = parsePrice(item.price);
                                                const itemTotal = unitPrice * (item.quantity || 1);
                                                return (
                                                    <div key={item.id} className="cart-item-row">
                                                        <div className="item-img-box">
                                                            <img src={item.img} alt={item.name} />
                                                        </div>

                                                        <div className="item-details-col">
                                                            <h3>{item.name}</h3>
                                                            <p className="item-price-unit">Unit Price: ₹{unitPrice.toLocaleString("en-IN")}</p>
                                                        </div>

                                                        <div className="item-qty-controls">
                                                            <button onClick={() => handleQtyChange(item.id, -1)}>-</button>
                                                            <span>{item.quantity || 1}</span>
                                                            <button onClick={() => handleQtyChange(item.id, 1)}>+</button>
                                                        </div>

                                                        <div className="item-total-col">
                                                            <span className="item-subtotal-val">₹{itemTotal.toLocaleString("en-IN")}</span>
                                                            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)} title="Remove Item">
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="cart-guarantee-bar">
                                            <div><FaShieldAlt className="g-icon" /> 1 Year Warranty</div>
                                            <div><FaTruck className="g-icon" /> Free Express Delivery</div>
                                            <div><FaLock className="g-icon" /> 256-bit Secure Checkout</div>
                                        </div>
                                    </>
                                ) : (
                                    /* ADDRESS & CHECKOUT FORM */
                                    <div className="checkout-address-form-card">
                                        <div className="form-header-title">
                                            <h2>Shipping & Delivery Details</h2>
                                            <button className="back-to-cart-btn" onClick={() => setShowCheckoutForm(false)}>
                                                &larr; Back to Cart
                                            </button>
                                        </div>

                                        <form onSubmit={handleRazorpayPayment} className="shipping-form-grid">
                                            <div className="form-group full-width">
                                                <label>Receiver's Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="receiverName"
                                                    value={shippingDetails.receiverName}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter recipient's name"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group full-width">
                                                <label>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={shippingDetails.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="10-digit mobile number"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group full-width">
                                                <label>Complete Street Address *</label>
                                                <textarea
                                                    name="address"
                                                    rows="3"
                                                    value={shippingDetails.address}
                                                    onChange={handleInputChange}
                                                    placeholder="House/Flat No., Building, Street Area"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>City / District *</label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={shippingDetails.city}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g. Indore, New Delhi"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>Pincode *</label>
                                                <input
                                                    type="text"
                                                    name="pincode"
                                                    value={shippingDetails.pincode}
                                                    onChange={handleInputChange}
                                                    placeholder="6-digit Pincode"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group full-width">
                                                <label>State *</label>
                                                <input
                                                    type="text"
                                                    name="state"
                                                    value={shippingDetails.state}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <button type="submit" className="razorpay-pay-btn">
                                                Proceed to Pay ₹{grandTotal.toLocaleString("en-IN")} (Razorpay)
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>

                            {/* RIGHT COLUMN: Order Summary & Coupon */}
                            <div className="cart-summary-sidebar">
                                <div className="summary-card">
                                    <h3>Order Summary</h3>

                                    <div className="summary-row">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toLocaleString("en-IN")}</span>
                                    </div>

                                    {discountAmount > 0 && (
                                        <div className="summary-row discount-row">
                                            <span>Discount ({discountPercent}%)</span>
                                            <span>- ₹{discountAmount.toLocaleString("en-IN")}</span>
                                        </div>
                                    )}

                                    <div className="summary-row">
                                        <span>Estimated Shipping</span>
                                        <span className="free-tag">FREE</span>
                                    </div>

                                    <div className="summary-divider" />

                                    <div className="summary-row total-row">
                                        <span>Total Amount</span>
                                        <span>₹{grandTotal.toLocaleString("en-IN")}</span>
                                    </div>

                                    {/* Coupon Input */}
                                    <div className="coupon-box-wrapper">
                                        <label><FaTag /> Discount Coupon</label>
                                        <div className="coupon-input-group">
                                            <input
                                                type="text"
                                                placeholder="e.g. MARVINNO2026"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                            />
                                            <button onClick={handleApplyCoupon}>Apply</button>
                                        </div>
                                        {couponMsg && <p className="coupon-msg">{couponMsg}</p>}
                                    </div>

                                    {!showCheckoutForm && (
                                        <button className="checkout-main-cta" onClick={handleProceedToCheckout}>
                                            Proceed to Checkout &rarr;
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="cart-empty-card">
                            <FaShoppingBag className="empty-bag-icon" />
                            <h2>Your Shopping Cart is Empty</h2>
                            <p>Discover our smart 2026 automation touch modules and transform your home.</p>
                            <Link to="/products" className="explore-products-btn">Explore Products</Link>
                        </div>
                    )}
                </div>
            </div>

            {/* AUTH REQUIRED MODAL */}
            {showAuthModal && (
                <div className="auth-modal-overlay">
                    <div className="auth-modal-card">
                        <FaUserLock className="auth-modal-icon" />
                        <h2>Login Required</h2>
                        <p>Please log in or create a Marvinno account to complete your checkout and track your order.</p>

                        <div className="auth-modal-actions">
                            <button className="auth-login-btn" onClick={() => navigate("/login")}>
                                Log In
                            </button>
                            <button className="auth-signup-btn" onClick={() => navigate("/signup")}>
                                Sign Up
                            </button>
                        </div>

                        <button className="close-auth-modal" onClick={() => setShowAuthModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
