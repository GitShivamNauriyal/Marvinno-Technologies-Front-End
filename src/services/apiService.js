import axios from "axios";

// Base API configuration prepared for backend deployment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.marvinno.in/v1";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const ApiService = {
    // Auth endpoints
    login: async (credentials) => {
        // Mock fallback for current frontend mode; easy to switch to API request
        console.log("[API Service] Auth login requested:", credentials);
        return { success: true, message: "Login endpoint ready for DB integration" };
    },

    signUp: async (userData) => {
        console.log("[API Service] Auth signup requested:", userData);
        return { success: true, message: "Signup endpoint ready for DB integration" };
    },

    // Inquiry & Contact endpoint
    submitContactInquiry: async (inquiryData) => {
        console.log("[API Service] Contact inquiry submitted:", inquiryData);
        return { success: true, message: "Inquiry received" };
    },

    // Payment Processing endpoint
    processPayment: async (paymentDetails) => {
        console.log("[API Service] Payment submitted:", paymentDetails);
        return { success: true, message: "Payment processed" };
    },
};

export default ApiService;
