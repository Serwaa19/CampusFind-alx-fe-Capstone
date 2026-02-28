import { useState } from "react";
import "./DashboardScreen.css";

const POSTS = [
  {
    id: 1,
    status: "ACTIVE",
    date: "Oct 24",
    name: "Blue Hydroflask",
    description: "Found at Student Union Commons...",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=80",
  },
  {
    id: 2,
    status: "CLAIMED",
    date: "Oct 20",
    name: "Sony Headphones",
    description: "Lost in Science Building room 402.",
    claimedOn: "Claimed on Oct 22",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
  },
];

const ACTIVITY = [
  {
    id: 1,
    icon: "🔔",
    iconBg: "#e8f0fe",
    message: <>Match Found: Someone found a matching <strong>'Blue Hydroflask'</strong></>,
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: "✅",
    iconBg: "#f0fdf4",
    message: <>Your post <strong>'Sony Headphones'</strong> was marked as claimed!</>,
    time: "Yesterday",
  },
];

const DashboardScreen = ({ onNavigate }) => {
  const [posts, setPosts] = useState(POSTS);

  const markClaimed = (id) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, status: "CLAIMED", claimedOn: "Claimed on Oct 24" } : p
      )
    );
  };

  return (
    <div className="dashboard-screen">
      {/* Header */}
      <header className="dashboard-header">
        <div className="avatar">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
            alt="Avatar"
          />
        </div>
        <h2>My Dashboard</h2>
        <button className="settings-btn">⚙️</button>
      </header>

      <div className="dashboard-body">
        {/* Profile */}
        <div className="profile-section">
          <h1 className="profile-name">Alex Johnson</h1>
          <p className="profile-meta">Computer Science Senior • ID: 12345</p>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-label">ACTIVE</span>
            <span className="stat-value blue">
              {posts.filter((p) => p.status === "ACTIVE").length}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-label">CLAIMED</span>
            <span className="stat-value">
              {posts.filter((p) => p.status === "CLAIMED").length}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-label">POINTS</span>
            <span className="stat-value">
              <span className="points-icon">⭐</span>150
            </span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="section-header">
          <h3>Recent Activity</h3>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="activity-card">
          {ACTIVITY.map((item) => (
            <div key={item.id} className="activity-item">
              <div
                className="activity-icon"
                style={{ background: item.iconBg }}
              >
                {item.icon}
              </div>
              <div className="activity-text">
                <p>{item.message}</p>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* My Posts */}
        <h3 className="my-posts-title">My Posts</h3>

        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-top">
              <img src={post.image} alt={post.name} className="post-image" />
              <div className="post-info">
                <div className="post-meta-row">
                  <span className={`post-badge ${post.status.toLowerCase()}`}>
                    {post.status}
                  </span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h4 className="post-name">{post.name}</h4>
                <p className="post-desc">{post.description}</p>
              </div>
            </div>

            {post.status === "ACTIVE" ? (
              <div className="post-actions">
                <button className="edit-btn">✏️ Edit</button>
                <button
                  className="claim-btn"
                  onClick={() => markClaimed(post.id)}
                >
                  ✅ Mark Claimed
                </button>
              </div>
            ) : (
              <div className="claimed-footer">
                <span>{post.claimedOn}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FAB */}
      <button className="dashboard-fab" onClick={() => onNavigate?.("report")}>
        ＋
      </button>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button className="nav-item" onClick={() => onNavigate?.("browse")}>
          <span>🧭</span>
          <span>EXPLORE</span>
        </button>
        <button className="nav-item">
          <span>🗺️</span>
          <span>MAP</span>
        </button>
        <button className="nav-item active">
          <span>▦</span>
          <span>MY POSTS</span>
        </button>
        <button className="nav-item">
          <span>👤</span>
          <span>PROFILE</span>
        </button>
      </nav>
    </div>
  );
};

export default DashboardScreen;
