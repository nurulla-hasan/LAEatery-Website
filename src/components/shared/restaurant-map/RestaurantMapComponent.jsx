"use client"

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// for markar icon fix
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: '/marker-shadow.png',
  shadowSize: [41, 41]
});


const RestaurantMapComponent = ({ address, lat, lng, name }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // cleanup function
    return () => {
      setIsMounted(false);
    };
  }, []);

  // default location (if lat, lng not give)
  const position = [lat || 34.0522, lng || -118.2437]; // Los Angeles coordinates
  
  if (!isMounted) {
    return <div className="w-full h-48 bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="w-full h-72 overflow-hidden rounded-lg">
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            <div>
              <strong>{name}</strong><br />
              {address}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RestaurantMapComponent;