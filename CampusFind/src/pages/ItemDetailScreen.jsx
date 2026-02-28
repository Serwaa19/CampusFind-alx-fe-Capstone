import { useState } from "react";
import { ChevronLeft, Share2, MapPin, Calendar, Package, CheckCircle, AlertTriangle, MessageCircle, Flag } from "lucide-react";

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
  description: "I found this MacBook Pro earlier today. It is in a gray hardshell case. It looks relatively new. I have handed it to the library front desk, but I am posting here to find the owner faster. Please describe the stickers on the back or the desktop wallpaper to claim it.",
  safetyTip: "For your safety, always meet in a public campus location (like the Student Union) and bring a friend when claiming items.",
};

const ItemDetailScreen = ({ onNavigate }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Image Carousel */}
      <div className="relative h-80 bg-gray-900">
        <img 
          src={ITEM.images[activeSlide]} 
          alt={ITEM.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        
        {/* Header Buttons */}
        <button 
          onClick={() => onNavigate?.("browse")}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 text-gray-900" />
        </button>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg">
          <Share2 className="w-5 h-5 text-gray-900" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {ITEM.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === activeSlide ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-5 space-y-5">
        {/* Status & Title */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
              <CheckCircle className="w-4 h-4" />
              FOUND
            </span>
            <span className="text-sm text-gray-500">Posted {ITEM.postedAgo}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{ITEM.name}</h1>
        </div>

        {/* Poster Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
          <img 
            src={ITEM.poster.avatar} 
            alt={ITEM.poster.name} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="font-semibold text-gray-900">{ITEM.poster.name}</span>
              <CheckCircle className="w-4 h-4 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">{ITEM.poster.role}</span>
          </div>
          <button 
            onClick={() => onNavigate?.("dashboard")}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg text-sm transition-colors"
          >
            View Profile
          </button>
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Location Found</h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">{ITEM.location}</p>
          <div className="relative h-40 rounded-xl overflow-hidden">
            <img 
              src={ITEM.locationImage} 
              alt="Location" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Category</div>
            <div className="flex items-center gap-2 text-gray-900 font-medium">
              <Package className="w-4 h-4 text-blue-600" />
              {ITEM.category}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Found Date</div>
            <div className="flex items-center gap-2 text-gray-900 font-medium">
              <Calendar className="w-4 h-4 text-blue-600" />
              {ITEM.foundDate}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{ITEM.description}</p>
        </div>

        {/* Safety Tip */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-semibold">Safety Tip:</span> {ITEM.safetyTip}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 max-w-[480px] mx-auto">
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
            <MessageCircle className="w-5 h-5" />
            Message Finder
          </button>
          <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
            <Flag className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">Responses usually within 30 minutes</p>
      </div>
    </div>
  );
};

export default ItemDetailScreen;
