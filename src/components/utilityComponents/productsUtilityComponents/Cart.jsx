import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../../css/productsCss/cart.css";
import NonRespNavbar from "../commonUtilities/nonRespNavbar";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items on component mount
    useEffect(() => {
        const cart = JSON.parse(Cookies.get("cart") || JSON.stringify(new Array(12).fill(null)));
        setCartItems(cart.filter((item) => item !== null)); // Filter out null entries
    }, []);

    // Function to remove an item
    const removeItem = (index) => {
        const cart = JSON.parse(Cookies.get("cart") || JSON.stringify(new Array(12).fill(null)));
        cart[index] = null; // Set the specific index to null
        Cookies.set("cart", JSON.stringify(cart)); // Update cookies
        setCartItems(cart.filter((item) => item !== null)); // Update state
    };

    return (
        <div>
            <NonRespNavbar />
            <div className="cart-master">
                <h1>Your Cart</h1>
                <div className="cart-container">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
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
