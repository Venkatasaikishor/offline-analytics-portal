# 🛰️ Offline Analytics Portal

A robust offline-first web analytics platform built using **Next.js**, **Node.js**, and **SQLite**. This application tracks user interactions across five pages, queues events when offline, and syncs them to a backend when reconnected. It also includes an **admin dashboard** for advanced analytics, filtering, and visualizations.


## ✨ Features

- **📊 User Tracking:** Capture page views, clicks, form submissions, and time-on-page.
- **🔌 Offline Support:** Uses `localForage` to store events locally when offline.
- **🔄 Event Syncing:** Automatically syncs events with backend upon reconnection with conflict resolution.
- **📈 Admin Dashboard:** Filter by user ID, session ID, page, and date range. Visualize data using `Chart.js`.
- **📱 PWA-Ready:** Includes a service worker and web manifest for offline capabilities.
- **🖥️ Responsive UI:** Built with `Tailwind CSS` for a clean, modern, and consistent design.
- **🧭 Multi-Page Tracking:** Interactions tracked on five distinct pages.


## 📁 Project Structure

offline-analytics-portal/
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── migrations/
│       └── 001_create_events_table.sql
├── frontend/
│   ├── pages/
│   │   ├── _app.js
│   │   ├── index.js
│   │   ├── page2.js
│   │   ├── page3.js
│   │   ├── page4.js
│   │   ├── page5.js
│   │   └── admin.js
│   ├── public/
│   │   ├── sw.js
│   │   ├── manifest.json
│   │   └── icon.png
│   ├── components/
│   │   ├── AnalyticsTracker.js
│   │   └── AdminDashboard.js
│   ├── lib/
│   │   └── analytics.js
│   ├── styles/
│   │   └── globals.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── README.md
└── .gitignore



## ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm
- Git


## 🚀 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/Venkatasaikishor/offline-analytics-portal.git
cd offline-analytics-portal


2. Backend Setup:
cd backend
npm install
npm start

Runs on http://localhost:3001.

3. Frontend Setup:
cd frontend
npm install
npm run dev

Runs on http://localhost:3000.

🌐 App Pages

Home: http://localhost:3000
Page 2: http://localhost:3000/page2
Page 3: http://localhost:3000/page3
Page 4: http://localhost:3000/page4
Page 5: http://localhost:3000/page5
Admin Dashboard: http://localhost:3000/admin

🧪 Usage Guide

Navigate pages to trigger events (views, clicks, submissions).
Test offline mode by disabling network (e.g., in browser dev tools); events queue locally.
Reconnect to sync events to the backend.
Use the admin dashboard (/admin) to filter and visualize analytics data.

🛠️ Technologies Used

Backend: Node.js, Express, SQLite
Frontend: Next.js, React, Tailwind CSS, Chart.js, localForage, UUID
Offline Support: Service Worker, Web App Manifest

📌 Notes

Run backend and frontend concurrently for full functionality.
The SQLite database is in-memory; use a persistent database for production.
Replace frontend/public/icon.png with a 192x192 PNG for a custom PWA icon.
Check console logs for sync or network errors during development.

🤝 Contributing

Submit issues or pull requests at https://github.com/Venkatasaikishor/offline-analytics-portal.

🪪 License

MIT License
