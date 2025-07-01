# offline-analytics-portal

A web application built with Next.js and Node.js, featuring offline-first user tracking across five pages and an admin dashboard for analytics. It captures page views, clicks, form submissions, and time-on-page, storing events locally when offline and syncing them to a backend when online. The admin dashboard provides advanced filtering and visualizations.
Features

Offline Tracking: Stores page views, clicks, form submissions, and time-on-page using localForage.
Event Syncing: Queues events locally and syncs them to the backend upon reconnection with conflict resolution.
Admin Dashboard: Offers filters (user ID, session ID, page, date range) and visualizations with Chart.js.
Multi-Page App: Tracks interactions on five pages (/, /page2, /page3, /page4, /page5).
PWA Support: Enables offline access via a service worker and web app manifest.
Responsive UI: Styled with Tailwind CSS for a consistent look.

Project Structure
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

Prerequisites

Node.js (v16 or higher)
npm
Git

Setup Instructions

Clone the Repository:
git clone https://github.com/Venkatasaikishor/offline-analytics-portal.git
cd offline-analytics-portal


Backend Setup:
cd backend
npm install
npm start

Runs on http://localhost:3001.

Frontend Setup:
cd frontend
npm install
npm run dev

Runs on http://localhost:3000.

Access Pages:

Home: http://localhost:3000
Page 2: http://localhost:3000/page2
Page 3: http://localhost:3000/page3
Page 4: http://localhost:3000/page4
Page 5: http://localhost:3000/page5
Admin Dashboard: http://localhost:3000/admin



Usage

Navigate pages to trigger events (views, clicks, submissions).
Test offline mode by disabling network (e.g., in browser dev tools); events queue locally.
Reconnect to sync events to the backend.
Use the admin dashboard (/admin) to filter and visualize analytics data.

Technologies

Backend: Node.js, Express, SQLite
Frontend: Next.js, React, Tailwind CSS, Chart.js, localForage, UUID
Offline Support: Service Worker, Web App Manifest

Notes

Run backend and frontend concurrently for full functionality.
The SQLite database is in-memory; use a persistent database for production.
Replace frontend/public/icon.png with a 192x192 PNG for a custom PWA icon.
Check console logs for sync or network errors during development.

Contributing
Submit issues or pull requests at https://github.com/Venkatasaikishor/offline-analytics-portal.
License
MIT License
