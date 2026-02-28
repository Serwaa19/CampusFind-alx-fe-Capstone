import { useState } from "react";
import "./ReportScreen.css";

const CATEGORIES = [
  "Electronics",
  "Apparel",
  "Stationery",
  "ID & Wallets",
  "Keys",
  "Bags & Backpacks",
  "Books",
  "Sports Equipment",
  "Other",
];

const LOCATIONS = [
  "Main Library, 1st Floor",
  "Main Library, 2nd Floor",
  "Science Center Lounge",
  "Student Center",
  "Student Fitness Center",
  "Engineering Building",
  "Arts & Humanities Hall",
  "Dining Hall",
  "Parking Lot A",
  "Campus Quad",
];

const ReportScreen = ({ onNavigate }) => {
  const [mode, setMode] = useState("lost");
  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  const handleSubmit = () => {
    if (!itemName) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onNavigate?.("browse");
    }, 2000);
  };

  return (
    <div className="report-screen">
      {/* Header */}
      <header className="report-header">
        <button className="close-btn" onClick={() => onNavigate?.("home")}>✕</button>
        <h2>Report an Item</h2>
        <button className="help-btn">Help</button>
      </header>

      <div className="report-body">
        {/* Toggle */}
        <div className="mode-toggle">
          <button
            className={`toggle-btn ${mode === "lost" ? "active" : ""}`}
            onClick={() => setMode("lost")}
          >
            Lost
          </button>
          <button
            className={`toggle-btn ${mode === "found" ? "active" : ""}`}
            onClick={() => setMode("found")}
          >
            Found
          </button>
        </div>

        {/* Image Upload */}
        <div className="photo-upload">
          {image ? (
            <div className="photo-preview">
              <img src={image} alt="Item" />
              <button className="remove-photo" onClick={() => setImage(null)}>✕</button>
            </div>
          ) : (
            <>
              <div className="camera-icon">📷</div>
              <h3>Add Item Photos</h3>
              <p>Upload a photo to help others identify the item more quickly</p>
              <label className="choose-image-btn">
                Choose Image
                <input type="file" accept="image/*" onChange={handleImageChange} hidden />
              </label>
            </>
          )}
        </div>

        {/* Form Fields */}
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            placeholder="e.g. Blue Hydro Flask, Keys"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Last Seen Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Campus Location</option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Mention any specific details like color, scratches, stickers, or brand name..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="submit-section">
        <button
          className={`submit-btn ${submitted ? "submitted" : ""}`}
          onClick={handleSubmit}
          disabled={!itemName}
        >
          {submitted ? "✓ Report Submitted!" : "Submit Report →"}
        </button>
      </div>
    </div>
  );
};

export default ReportScreen;
