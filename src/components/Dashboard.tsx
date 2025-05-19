import { useState, useMemo } from "react";
import { battles } from "@/data/wwiiData";
import MapComponent from "./MapComponent";
import FilterControls, { FilterState } from "./FilterControls";
import TimelineChart from "./TimelineChart";
import StatsPanel from "./StatsPanel";

const Dashboard = () => {
  const [deathType, setDeathType] = useState<'military' | 'civilian' | 'all'>('all');
  const [filters, setFilters] = useState<FilterState>({
    side: "all",
    country: "All Countries",
    year: "all",
  });

  const panelChartDeathType: 'military' | 'civilian' = deathType === 'all' ? 'military' : deathType;

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

  const yearlyCasualties = useMemo(() => {
    const deathsByYear: { [year: number]: { allies: number; axis: number; civilian: number; total: number } } = {};

    // Initialize all years from 1939 to 1945 with zero deaths
    for (let year = 1939; year <= 1945; year++) {
      deathsByYear[year] = { allies: 0, axis: 0, civilian: 0, total: 0 };
    }

    filteredBattles.forEach(battle => {
      if (deathsByYear[battle.year]) {
        deathsByYear[battle.year].allies += battle.deaths.military.allies;
        deathsByYear[battle.year].axis += battle.deaths.military.axis;
        deathsByYear[battle.year].civilian += battle.deaths.civilian;
        deathsByYear[battle.year].total += battle.deaths.military.allies + battle.deaths.military.axis + battle.deaths.civilian;
      }
    });

    return Object.keys(deathsByYear)
      .map(year => ({ year: parseInt(year), ...deathsByYear[parseInt(year)] }))
      .sort((a, b) => a.year - b.year);
  }, [filteredBattles]);

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
        data={yearlyCasualties} 
        deathType={panelChartDeathType} 
      />
    </div>
  );
};

export default Dashboard;
