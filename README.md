# Full-Stack MERN Developer Portfolio Website

A modern, responsive, high-performance developer portfolio built with the **MERN Stack** (MongoDB, Express.js, React, Node.js), **Tailwind CSS**, and **Framer Motion**.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Features

- **Tech Stack**: React 18 (Vite), Express.js REST API, MongoDB (Mongoose ODM), Node.js, Tailwind CSS v3, Lucide React Icons, Framer Motion.
- **Hero Section**: Dynamic intro badge, title, tagline, social links (GitHub, LinkedIn, Email), resume download CTA, and animated code illustration window.
- **About Section**: Full-stack developer narrative, key stats, and categorized interactive skills grid with animated proficiency bars.
- **Projects Section**: Live project cards fetched dynamically from the Express REST API (`GET /api/projects`). Includes loading skeletons, error fallbacks, category filter tabs, live demo & GitHub repository buttons.
- **Experience Timeline**: Vertical timeline layout highlighting software engineering experience and computer science education.
- **Contact Section**: Interactive form with real-time client-side validation and backend express-validator checks (`POST /api/contact`), submitting messages directly to MongoDB with instant toast status updates.
- **Dark / Light Mode**: Smooth theme switching with local storage persistence and system preference auto-detection.
- **Mobile-First Responsive Design**: Responsive navbar with scroll-spy active section highlighting and mobile drawer menu.
- **Database Seeding**: Built-in CLI seed script to populate sample projects into MongoDB.

---

## 📁 Repository Structure

```text
Portfolio Website/
├── client/                     # React Frontend (Vite)
│   ├── public/
│   │   └── resume.pdf          # Sample downloadable developer resume
│   ├── src/
│   │   ├── components/         # Navbar, Hero, About, Projects, Experience, Contact, Footer
│   │   ├── context/            # ThemeContext (Dark/Light mode)
│   │   ├── hooks/              # useScrollSpy custom hook
│   │   ├── services/           # Axios API configuration & endpoints
│   │   ├── App.jsx             # Main App layout component
│   │   └── index.css           # Tailwind design tokens & custom utilities
│   ├── .env.example
│   └── package.json
├── server/                     # Express REST API Backend
│   ├── config/                 # DB connection (Mongoose)
│   ├── controllers/            # Project & Contact controllers
│   ├── middleware/             # Validation middleware & error handling
│   ├── models/                 # Mongoose schemas (Project.js, Contact.js)
│   ├── routes/                 # Express API routes (/api/projects, /api/contact)
│   ├── seed.js                 # MongoDB data seeding script
│   ├── server.js               # Express server entry point
│   ├── .env.example
│   └── package.json
└── README.md                   # Setup and usage guide
```

---

## 🚀 Quick Start Guide

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **MongoDB** (Local MongoDB Community Server running on `mongodb://localhost:27017` OR a free **MongoDB Atlas** cluster URI)

---

### Step 1: Environment Setup

#### 1. Backend (`/server`)
Navigate to the `server` directory and copy the environment template:
```bash
cd server
cp .env.example .env
```

Ensure your `server/.env` file contains:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

#### 2. Frontend (`/client`)
Navigate to the `client` directory and copy the environment template:
```bash
cd ../client
cp .env.example .env
```

Ensure your `client/.env` file contains:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

### Step 2: Install Dependencies

#### Install Server Dependencies
```bash
cd server
npm install
```

#### Install Client Dependencies
```bash
cd ../client
npm install
```

---

### Step 3: Seed the Database

To populate your MongoDB database with initial sample projects, run the seed script from the `/server` directory:

```bash
cd server
npm run seed
```

*Expected output:*
```text
Connecting to MongoDB at: mongodb://localhost:27017/portfolio
Clearing existing projects...
Seeding sample projects...
Successfully seeded 4 projects into MongoDB!
```

> **Note**: Even if MongoDB is offline during initial frontend testing, the server includes a graceful fallback mechanism to return sample data to the frontend.

---

### Step 4: Run the Application

#### Start Backend Server
```bash
cd server
npm run dev
```
The REST API will start at **http://localhost:5000** (Health Check: `http://localhost:5000/api/health`).

#### Start Frontend Client
In a new terminal window:
```bash
cd client
npm run dev
```
The React Vite development server will start at **http://localhost:5173**.

---

## 🔌 API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/projects` | Fetch all portfolio projects from MongoDB |
| **GET** | `/api/projects/:id` | Fetch single project by ID |
| **POST** | `/api/contact` | Validate & store a contact message in MongoDB |
| **GET** | `/api/health` | Backend API health check |

---

## 🗄️ Database Instructions

### Running Local MongoDB

1. Start your local MongoDB service:
   - **Windows**: `net start MongoDB` or launch MongoDB Compass.
   - **macOS (Homebrew)**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`
2. Update `MONGODB_URI` in `server/.env` to `mongodb://localhost:27017/portfolio`.

### Connecting to MongoDB Atlas

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Obtain your Connection String (e.g. `mongodb+sandbox.mongodb.net/...`).
3. Set `MONGODB_URI` in `server/.env` to your Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
4. Run `npm run seed` inside `/server` to populate your Atlas database.

---

## 📄 License

MIT License. Feel free to customize and use this portfolio as your personal showcase!
