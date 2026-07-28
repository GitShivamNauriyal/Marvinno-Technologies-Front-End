import Cookies from "js-cookie";

const CART_KEY = "marvinno_cart";

/**
 * Cart Service for managing local cart state with Cookie and LocalStorage persistence.
 * Ready for sync with backend DB once API endpoints are available.
 */
export const CartService = {
    getCart: () => {
        try {
            const cookieData = Cookies.get(CART_KEY) || Cookies.get("cart");
            if (cookieData) {
                const parsed = JSON.parse(cookieData);
                if (Array.isArray(parsed)) {
                    return parsed.filter(Boolean);
                }
            }
            const localData = localStorage.getItem(CART_KEY);
            if (localData) {
                return JSON.parse(localData);
            }
        } catch (error) {
            console.error("Error reading cart:", error);
        }
        return [];
    },

    saveCart: (cartItems) => {
        try {
            const cleanCart = Array.isArray(cartItems) ? cartItems.filter(Boolean) : [];
            const jsonString = JSON.stringify(cleanCart);
            Cookies.set(CART_KEY, jsonString, { expires: 30 });
            Cookies.set("cart", jsonString, { expires: 30 });
            localStorage.setItem(CART_KEY, jsonString);
            window.dispatchEvent(new Event("cartUpdated"));
            return true;
        } catch (error) {
            console.error("Error saving cart:", error);
            return false;
        }
    },

    addToCart: (product, quantity = 1) => {
        const currentCart = CartService.getCart();
        const existingIndex = currentCart.findIndex((item) => item.id === product.id);

        if (existingIndex > -1) {
            currentCart[existingIndex].quantity += quantity;
        } else {
            currentCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img || product.img1,
                quantity: quantity,
            });
        }

        CartService.saveCart(currentCart);
        return currentCart;
    },

    removeFromCart: (productId) => {
        const currentCart = CartService.getCart();
        const updatedCart = currentCart.filter((item) => item.id !== productId);
        CartService.saveCart(updatedCart);
        return updatedCart;
    },

    updateQuantity: (productId, newQuantity) => {
        const currentCart = CartService.getCart();
        const target = currentCart.find((item) => item.id === productId);
        if (target) {
            if (newQuantity <= 0) {
                return CartService.removeFromCart(productId);
            }
            target.quantity = newQuantity;
            CartService.saveCart(currentCart);
        }
        return currentCart;
    },

    clearCart: () => {
        Cookies.remove(CART_KEY);
        Cookies.remove("cart");
        localStorage.removeItem(CART_KEY);
        window.dispatchEvent(new Event("cartUpdated"));
        return [];
    },
};

export default CartService;
