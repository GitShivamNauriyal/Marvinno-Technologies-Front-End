# Marvinno Technologies — E-Commerce Monorepo 🚀

Official full-stack monorepo web application for **Marvinno Technologies Pvt. Ltd.** (Smart Switch & Home Automation Platform), featuring a React + Vite frontend and a Node.js + Express + MongoDB REST API backend.

## 🌐 Live Website

- **Frontend**: [marvinno.in](https://marvinno.in) (Deploys via Netlify)
- **Backend API**: Node.js + Express REST API (Deploys via Render.com)
- **Database**: MongoDB Atlas Cloud Database

---

## 🛠️ Architecture & Tech Stack

### Monorepo Layout
```plaintext
marvinno-technologies/
├── frontend/           # React 19 + Vite Frontend Application (Netlify)
└── backend/            # Express.js + MongoDB Mongoose REST API (Render.com)
```

### Frontend Stack (`/frontend`)
- **Core**: [React 19](https://react.dev/), [React Router v7](https://reactrouter.com/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Custom CSS, [Tailwind CSS v4](https://tailwindcss.com/), PostCSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [AOS](https://michalsnik.github.io/aos/)
- **State & Service**: Axios API Service, local persistent cart, JWT token session management

### Backend Stack (`/backend`)
- **Runtime & Server**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database & ODM**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), [Mongoose](https://mongoosejs.com/)
- **Security & Auth**: JWT (JSON Web Tokens), `bcryptjs` password hashing, `express-rate-limit`, CORS whitelist
- **Integrations**: Nodemailer (Email notifications), Razorpay SDK ready

---

## ⚡ API Services Overview

The backend exposes 9 full-stack domain controllers:

| Domain | Endpoints | Description |
| :--- | :--- | :--- |
| **Auth** | `/api/auth` | User registration (`signup`), login, JWT verification, and user profile updates |
| **Products** | `/api/products` | Smart switch product catalog (`Module S`, `Module X`, `Module Y`, `Module Z`, etc.) |
| **Cart** | `/api/cart` | User cart synchronization across sessions |
| **Coupons** | `/api/coupons` | Promo code validation (e.g. `MARVINNO2026` 10% launch discount) |
| **Orders** | `/api/orders` | Checkout, order creation, and delivery tracking |
| **Payments** | `/api/payments` | Manual walk-in sale logger & Razorpay order verification |
| **Contact** | `/api/contact` | Customer inquiries and career application forms |
| **Reviews** | `/api/reviews` | Customer ratings, reviews, and admin approval moderation |
| **Admin** | `/api/admin` | Analytics dashboard (total users, total orders, sales revenue, inquiries) |

---

## 🚀 Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher) & `npm`
- MongoDB Atlas account (or local MongoDB)

### 2. Environment Configuration
Create a `.env` file inside the `backend/` directory:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.XXXXX.mongodb.net/marvinno?retryWrites=true&w=majority
JWT_SECRET=marvinno_dev_secret_2026
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

### 3. Running the Backend
```bash
cd backend
npm start
```
*Output: `🚀 Marvinno API running on port 5000` & `✅ MongoDB Connected`*

### 4. Running the Frontend
In a new terminal:
```bash
cd frontend
npm run dev
```
*Access the app locally at `http://localhost:5173`*

---

## 🧪 Automated Testing

To run the automated pre-flight backend test suite:
```bash
cd backend
node src/scripts/fastTestSuite.js
```
*Validates 22/22 endpoints including auth, cart, orders, coupons, contact form, reviews, and admin analytics.*

---

## 📜 Available Scripts

### Frontend (`/frontend`)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs frontend Vite dev server at `http://localhost:5173` |
| `npm run build` | Builds optimized production bundle in `frontend/dist` |
| `npm run preview` | Previews production build locally |

### Backend (`/backend`)
| Command | Description |
| :--- | :--- |
| `npm start` | Launches Express server connected to MongoDB |
| `npm run dev` | Runs Express server with auto-restart (`nodemon`) |
| `node src/scripts/seed.js` | Seeds initial launch data (e.g. `MARVINNO2026` coupon) |

---

## 👨‍💻 Author & Maintainer

- **Shivam Nauriyal**
- **LinkedIn**: [Shivam Nauriyal](https://www.linkedin.com/in/shivam-nauriyal-506329285/)
- **X (Twitter)**: [@shivam_nauriyal](https://x.com/shivam_nauriyal)
- **Official Site**: [marvinno.in](https://marvinno.in)

---

## 📩 Support & Contact

For technical questions or business inquiries, contact **info@marvinno.in** or **shivamnauriyal1224@gmail.com**.
