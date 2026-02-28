import { useState } from "react";
import { Search, GraduationCap, HelpCircle, Package, Shirt, Pen, CreditCard, ChevronRight, MapPin, Plus } from "lucide-react";

const HomeScreen = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { icon: Package, name: "Electronics", count: "12 items found today", color: "bg-blue-50 text-blue-600" },
    { icon: Shirt, name: "Apparel", count: "8 items found today", color: "bg-purple-50 text-purple-600" },
    { icon: Pen, name: "Stationery", count: "5 items found today", color: "bg-green-50 text-green-600" },
    { icon: CreditCard, name: "ID & Wallets", count: "3 items found today", color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">CampusFind</span>
        </div>
        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </header>

      {/* Hero */}
      <div className="bg-white">
        <div className="relative h-48 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <div className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-700">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Official University Service
            </div>
          </div>
        </div>
        
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to CampusFind</h1>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            The official hub for reuniting students with their lost essentials. Fast, secure, and university-vetted.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate?.("report")}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors shadow-sm"
            >
              Get Started
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-xl transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-6 grid grid-cols-2 gap-3">
        <button 
          onClick={() => onNavigate?.("browse")}
          className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-left group"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
            <Search className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">I Lost Items</h3>
          <p className="text-xs text-gray-500">Browse and claim your items</p>
        </button>
        <button 
          onClick={() => onNavigate?.("report")}
          className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-left group"
        >
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
            <Plus className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">I Found Items</h3>
          <p className="text-xs text-gray-500">Post a found item report</p>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for your lost item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Browse Categories</h2>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onNavigate?.("browse")}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-left group"
            >
              <div className={`w-10 h-10 ${cat.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{cat.name}</h4>
              <p className="text-xs text-gray-500">{cat.count}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="mx-4 mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white mb-1">450+</div>
            <div className="text-xs text-blue-100">Items Found</div>
          </div>
          <div className="border-l border-r border-blue-400/30">
            <div className="text-2xl font-bold text-white mb-1">24h</div>
            <div className="text-xs text-blue-100">Avg Return Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white mb-1">98%</div>
            <div className="text-xs text-blue-100">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 flex items-center justify-around max-w-[480px] mx-auto">
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-blue-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium">Home</span>
        </button>
        <button onClick={() => onNavigate?.("browse")} className="flex flex-col items-center gap-1 px-4 py-2 text-gray-400 hover:text-gray-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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

export default HomeScreen;
