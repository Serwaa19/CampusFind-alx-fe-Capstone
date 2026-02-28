import { useState } from "react";
import "./ItemDetailScreen.css";

const ITEM = {
  id: 1,
  type: "FOUND",
  postedAgo: "2 hours ago",
  name: "Silver MacBook Pro",
  images: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    "https://images.unsplash.com/photo-1611186871525-7fc01b8fdadd?w=600&q=80",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80",
  ],
  poster: {
    name: "Alex Johnson",
    role: "Verified Student • CS Junior",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  location: "Main Library, 3rd Floor, near the group study rooms. It was sitting on one of the circular tables.",
  locationImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  category: "Electronics",
  foundDate: "Oct 24, 2023",
  description:
    "I found this MacBook Pro earlier today. It's in a gray hardshell case. It looks relatively new. I've handed it to the library front desk, but I'm posting here to find the owner faster. Please describe the stickers on the back or the desktop wallpaper to claim it.",
  safetyTip:
    "For your safety, always meet in a public campus location (like the Student Union) and bring a friend when claiming items.",
};

const ItemDetailScreen = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="detail-screen">
      {/* Image Carousel */}
      <div className="carousel">
        <img src={ITEM.images[activeSlide]} alt={ITEM.name} />
        <button className="back-btn" onClick={() => onNavigate?.("browse")}>
          ‹
        </button>
        <button className="share-btn">⤴</button>
        <div className="dots">
          {ITEM.images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      </div>

      <div className="detail-body">
        {/* Title */}
        <div className="detail-title-section">
          <div className="detail-status-row">
            <span className="found-badge">✓ FOUND</span>
            <span className="posted-time">Posted {ITEM.postedAgo}</span>
          </div>
          <h1 className="detail-name">{ITEM.name}</h1>
        </div>

        {/* Poster */}
        <div className="poster-card">
          <img src={ITEM.poster.avatar} alt={ITEM.poster.name} className="poster-avatar" />
          <div className="poster-info">
            <div className="poster-name-row">
              <span className="poster-name">{ITEM.poster.name}</span>
              <span className="verified-badge">✓</span>
            </div>
            <span className="poster-role">{ITEM.poster.role}</span>
          </div>
          <button className="view-profile-btn">View Profile</button>
        </div>

        {/* Location */}
        <div className="detail-section">
          <h3><span className="section-icon">📍</span> Location Found</h3>
          <p className="location-text">{ITEM.location}</p>
          <div className="location-map">
            <img src={ITEM.locationImage} alt="Location" />
            <div className="map-pin">📍</div>
          </div>
        </div>

        {/* Meta */}
        <div className="meta-row">
          <div className="meta-item">
            <span className="meta-label">CATEGORY</span>
            <span className="meta-value">💻 {ITEM.category}</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-label">FOUND DATE</span>
            <span className="meta-value">📅 {ITEM.foundDate}</span>
          </div>
        </div>

        {/* Description */}
        <div className="detail-section">
          <h3>Description</h3>
          <p className="description-text">{ITEM.description}</p>
        </div>

        {/* Safety Tip */}
        <div className="safety-tip">
          <span className="safety-icon">⚠️</span>
          <p>
            <strong>Safety Tip:</strong> {ITEM.safetyTip}
          </p>
        </div>

        {/* Spacer for bottom bar */}
        <div style={{ height: 20 }} />
      </div>

      {/* Bottom Action */}
      <div className="detail-actions">
        <button className="message-btn">
          💬 Message Finder
        </button>
        <button className="flag-btn">🚩</button>
      </div>
      <p className="response-note">Responses usually within 30 minutes</p>
    </div>
  );
};

export default ItemDetailScreen;
