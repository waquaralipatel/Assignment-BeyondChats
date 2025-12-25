# 🟥 Phase 1 – Backend (API + Scraper)

## 📌 Overview

Phase 1 is the **core backend layer** of the BeyondChats assignment.  
It is responsible for scraping blog articles, storing them in MongoDB, and exposing REST APIs for other phases.

This phase acts as the **single source of truth** for the entire application.

---

## 🧠 Phase 1 Architecture

┌──────────────────────┐
│ BeyondChats Website │
│ (Blogs Pages) │
└──────────┬───────────┘
│ Scraping
▼
┌──────────────────────┐
│ Blog Scraper │
│ (Axios + Cheerio) │
└──────────┬───────────┘
│ Store Data
▼
┌──────────────────────┐
│ MongoDB Database │
│ (beyondchats) │
└──────────┬───────────┘
│ REST APIs
▼
┌──────────────────────┐
│ Express Backend API │
│ (/api/articles) │
└──────────────────────┘


---

## 🎯 Responsibilities

- Scrape BeyondChats blog articles
- Store articles in MongoDB
- Provide REST APIs for frontend & AI pipeline
- Manage database connection and persistence

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
- Cheerio

---

## 📁 Folder Structure

backend/
├── src/
│ ├── app.js # Application entry point
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── models/
│ │ └── Article.js # Article schema
│ ├── routes/
│ │ └── articles.js # API routes
│ ├── controllers/
│ │ └── articleController.js
│ └── scraper/
│ └── scrapeOldBlogs.js # Blog scraping script
├── .env.example
├── package.json
└── README.md


---

## ⚙️ Environment Setup

### Create the environment file
```bash
cp .env.example .env

## Update .env with the following values
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/beyondchats

Execution Steps
1️⃣ Install Dependencies
cd backend-laravel
npm install

2️⃣ Start Backend Server
cd src
node app.js

✅ Expected Output
🚀 Server running on port 5000
✅ MongoDB connected

3️⃣ Run Blog Scraper (One-Time Setup)

The scraper fetches the oldest BeyondChats blog articles and stores them in MongoDB.

node scraper/scrapeOldBlogs.js

✅ Expected Output
✅ 5 oldest blogs scraped successfully

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/articles	Fetch all stored articles
GET	/api/articles/latest	Fetch the latest article
🧠 Data Model (Article)

Each article stored in MongoDB contains:

title

slug

content

article_type (original / updated)

createdAt

updatedAt

📝 Notes & Considerations

Backend must be running before Phase 2 or Phase 3

Scraper converts relative URLs into absolute URLs

Database and collections are auto-created by MongoDB

APIs are designed to be consumed by multiple clients

Scraping is intended to be executed once during setup

✅ Phase 1 Status

✔ Backend server running
✔ MongoDB connected
✔ Articles scraped and stored
✔ APIs exposed and tested
