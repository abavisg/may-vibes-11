
import { useState, useMemo } from "react";
import { battles, yearlyDeaths } from "@/data/wwiiData";
import MapComponent from "./MapComponent";
import FilterControls, { FilterState } from "./FilterControls";
import TimelineChart from "./TimelineChart";
import StatsPanel from "./StatsPanel";

const Dashboard = () => {
  const [deathType, setDeathType] = useState<'military' | 'civilian'>('military');
  const [filters, setFilters] = useState<FilterState>({
    side: "all",
    country: "All Countries",
    year: "all",
  });

  // Apply filters to battles
  const filteredBattles = useMemo(() => {
    return battles.filter(battle => {
      // Filter by year
      if (filters.year !== "all" && battle.year !== parseInt(filters.year)) {
        return false;
      }

      // Filter by side
      if (filters.side === "allies" && battle.sides.allies.length === 0) {
        return false;
      }
      if (filters.side === "axis" && battle.sides.axis.length === 0) {
        return false;
      }

      // Filter by country
      if (filters.country !== "All Countries") {
        const isInvolved = 
          battle.sides.allies.includes(filters.country) || 
          battle.sides.axis.includes(filters.country) ||
          battle.location.country === filters.country;
        
        if (!isInvolved) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">World War II Battle Map</h1>
        <p className="text-gray-600">Interactive visualization of major WWII battles and casualties (1939-1945)</p>
      </div>

      <FilterControls 
        onFilterChange={setFilters} 
        deathType={deathType} 
        onDeathTypeChange={setDeathType} 
      />

      <StatsPanel battles={filteredBattles} deathType={deathType} />
      
      <MapComponent 
        battles={filteredBattles}
        deathType={deathType}
      />

      <TimelineChart 
        data={yearlyDeaths} 
        deathType={deathType === 'military' ? 'military' : 'civilian'} 
      />

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Note: This visualization uses mock sample data for educational purposes.</p>
        <p className="mt-1">
          Data represents a selected subset of major battles and approximate casualty figures.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
