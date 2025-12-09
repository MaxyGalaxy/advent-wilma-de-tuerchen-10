import React from 'react';
import { Market, WilmaColor } from '../types';
import { WILMA_COLORS } from '../constants';
import { MapPin, Calendar, X, Info } from 'lucide-react';

interface SidebarProps {
  market: Market | null;
  onClose: () => void;
}

const MarketSidebar: React.FC<SidebarProps> = ({ market, onClose }) => {
  // Feature toggle: When true, the "Mehr erfahren" button is enabled and the image is visible
  // When false, the button is disabled and the image is completely hidden
  const isContentEnabled = true;

  if (!market) {
    return null;
  }

  return (
    <div className="h-full flex flex-col bg-white shadow-2xl relative overflow-hidden font-sans">
      
      {/* 1. Header Section (Dark Navy) - Fixed */}
      <div 
        className="w-full px-8 py-6 relative flex-shrink-0 z-10"
        style={{ backgroundColor: WILMA_COLORS.darkNavy }}
      >
        {/* Close Button - Fully Rounded */}
        <button 
          onClick={onClose}
          className="absolute top-1/2 -translate-y-1/2 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Schließen"
        >
          <X size={24} />
        </button>

        <div className="pr-10">
          {/* Region Badge - Fully Rounded */}
          <span 
            className="inline-block px-3 py-1 text-xs font-bold uppercase rounded-full mb-2 tracking-widest"
            style={{ backgroundColor: WILMA_COLORS.yellow, color: WILMA_COLORS.darkNavy }}
          >
            {market.region}
          </span>
          
          {/* City Name */}
          <h1 className="text-3xl font-bold text-white leading-none tracking-tight">
            {market.city}
          </h1>
        </div>
      </div>

      {/* 2. Scrollable Content (Image + Details) */}
      <div className="flex-1 overflow-y-auto bg-white">
        
        {/* Image Container with Overlay Title - Only shown when isContentEnabled is true */}
        {isContentEnabled && (
          <div className="relative w-full h-64">
            <img 
              src={market.imageUrl} 
              alt={market.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if local image fails to load
                (e.target as HTMLImageElement).style.display = 'none'; 
                (e.target as HTMLImageElement).parentElement!.style.backgroundColor = WILMA_COLORS.grey;
              }}
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            
            {/* Market Name Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <h2 
                className="text-2xl font-bold text-white mb-3 leading-tight"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
              >
                {market.name}
              </h2>
              {/* Rounded Line - White */}
              <div className="h-1.5 w-24 rounded-full bg-white shadow-sm"></div>
            </div>
          </div>
        )}

        {/* Text Details */}
        <div className="px-8 py-8">
          
          {/* Market Name - Only shown when image is hidden */}
          {!isContentEnabled && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-3">
                {market.name}
              </h2>
              <div className="h-1.5 w-24 rounded-full" style={{ backgroundColor: WILMA_COLORS.mediumBlue }}></div>
            </div>
          )}

          {/* Opening Times (Öffnungszeitraum) - Full Width, No Card */}
          <div className="flex items-start gap-4 mb-8 w-full">
            <Calendar className="flex-shrink-0 mt-1" size={24} style={{ color: WILMA_COLORS.mediumBlue }} />
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">ÖFFNUNGSZEITRAUM</div>
              <p className="font-bold text-xl text-gray-800 leading-snug">{market.dates}</p>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 leading-7 text-base">
              {market.description}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Footer - Fixed with Two Buttons */}
      <div className="p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0 flex gap-4">
        
        {/* Mehr erfahren Button - Primary Solid */}
        <a 
          href={isContentEnabled ? market.link : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 py-3 px-4 rounded-full font-bold text-lg transition-all shadow-sm flex items-center justify-center ${
            isContentEnabled 
              ? 'hover:shadow-md hover:brightness-110 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed pointer-events-none'
          }`}
          style={{ 
            backgroundColor: WILMA_COLORS.mediumBlue, 
            color: 'white'
          }}
        >
          <Info size={22} className="mr-2" />
          Mehr erfahren
        </a>

        {/* Route planen Button - Outline */}
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${market.lat},${market.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-full font-bold text-lg transition-all flex items-center justify-center border-2 hover:bg-slate-100"
          style={{ 
            borderColor: WILMA_COLORS.mediumBlue, 
            color: WILMA_COLORS.mediumBlue,
            backgroundColor: 'transparent'
          }}
        >
          <MapPin size={22} className="mr-2" />
          Route planen
        </a>
      </div>
    </div>
  );
};

export default MarketSidebar;