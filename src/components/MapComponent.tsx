import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { Battle } from "@/data/wwiiData";
import { cn } from "@/lib/utils";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const customFlagIcon = L.icon({
  iconUrl: '/icons/flag.svg',
  iconRetinaUrl: '/icons/flag.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

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
  deathType: 'military' | 'civilian' | 'all';
}

// Define custom interface to match expected props structure
interface CustomMapContainerProps {
  center: [number, number];
  zoom: number;
  style: { [key: string]: string };
  children?: React.ReactNode;
  className?: string;
  ref?: React.RefObject<L.Map>;
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
      {/* @ts-ignore - Ignoring type issues with MapContainer props */}
      <MapContainer
        ref={mapRef}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          // @ts-ignore
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenStreetMap</a> contributors'
        />
        <MapCenter center={center} zoom={zoom} />
        
        {battles.map((battle) => (
          /* @ts-ignore - Ignoring type issues with Marker props */
          battle.location.lat !== null && battle.location.lng !== null && (
            <Marker
              key={battle.id}
              position={[battle.location.lat, battle.location.lng] as [number, number]}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-bold text-lg">{battle.name}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(battle.startDate).toLocaleDateString()} - 
                    {battle.endDate ? new Date(battle.endDate).toLocaleDateString() : "Ongoing"}
                  </p>
                  <p className="text-sm">{battle.location.country}</p>
                  <div className="text-sm font-medium mt-1 flex items-center gap-2">
                    Type:
                    {battle.type.map(type => {
                      let iconSrc = '';
                      let altText = '';
                      if (type === 'ground') {
                        iconSrc = '/icons/ground.svg';
                        altText = 'Ground battle';
                      } else if (type === 'naval') {
                        iconSrc = '/icons/naval.svg';
                        altText = 'Naval battle';
                      } else if (type === 'air') {
                        iconSrc = '/icons/air.svg';
                        altText = 'Air battle';
                      }
                      if (!iconSrc) return null;
                      return (
                        <img key={type} src={iconSrc} alt={altText} className="w-4 h-4" title={type} />
                      );
                    })}
                  </div>
                  
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
                  
                  <div className={cn("mt-2 p-2 rounded", deathType === 'military' ? "bg-blue-50" : deathType === 'civilian' ? "bg-red-50" : "bg-purple-50")}>
                    {deathType === 'military' ? (
                      <>
                        <h4 className="font-semibold">Military Deaths</h4>
                        <p className="text-sm">Allies: {formatDeaths(battle.deaths.military.allies)}</p>
                        <p className="text-sm">Axis: {formatDeaths(battle.deaths.military.axis)}</p>
                        <p className="text-sm font-medium mt-1">
                          Total: {formatDeaths(battle.deaths.military.allies + battle.deaths.military.axis)}
                        </p>
                      </>
                    ) : deathType === 'civilian' ? (
                      <>
                        <h4 className="font-semibold">Civilian Deaths</h4>
                        <p className="text-sm font-medium">
                          Total: {formatDeaths(battle.deaths.civilian)}
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-semibold">Total Deaths</h4>
                        <p className="text-sm font-medium">
                          Total: {formatDeaths(battle.deaths.military.allies + battle.deaths.military.axis + battle.deaths.civilian)}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
