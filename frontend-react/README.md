# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🟩 Phase 3 – Frontend (React UI)

## 📌 Overview

Phase 3 represents the **user interface layer** of the BeyondChats assignment.

This phase:
- Consumes APIs exposed by Phase 1
- Displays articles in a clean and responsive UI
- Renders article cards dynamically using React

Phase 1 **must be running** before starting this phase.

---

## 🧠 Phase 3 Architecture

User Browser
│
▼
React Frontend (Vite)
│
▼
Axios API Client
│
▼
Backend REST APIs
(/api/articles)


---

## 🎯 Responsibilities

- Fetch articles from backend APIs
- Render article cards dynamically
- Handle loading and error states safely
- Ensure stable UI rendering

---

## 🛠 Tech Stack

- React (Vite)
- Axios
- Tailwind CSS
- JavaScript (ES6+)

---

## 📁 Folder Structure



frontend-react/
├── src/
│ ├── components/
│ │ └── ArticleCard.jsx # Article UI component
│ ├── pages/
│ │ └── Articles.jsx # Articles listing page
│ ├── services/
│ │ └── api.js # Axios API configuration
│ ├── App.jsx # App entry component
│ └── main.jsx # Vite bootstrap file
├── .env.example
├── package.json
└── README.md


---

## ⚙️ Environment Setup

### Create the environment file
```bash
cp .env.example .env

Update .env with the following value
VITE_API_URL=http://localhost:5000


Environment variables are loaded at build time. Restart the dev server after changes.

▶️ Execution Steps
1️⃣ Install Dependencies
cd frontend-react
npm install

2️⃣ Start Development Server
npm run dev

🌐 Access Application

Open the browser and navigate to:

http://localhost:5173

🧠 Data Flow

Frontend sends request via Axios

Axios uses VITE_API_URL as base URL

Backend responds with article data

React renders data as cards

📝 Notes & Considerations

Phase 1 backend must be running before frontend

Axios base URL is environment-based

UI safely handles empty or invalid API responses

Articles are rendered only when data is available

✅ Phase 3 Status

✔ Frontend server running
✔ Backend communication successful
✔ Articles rendered correctly
✔ No runtime errors