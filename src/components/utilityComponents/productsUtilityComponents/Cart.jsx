import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../../css/productsCss/cart.css";
import NonRespNavbar from "../commonUtilities/nonRespNavbar";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(Cookies.get("cart") || "[]");
        setCartItems(cart);
    }, []);

    const removeItem = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        Cookies.set("cart", JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    return (
        <div>
            <NonRespNavbar />
            <div className="cart-master">
                <h1>Your Cart</h1>
                <div className="cart-container">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <h2>{item.name}</h2>
                                <p>Price: ₹{item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button
                                    className="delete-cart-item-button"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
