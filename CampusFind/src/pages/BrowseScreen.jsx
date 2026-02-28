import { useState } from "react";
import { Search, Bell, MapPin, Plus, X } from "lucide-react";

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
    name: "AirPods Pro",
    type: "FOUND",
    status: "UNCLAIMED",
    location: "Main Library, 2nd Floor",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80",
  },
  {
    id: 3,
    name: "Green HydroFlask",
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
    name: "Black Dell Laptop",
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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <button 
          onClick={() => onNavigate?.("dashboard")}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
        <h2 className="text-lg font-bold text-gray-900">Browse Items</h2>
        <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
      </header>

      {/* Search */}
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search items (e.g., keys, wallet)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
          />
          {search && (
            <button 
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-3 bg-white border-b border-gray-200 overflow-x-auto">
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                filter === f
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="p-4 space-y-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-900 font-medium mb-1">No items found</p>
            <span className="text-sm text-gray-500">Try adjusting your search or filters</span>
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
              <div className="relative h-48">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    item.type === "LOST" 
                      ? "bg-red-500 text-white" 
                      : "bg-blue-500 text-white"
                  }`}>
                    {item.type}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    item.status === "CLAIMED"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-base">{item.name}</h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{item.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{item.location}</span>
                </div>
                <button
                  onClick={() => onNavigate?.("detail")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FAB */}
      <button 
        onClick={() => onNavigate?.("report")}
        className="fixed bottom-24 right-4 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 flex items-center justify-around max-w-[480px] mx-auto">
        <button onClick={() => onNavigate?.("home")} className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-gray-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-xs font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-blue-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs font-medium">Listings</span>
        </button>
        <button 
          onClick={() => onNavigate?.("report")}
          className="w-14 h-14 -mt-6 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors"
        >
          <Plus className="w-6 h-6 text-white" />
        </button>
        <button onClick={() => onNavigate?.("dashboard")} className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-gray-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Dashboard</span>
        </button>
        <button onClick={() => onNavigate?.("dashboard")} className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-gray-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default BrowseScreen;
