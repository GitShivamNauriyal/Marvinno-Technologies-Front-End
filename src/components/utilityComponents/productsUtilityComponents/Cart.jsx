import React, { useState } from "react";
import "../../css/productsCss/cart.css";
import NonRespNavbar from "../commonUtilities/nonRespNavbar";

const Cart = () => {
    // Example cart items
    const [cartItems, setCartItems] = useState([
    ]);

    // Function to remove an item
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div>
            <NonRespNavbar/>
            <h1>Your Cart</h1>
            <div className="cart-container">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
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
    );
};

export default Cart;
