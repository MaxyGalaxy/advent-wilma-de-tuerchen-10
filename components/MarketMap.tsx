import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MARKETS, WILMA_COLORS } from '../constants';
import { Market } from '../types';

// SVG String for Market Stall Icon
const marketIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
  <path d="M2 7h20"/>
  <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>
</svg>
`;

// Custom Market Icon
const createCustomIcon = (isSelected: boolean) => {
  const size = 42; // Increased uniform size for all markers (Frankfurt included)
  const color = WILMA_COLORS.mediumBlue;
  
  return L.divIcon({
    className: 'custom-icon',
    html: `
      <div style="
        background-color: ${color}; 
        width: ${size}px; 
        height: ${size}px; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        transform-origin: center;
        transition: transform 0.2s ease;
        ${isSelected ? 'transform: scale(1.1); z-index: 1000;' : ''}
      ">
        <div style="display: flex; align-items: center; justify-content: center;">
          ${marketIconSvg}
        </div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2], // Center anchor
    popupAnchor: [0, -size / 2]
  });
};

interface MapProps {
  onMarketSelect: (market: Market) => void;
  selectedMarketId?: string;
}

// Component to handle map movement when selection changes
const MapController: React.FC<{ selectedMarket?: Market }> = ({ selectedMarket }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedMarket) {
      map.flyTo([selectedMarket.lat, selectedMarket.lng], 10, {
        duration: 1.2,
        easeLinearity: 0.25
      });
    }
  }, [selectedMarket, map]);

  return null;
};

const MarketMap: React.FC<MapProps> = ({ onMarketSelect, selectedMarketId }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const selectedMarket = MARKETS.find(m => m.id === selectedMarketId);

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer 
        center={[50.1109, 9.5]} // Center of Germany approx
        zoom={6} 
        style={{ height: '100%', width: '100%', background: '#f8fafc' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <MapController selectedMarket={selectedMarket} />

        {MARKETS.map((market) => (
          <Marker
            key={market.id}
            position={[market.lat, market.lng]}
            icon={createCustomIcon(market.id === selectedMarketId)}
            eventHandlers={{
              click: () => onMarketSelect(market),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MarketMap;