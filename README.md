# ⚡ FitAI — Intelligent Health & Fitness Tracker

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-3.5_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

> **FitAI** is a modern, full-stack health and fitness tracking web application that combines daily habit tracking with personalized AI routines and real-time nutritional guidance powered by **Google Gemini**.

---

## 🌐 Live Deployments

| Service | Environment | URL |
| :--- | :--- | :--- |
| **Frontend Application** | Vercel | [https://client-flame-alpha-29.vercel.app](https://client-flame-alpha-29.vercel.app) |
| **Backend REST API** | Render | [https://health-tracker-backend-5mk8.onrender.com](https://health-tracker-backend-5mk8.onrender.com) |
| **Database** | MongoDB Atlas | Cloud Hosted (M0 Tier) |

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture & Folder Structure](#-system-architecture--folder-structure)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Environment Configuration](#-environment-configuration)
- [Getting Started (Local Development)](#-getting-started-local-development)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [License](#-license)

---

## ✨ Key Features

### 🏋️ Comprehensive Activity & Workout Logging
- Record workouts with exercise names, duration, sets, reps, and estimated calories burned.
- Automated workout streak tracker to keep momentum and build healthy consistency.

### 🥗 Nutrition & Macronutrient Tracking
- Log meals across breakfast, lunch, dinner, and snacks.
- Track total calories and dynamic macronutrient breakdowns (Protein, Carbs, Fats).
- Visual calorie gauge ring with real-time target comparison.

### 💧 Hydration & Sleep Monitoring
- Daily water intake logging with quick-increment buttons and target progress.
- Sleep duration and quality tracking to monitor recovery and wellness cycles.

### 🤖 Gemini AI Health Intelligence
- **Personalized 7-Day Plans**: Generates custom weekly workout and meal schedules tailored to individual targets (weight loss, maintenance, or muscle gain).
- **Interactive Plan Modification**: Ask the AI to adjust specific days, swap workouts, or modify recipes on the fly.
- **AI Nutritionist Chat**: Real-time chatbot with conversation memory and personal health context for instant diet answers.

### 📊 Visual Analytics & Dashboard
- Weekly trend charts powered by **Chart.js** displaying calorie intake and activity over time.
- Overview cards summarizing today's calories, water consumed, sleep metrics, and active streaks.

### 🔐 Secure Authentication & Data Privacy
- Stateless JSON Web Token (**JWT**) user authentication with secure storage.
- Encrypted password storage using **bcryptjs**.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Routing**: React Router DOM (v7)
- **Data Visualization**: Chart.js & React-Chartjs-2
- **HTTP Client**: Axios with interceptor-based authorization
- **Code Quality**: Oxlint

### Backend
- **Runtime**: Node.js
- **Web Framework**: Express 5
- **Database & ODM**: MongoDB Atlas + Mongoose
- **AI Integration**: Google Generative AI SDK (`@google/generative-ai`)
- **Security**: JSON Web Tokens (`jsonwebtoken`) + `bcryptjs` + CORS

---

## 📂 System Architecture & Folder Structure

```text
fitai-health-tracker/
├── client/                      # Frontend Application (React + Vite)
│   ├── public/                  # Static assets & SVG icons
│   ├── src/
│   │   ├── api/                 # Axios client instance & auth interceptor
│   │   ├── components/          # Reusable UI widgets (CalorieRing, Navbar, Charts)
│   │   ├── context/             # Global AuthContext provider
│   │   ├── pages/               # Views: Dashboard, Log, Plan, Chat, Login, Register
│   │   ├── App.jsx              # Main router & layout configuration
│   │   └── index.css            # Custom CSS & design system tokens
│   ├── .env.example             # Frontend environment template
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Backend REST API (Node.js + Express)
│   ├── middleware/              # JWT authentication & route protection
│   ├── models/                  # Mongoose Schemas (User, Workout, Meal, Sleep, Water)
│   ├── routes/                  # Express routes (auth, workout, meal, sleep, ai, etc.)
│   ├── services/                # Google Gemini AI plan generation & chat service
│   ├── index.js                 # API server entrypoint & database connection
│   ├── .env.example             # Backend environment template
│   └── package.json
│
├── .gitignore                   # Universal git exclusions (secrets, node_modules)
├── render.yaml                  # Render deployment blueprint
└── README.md                    # Project documentation
```

---

## 🔌 API Endpoints Reference

### Authentication (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register new user account | No |
| `POST` | `/api/auth/login` | Authenticate user & receive JWT | No |
| `GET` | `/api/auth/me` | Fetch authenticated user profile | Yes |
| `PUT` | `/api/auth/profile` | Update user fitness goals & targets | Yes |

### Tracking & Logs
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` / `POST` | `/api/workouts` | Fetch or record workout logs | Yes |
| `DELETE` | `/api/workouts/:id` | Delete specific workout entry | Yes |
| `GET` / `POST` | `/api/meals` | Fetch or record meal entries | Yes |
| `DELETE` | `/api/meals/:id` | Delete specific meal entry | Yes |
| `GET` / `POST` | `/api/water` | Fetch or log daily water intake | Yes |
| `GET` / `POST` | `/api/sleep` | Fetch or log sleep duration/quality | Yes |

### Dashboard & Analytics (`/api/dashboard`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/dashboard/summary` | Today's aggregate metrics, streaks & 7-day trends | Yes |

### Gemini AI Engine (`/api/ai`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/ai/plan` | Generate a personalized 7-day workout & meal plan | Yes |
| `PUT` | `/api/ai/plan` | Request AI modifications to existing 7-day plan | Yes |
| `POST` | `/api/ai/chat` | Send conversational query to the AI nutritionist | Yes |

---

## ⚙️ Environment Configuration

### Backend (`server/.env`)
Copy `server/.env.example` to `server/.env` and supply your credentials:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/fitai
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
GEMINI_API_KEY=your_google_gemini_api_key
CLIENT_URL=http://localhost:5173
```

### Frontend (`client/.env`)
Copy `client/.env.example` to `client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) connection string (or local MongoDB instance)
- A [Google Gemini API Key](https://ai.google.dev/)

### 1. Clone Repository
```bash
git clone https://github.com/Siddharth-Gautam0707/fitai-health-tracker.git
cd fitai-health-tracker
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd server

# Create your local environment file
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, and Gemini API key

# Install dependencies
npm install

# Start development server with hot-reload
npm run dev
```
*The API server will run at `http://localhost:5000`.*

### 3. Frontend Setup
In a new terminal window:
```bash
# Navigate to client directory
cd client

# Create your local environment file
cp .env.example .env

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
*The frontend web app will be accessible at `http://localhost:5173`.*

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
