# 🟧 Phase 2 – AI Pipeline (Node.js)

## 📌 Overview

Phase 2 is responsible for **enhancing blog articles** using an AI-driven pipeline.

This phase:
- Fetches articles from the Phase 1 backend
- Analyzes competitor content
- Rewrites or enhances articles using AI (real or mocked)
- Pushes updated articles back to the backend database

Phase 1 **must be running** before executing Phase 2.

---

## 🧠 Phase 2 Architecture

Backend API (Phase 1)
│
▼
Fetch Latest Article
│
▼
Competitor Analysis
(Search + Scrape)
│
▼
AI Rewrite Engine
(OpenAI / Mock AI)
│
▼
Update Backend
(/api/articles)


---

## 🎯 Responsibilities

- Consume backend APIs
- Process and enhance content
- Maintain separation between AI logic and backend logic
- Ensure safe data flow back to database

---

## 🛠 Tech Stack

- Node.js
- Axios
- OpenAI API (or mock AI logic)
- Cheerio (for competitor scraping)

---

## 📁 Folder Structure



ai-node-script/
├── index.js # Pipeline entry point
├── llm.js # AI rewrite logic (real or mock)
├── scraper.js # Competitor content scraper
├── googleSearch.js # Search logic
├── .env.example
├── package.json
└── README.md


---

## ⚙️ Environment Setup

### Create the environment file
```bash
cp .env.example .env

Update .env with the following values
LARAVEL_API=http://localhost:5000/api
OPENAI_KEY=your_openai_api_key
SERP_API=your_serpapi_key


If OpenAI quota is unavailable, AI logic can be mocked without breaking the pipeline.

▶️ Execution Steps
1️⃣ Install Dependencies
cd ai-node-script
npm install

2️⃣ Run AI Pipeline
node index.js

✅ Sample Output
✅ Latest article fetched
✅ Competitor articles scraped
⚠️ AI rewrite simulated
✅ Updated article pushed to backend

🧠 AI Rewrite Logic

Uses OpenAI API for real rewriting (if quota is available)

Falls back to mock AI logic if API quota is exceeded

Ensures pipeline continuity for assessment purposes

📝 Notes & Considerations

Phase 1 backend must be running before execution

AI logic is modular and replaceable

Mock AI is intentionally implemented for safe evaluation

Pipeline can be re-run multiple times without duplication

✅ Phase 2 Status

✔ Backend integration successful
✔ AI pipeline executed
✔ Articles enhanced and stored
✔ Ready for frontend consumption