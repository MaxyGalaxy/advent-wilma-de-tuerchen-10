import React, { useState } from 'react';
import MarketMap from './components/MarketMap';
import MarketSidebar from './components/MarketSidebar';
import { Market } from './types';

const App: React.FC = () => {
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);

  const handleMarketSelect = (market: Market) => {
    setSelectedMarket(market);
  };

  const handleCloseSidebar = () => {
    setSelectedMarket(null);
  };

  return (
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden font-sans">
      
      {/* Map Layer - Always Full Screen in Background */}
      <div className="absolute inset-0 z-0">
        <MarketMap 
          onMarketSelect={handleMarketSelect}
          selectedMarketId={selectedMarket?.id}
        />
      </div>

      {/* Sidebar - Overlay on the Right */}
      <div 
        className={`
          absolute top-0 right-0 z-20 h-full w-full md:w-[420px] 
          bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
          ${selectedMarket ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <MarketSidebar 
          market={selectedMarket} 
          onClose={handleCloseSidebar} 
        />
      </div>
      
    </div>
  );
};

export default App;