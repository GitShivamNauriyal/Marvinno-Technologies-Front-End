import React, { useState, useEffect } from "react";
import CartService from "../../../services/cartService";
import "../../css/productsCss/cart.css";
import NonRespNavbar from "../commonUtilities/nonRespNavbar";
import Footer from "../commonUtilities/footer";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(CartService.getCart());

        const handleCartUpdate = () => {
            setCartItems(CartService.getCart());
        };

        window.addEventListener("cartUpdated", handleCartUpdate);
        return () => window.removeEventListener("cartUpdated", handleCartUpdate);
    }, []);

    const removeItem = (productId) => {
        const updated = CartService.removeFromCart(productId);
        setCartItems(updated);
    };

    const handleClearCart = () => {
        CartService.clearCart();
        setCartItems([]);
    };

    return (
        <div>
            <NonRespNavbar />
            <div className="cart-master" style={{ marginTop: "7rem", padding: "3rem 1.5rem", minHeight: "70vh" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                        <h1 style={{ fontSize: "2.2rem", fontWeight: "700" }}>Your Shopping Cart</h1>
                        {cartItems.length > 0 && (
                            <button
                                onClick={handleClearCart}
                                style={{
                                    padding: "0.5rem 1rem",
                                    borderRadius: "0.5rem",
                                    border: "1px solid #cbd5e1",
                                    background: "#f8fafc",
                                    cursor: "pointer",
                                }}
                            >
                                Clear Cart
                            </button>
                        )}
                    </div>

                    <div className="cart-container">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.id} className="cart-item" style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "1.5rem",
                                    marginBottom: "1rem",
                                    borderRadius: "1rem",
                                    background: "#ffffff",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                                    border: "1px solid #e2e8f0"
                                }}>
                                    <div>
                                        <h2 style={{ fontSize: "1.3rem", fontWeight: "600", margin: "0 0 0.4rem 0" }}>{item.name}</h2>
                                        <p style={{ margin: "0 0 0.2rem 0", color: "#64748b" }}>Price: {item.price}</p>
                                        <p style={{ margin: 0, fontWeight: "500" }}>Quantity: {item.quantity}</p>
                                    </div>
                                    <button
                                        className="delete-cart-item-button"
                                        onClick={() => removeItem(item.id)}
                                        style={{
                                            padding: "0.6rem 1.2rem",
                                            background: "#ef4444",
                                            color: "#ffffff",
                                            border: "none",
                                            borderRadius: "0.6rem",
                                            fontWeight: "600",
                                            cursor: "pointer"
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div style={{ textAlign: "center", padding: "4rem 2rem", background: "#f8fafc", borderRadius: "1rem" }}>
                                <p style={{ fontSize: "1.2rem", color: "#64748b" }}>Your shopping cart is empty.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
