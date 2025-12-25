BeyondChats Assignment – Full-Stack Application

🔗 GitHub Repository
 https://github.com/waquaralipatel/Assignment-BeyondChats

Project Overview

This project is a phase-wise full-stack application built as part of the BeyondChats assessment.

The system:

Scrapes BeyondChats blog articles

Stores them in MongoDB

Enhances articles using an AI pipeline (mocked or real)

Displays original and updated articles on a React frontend

The application is divided into three independent but connected phases.

Overall Architecture

┌──────────────┐
│  Phase 1     │
│  Backend API │
│  (Node + DB) │
└──────┬───────┘
       │ REST APIs
       ▼
┌──────────────┐
│  Phase 2     │
│  AI Pipeline │
│  (Node + AI) │
└──────┬───────┘
       │ Updated Articles
       ▼
┌──────────────┐
│  Phase 3     │
│  Frontend UI │
│  (React)     │
└──────────────┘
🟥 PHASE 1 – Backend (API + Scraper)
📌 Purpose

Scrape BeyondChats blog articles

Store articles in MongoDB

Expose REST APIs for frontend & AI pipeline

🛠 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

Axios

Cheerio

📁 Folder Structure (Phase 1)
backend-laravel/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Article.js
│   ├── routes/
│   │   └── articles.js
│   ├── controllers/
│   │   └── articleController.js
│   └── scraper/
│       └── scrapeOldBlogs.js
├── .env.example
├── package.json
└── README.md

▶️ Phase 1 Execution Steps
cd backend-laravel
npm install
cd src
node app.js


 Expected Output:

 Server running on port 5000
 MongoDB connected

Run Scraper (one-time)
node scraper/scrapeOldBlogs.js


Output:

5 oldest blogs scraped successfully

🔗 Important API Endpoints

GET /api/articles → Fetch all articles

GET /api/articles/latest → Fetch latest article