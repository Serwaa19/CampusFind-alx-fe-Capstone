import { useState } from "react";
import { X, HelpCircle, Camera, Upload, Check, ChevronRight } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => onNavigate?.("home")}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">Report an Item</h2>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </header>

      <div className="p-4 space-y-5">
        {/* Toggle */}
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
          <button
            onClick={() => setMode("lost")}
            className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              mode === "lost"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600"
            }`}
          >
            Lost
          </button>
          <button
            onClick={() => setMode("found")}
            className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              mode === "found"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600"
            }`}
          >
            Found
          </button>
        </div>

        {/* Image Upload */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          {image ? (
            <div className="relative">
              <img src={image} alt="Item" className="w-full h-48 object-cover rounded-xl" />
              <button 
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Add Item Photos</h3>
              <p className="text-sm text-gray-500 text-center mb-4">
                Upload a photo to help others identify the item more quickly
              </p>
              <div className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Choose Image
              </div>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Item Name</label>
            <input
              type="text"
              placeholder="e.g. Blue Hydro Flask, Keys"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Category</label>
            <div className="relative">
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm appearance-none"
              >
                <option value="">Select Category</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Last Seen Location</label>
            <div className="relative">
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm appearance-none"
              >
                <option value="">Select Campus Location</option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 rotate-90 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
            <textarea
              placeholder="Mention any specific details like color, scratches, stickers, or brand name..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm resize-none"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-[480px] mx-auto">
        <button
          onClick={handleSubmit}
          disabled={!itemName || submitted}
          className={`w-full py-3.5 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
            submitted
              ? "bg-green-600 text-white"
              : !itemName
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
          }`}
        >
          {submitted ? (
            <>
              <Check className="w-5 h-5" />
              Report Submitted!
            </>
          ) : (
            <>
              Submit Report
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReportScreen;
