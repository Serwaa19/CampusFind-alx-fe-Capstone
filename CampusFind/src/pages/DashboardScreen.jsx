import { useState } from "react";
import { Settings, Bell, CheckCircle, Edit, Plus, Star } from "lucide-react";

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
    icon: Bell,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    message: "Match Found: Someone found a matching ",
    bold: "Blue Hydroflask",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: CheckCircle,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    message: "Your post ",
    bold: "Sony Headphones",
    message2: " was marked as claimed!",
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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-900">My Dashboard</h2>
        <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </header>

      <div className="p-4 space-y-5">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Alex Johnson</h1>
          <p className="text-sm text-gray-600">Computer Science Senior • ID: 12345</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Active</div>
            <div className="text-2xl font-bold text-blue-600">
              {posts.filter((p) => p.status === "ACTIVE").length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Claimed</div>
            <div className="text-2xl font-bold text-gray-900">
              {posts.filter((p) => p.status === "CLAIMED").length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Points</div>
            <div className="text-2xl font-bold text-amber-500 flex items-center justify-center gap-1">
              <Star className="w-5 h-5 fill-current" />
              150
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
              View All
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
            {ACTIVITY.map((item) => (
              <div key={item.id} className="p-4 flex gap-3">
                <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 mb-1">
                    {item.message}
                    <span className="font-semibold text-gray-900">'{item.bold}'</span>
                    {item.message2}
                  </p>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Posts */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">My Posts</h3>
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 flex gap-3">
                  <img 
                    src={post.image} 
                    alt={post.name} 
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        post.status === "ACTIVE"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {post.status}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{post.name}</h4>
                    <p className="text-sm text-gray-600 truncate">{post.description}</p>
                  </div>
                </div>

                {post.status === "ACTIVE" ? (
                  <div className="px-4 pb-4 flex gap-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button 
                      onClick={() => markClaimed(post.id)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark Claimed
                    </button>
                  </div>
                ) : (
                  <div className="px-4 pb-4">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-center">
                      <span className="text-sm text-gray-600">{post.claimedOn}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
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
        <button className="flex flex-col items-center gap-1 px-4 py-2 text-blue-600">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
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

export default DashboardScreen;
