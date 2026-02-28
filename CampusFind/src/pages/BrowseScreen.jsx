import { useState } from "react";
import "./BrowseScreen.css";

const ITEMS = [
  {
    id: 1,
    name: "North Face Blue Backpack",
    type: "LOST",
    status: "UNCLAIMED",
    location: "Science Center Lounge",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
  },
  {
    id: 2,
    name: "AirPods Pro Case",
    type: "FOUND",
    status: "UNCLAIMED",
    location: "Main Library, 2nd Floor",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
  },
  {
    id: 3,
    name: "Silver HydroFlask",
    type: "FOUND",
    status: "UNCLAIMED",
    location: "Student Fitness Center",
    time: "Yesterday",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
  },
  {
    id: 4,
    name: "Student ID Card",
    type: "FOUND",
    status: "UNCLAIMED",
    location: "Dining Hall",
    time: "Yesterday",
    image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=400&q=80",
  },
  {
    id: 5,
    name: "Black Laptop Charger",
    type: "LOST",
    status: "CLAIMED",
    location: "Engineering Building",
    time: "2 days ago",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80",
  },
];

const BrowseScreen = ({ onNavigate }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "Lost", "Found", "Recently Claimed"];

  const filtered = ITEMS.filter((item) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Lost" && item.type === "LOST") ||
      (filter === "Found" && item.type === "FOUND") ||
      (filter === "Recently Claimed" && item.status === "CLAIMED");
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="browse-screen">
      {/* Header */}
      <header className="browse-header">
        <button className="avatar-btn" onClick={() => onNavigate?.("dashboard")}>👤</button>
        <h2>Browse Items</h2>
        <button className="notif-btn">🔔</button>
      </header>

      {/* Search */}
      <div className="browse-search">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search items (e.g., keys, wallet)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="clear-search" onClick={() => setSearch("")}>✕</button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-tab ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="items-list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <p>No items found</p>
            <span>Try adjusting your search or filters</span>
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-wrapper">
                <img src={item.image} alt={item.name} />
                <div className="item-badges">
                  <span className={`badge type-badge ${item.type === "LOST" ? "lost" : "found"}`}>
                    {item.type}
                  </span>
                  <span className={`badge status-badge ${item.status === "CLAIMED" ? "claimed" : ""}`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="item-info">
                <div className="item-title-row">
                  <h3>{item.name}</h3>
                  <span className="item-time">{item.time}</span>
                </div>
                <div className="item-location">
                  <span className="location-pin">📍</span>
                  {item.location}
                </div>
                <button
                  className="view-details-btn"
                  onClick={() => onNavigate?.("detail")}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FAB */}
      <button className="browse-fab" onClick={() => onNavigate?.("report")}>＋</button>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button className="nav-item" onClick={() => onNavigate?.("home")}>
          <span>🏠</span>
          <span>Home</span>
        </button>
        <button className="nav-item active">
          <span>📋</span>
          <span>Listings</span>
        </button>
        <button className="nav-fab" onClick={() => onNavigate?.("report")}>＋</button>
        <button className="nav-item" onClick={() => onNavigate?.("dashboard")}>
          <span>▦</span>
          <span>Dashboard</span>
        </button>
        <button className="nav-item" onClick={() => onNavigate?.("dashboard")}>
          <span>👤</span>
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default BrowseScreen;
