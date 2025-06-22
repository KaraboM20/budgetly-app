# 💸 Budgetly – Personal Finance Tracker App

Budgetly is a full-stack web application built to help users track their income, expenses, and financial goals in a clean, responsive dashboard. Built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, and styled using Tailwind and modern UI practices.

---

## 🚀 Live Demo

- **Frontend (Netlify):**
- **Backend (Render):** 

---

## 🔧 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Recharts, Axios
- **Backend:** Node.js, Express.js, MongoDB Atlas
- **State Management:** Redux (for goals and global state)
- **Authentication:** JWT + bcrypt
- **Deployment:** Render (backend), Netlify (frontend)

---

## 📦 Features

- 📈 Track income and expenses with detailed graphs
- 🧮 Dynamic bar/line charts powered by Recharts
- ➕ delete income/expense transactions
- 🎯 Set and manage financial goals
- 🔐 Secure login/register with JWT auth
- ⚙️ Responsive UI and mobile-friendly design
- 🗃️ Mock fallback data via `defaultDashboardData` for demo/testing

---

## 🧪 API Endpoints

| Route | Method | Description |
|-------|--------|-------------|
| `/api/v1/auth/register` | POST | Register new user |
| `/api/v1/auth/login`    | POST | Login user |
| `/api/v1/income`        | GET/POST/DELETE | CRUD income data |
| `/api/v1/expense`       | GET/POST/DELETE | CRUD expense data |
| `/api/v1/goal`          | GET/POST/DELETE | CRUD goal data |

---

- **You can access the application here:** [https://budgetly-app-bykay.netlify.app/)
