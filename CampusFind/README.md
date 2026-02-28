# CampusFind - Lost & Found App

A modern, mobile-first lost and found application for university campuses built with React, Vite, and Tailwind CSS.

## Features

- Browse lost and found items with filtering
- Report lost or found items with photo uploads
- View detailed item information with location maps
- User dashboard to track your posts
- Real-time activity feed
- Responsive design optimized for mobile devices

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Lucide React (icons)
- React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
CampusFind/
├── src/
│   ├── pages/
│   │   ├── HomeScreen.jsx       # Landing page with categories
│   │   ├── BrowseScreen.jsx     # Browse all items
│   │   ├── ItemDetailScreen.jsx # Item details view
│   │   ├── ReportScreen.jsx     # Report lost/found items
│   │   └── DashboardScreen.jsx  # User dashboard
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
└── package.json
```

## Design Features

- Modern, clean UI with Tailwind CSS
- Smooth transitions and hover effects
- Professional color scheme (blue primary)
- Realistic shadows and borders
- Mobile-optimized navigation
- High-quality placeholder images from Unsplash

## License

MIT
