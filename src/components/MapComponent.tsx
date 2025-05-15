
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { Battle } from "@/data/wwiiData";
import { cn } from "@/lib/utils";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// Define marker size based on death count
const getMarkerSize = (deaths: number): number => {
  if (deaths > 500000) return 30;
  if (deaths > 100000) return 25;
  if (deaths > 50000) return 20;
  if (deaths > 10000) return 15;
  return 10;
};

// Define marker color based on sides
const getMarkerColor = (battle: Battle): string => {
  const alliesCount = battle.sides.allies.length;
  const axisCount = battle.sides.axis.length;
  
  if (alliesCount > 0 && axisCount === 0) return "#3b82f6"; // Allies blue
  if (axisCount > 0 && alliesCount === 0) return "#ef4444"; // Axis red
  return "#8b5cf6"; // Both sides purple
};

// Custom marker icon
const createMarkerIcon = (battle: Battle, deathType: string) => {
  const deaths = deathType === 'civilian' 
    ? battle.deaths.civilian
    : battle.deaths.military.allies + battle.deaths.military.axis;
  
  const size = getMarkerSize(deaths);
  const color = getMarkerColor(battle);
  
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background-color: ${color};
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      opacity: 0.8;
      border: 2px solid #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
};

interface MapCenterProps {
  center: [number, number];
  zoom: number;
}

// Component to update map view when center prop changes
const MapCenter = ({ center, zoom }: MapCenterProps) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

interface MapComponentProps {
  battles: Battle[];
  deathType: 'military' | 'civilian';
}

const MapComponent = ({ battles, deathType }: MapComponentProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const [center] = useState<[number, number]>([30, 0]);
  const [zoom] = useState(2);

  // Format death numbers
  const formatDeaths = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="h-[60vh] md:h-[70vh] w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <MapContainer
        ref={mapRef}
        style={{ height: "100%", width: "100%" }}
        zoom={2}
        center={[30, 0] as [number, number]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapCenter center={center} zoom={zoom} />
        
        {battles.map((battle) => (
          <Marker
            key={battle.id}
            position={[battle.location.lat, battle.location.lng] as [number, number]}
            icon={createMarkerIcon(battle, deathType)}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-lg">{battle.name}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(battle.startDate).toLocaleDateString()} - 
                  {battle.endDate ? new Date(battle.endDate).toLocaleDateString() : "Ongoing"}
                </p>
                <p className="text-sm">{battle.location.country}</p>
                
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-sm font-medium">Allies: {battle.sides.allies.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="text-sm font-medium">Axis: {battle.sides.axis.join(", ")}</span>
                  </div>
                </div>
                
                <div className={cn("mt-2 p-2 rounded", deathType === 'military' ? "bg-blue-50" : "bg-red-50")}>
                  {deathType === 'military' ? (
                    <>
                      <h4 className="font-semibold">Military Deaths</h4>
                      <p className="text-sm">Allies: {formatDeaths(battle.deaths.military.allies)}</p>
                      <p className="text-sm">Axis: {formatDeaths(battle.deaths.military.axis)}</p>
                      <p className="text-sm font-medium mt-1">
                        Total: {formatDeaths(battle.deaths.military.allies + battle.deaths.military.axis)}
                      </p>
                    </>
                  ) : (
                    <>
                      <h4 className="font-semibold">Civilian Deaths</h4>
                      <p className="text-sm font-medium">
                        Total: {formatDeaths(battle.deaths.civilian)}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
