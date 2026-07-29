import axios from "axios";

// Base API configuration: default to local backend in DEV mode, or live Render API in production
const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.DEV
        ? "http://localhost:5000/api"
        : "https://marvinno-api.onrender.com/api");

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor to attach JWT token to all authorized requests
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("marvinno_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const ApiService = {
    // Auth endpoints
    login: async (credentials) => {
        const response = await apiClient.post("/auth/login", credentials);
        return response.data;
    },

    signUp: async (userData) => {
        const response = await apiClient.post("/auth/signup", userData);
        return response.data;
    },

    getProfile: async () => {
        const response = await apiClient.get("/auth/me");
        return response.data;
    },

    // Inquiry & Contact endpoint
    submitContactInquiry: async (inquiryData) => {
        const response = await apiClient.post("/contact", inquiryData);
        return response.data;
    },

    // Manual Payment Processing endpoint (Walk-in / local purchases)
    processPayment: async (paymentDetails) => {
        const response = await apiClient.post("/payments/manual", paymentDetails);
        return response.data;
    },

    // Products
    getProducts: async () => {
        const response = await apiClient.get("/products");
        return response.data;
    },

    // Cart Sync
    getCart: async () => {
        const response = await apiClient.get("/cart");
        return response.data;
    },

    syncCartItem: async (cartItem) => {
        const response = await apiClient.post("/cart", cartItem);
        return response.data;
    },

    // Coupons
    validateCoupon: async (code) => {
        const response = await apiClient.post("/coupons/validate", { code });
        return response.data;
    },

    // Orders
    createOrder: async (orderData) => {
        const response = await apiClient.post("/orders", orderData);
        return response.data;
    },
};

export default ApiService;
