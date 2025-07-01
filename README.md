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
│   ├── server.js        # Express server with event ingestion and analytics endpoints
│   ├── db.js           # SQLite database setup
│   └── package.json    # Backend dependencies
├── frontend/
│   ├── pages/
│   │   ├── _app.js     # Custom App with AnalyticsTracker
│   │   ├── index.js    # Home page (Page 1)
│   │   ├── page2.js    # Page 2
│   │   ├── page3.js    # Page 3
│   │   ├── page4.js    # Page 4
│   │   ├── page5.js    # Page 5
│   │   └── admin.js    # Admin dashboard page
│   ├── public/
│   │   ├── sw.js       # Service worker for offline support
│   │   └── manifest.json # PWA manifest
│   ├── components/
│   │   ├── AnalyticsTracker.js # Tracks user interactions
│   │   └── AdminDashboard.js   # Admin dashboard with filters and charts
│   ├── lib/
│   │   └── analytics.js        # Event tracking and syncing logic
│   ├── styles/
│   │   └── globals.css         # Global styles with Tailwind CSS
│   ├── package.json           # Frontend dependencies
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   └── postcss.config.js      # PostCSS configuration
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore rules



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
