import { useState } from "react";
import "./HomeScreen.css";

const HomeScreen = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: "💻", name: "Electronics", count: "12 items found today" },
    { icon: "👕", name: "Apparel", count: "8 items found today" },
    { icon: "✏️", name: "Stationery", count: "5 items found today" },
    { icon: "💳", name: "ID & Wallets", count: "3 items found today" },
  ];

  return (
    <div className="home-screen">
      {/* Header */}
      <header className="home-header">
        <div className="home-logo">
          <span className="logo-icon">🎓</span>
          <span className="logo-text">Campus Found</span>
        </div>
        <button className="help-btn">Help</button>
      </header>

      {/* Hero */}
      <div className="hero-section">
        <div className="hero-image">
          <div className="hero-badge">
            <span className="badge-icon">✓</span> Official University Service
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Campus Found</h1>
          <p className="hero-subtitle">
            The official hub for reuniting students with their lost essentials.
            Fast, secure, and university-vetted.
          </p>
          <button className="btn-primary" onClick={() => onNavigate?.("report")}>
            Get Started
          </button>
          <button className="btn-secondary">Sign In</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <div className="action-card" onClick={() => onNavigate?.("browse")}>
          <div className="action-icon lost-icon">🔍</div>
          <h3>I Lost Items</h3>
          <p>Browse and claim your items</p>
        </div>
        <div className="action-card" onClick={() => onNavigate?.("report")}>
          <div className="action-icon found-icon">➕</div>
          <h3>I Found Items</h3>
          <p>Post a found item report</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search for your lost item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="filter-btn">⚙️</button>
        </div>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <div className="section-header">
          <h2>Browse Categories</h2>
          <button className="view-all-btn">View all</button>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="category-card"
              onClick={() => onNavigate?.("browse")}
            >
              <div className="category-icon">{cat.icon}</div>
              <h4>{cat.name}</h4>
              <p>{cat.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stat">
          <span className="stat-number">450+</span>
          <span className="stat-label">Items Found</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">24h</span>
          <span className="stat-label">Avg Return Time</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">98%</span>
          <span className="stat-label">Success Rate</span>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button className="nav-item active" onClick={() => onNavigate?.("home")}>
          <span>🏠</span>
          <span>Home</span>
        </button>
        <button className="nav-item" onClick={() => onNavigate?.("browse")}>
          <span>📋</span>
          <span>Listings</span>
        </button>
        <button className="nav-fab" onClick={() => onNavigate?.("report")}>
          ＋
        </button>
        <button className="nav-item" onClick={() => onNavigate?.("dashboard")}>
          <span>▦</span>
          <span>Dashboard</span>
        </button>
        <button className="nav-item" onClick={() => onNavigate?.("browse")}>
          <span>👤</span>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default HomeScreen;
