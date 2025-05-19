import { useState, useMemo } from "react";
import { battles, YearlyDeaths } from "@/data/wwiiData";
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

  const panelChartDeathType: 'military' | 'civilian' | 'total' = deathType === 'all' ? 'total' : deathType;

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

  const yearlyCasualties: YearlyDeaths[] = useMemo(() => {
    const deathsByYear: { [year: number]: { allies: number; axis: number; civilian: number; total: number } } = {};

    // Initialize all years from 1939 to 1945 with zero deaths
    for (let year = 1939; year <= 1945; year++) {
      deathsByYear[year] = { allies: 0, axis: 0, civilian: 0, total: 0 };
    }

    filteredBattles.forEach(battle => {
      if (deathsByYear[battle.year]) {
        // Apply side filter to military deaths for the timeline chart
        let alliedMilitaryDeaths = battle.deaths.military.allies;
        let axisMilitaryDeaths = battle.deaths.military.axis;

        if (filters.side === 'allies') {
          axisMilitaryDeaths = 0; // Exclude Axis deaths if Allies filter is active
        } else if (filters.side === 'axis') {
          alliedMilitaryDeaths = 0; // Exclude Allied deaths if Axis filter is active
        }

        deathsByYear[battle.year].allies += alliedMilitaryDeaths;
        deathsByYear[battle.year].axis += axisMilitaryDeaths;
        deathsByYear[battle.year].civilian += battle.deaths.civilian;
        deathsByYear[battle.year].total += alliedMilitaryDeaths + axisMilitaryDeaths + battle.deaths.civilian;
      }
    });

    return Object.keys(deathsByYear)
      .map(year => {
        const yearData = deathsByYear[parseInt(year)];
        return { 
          year: parseInt(year),
          military: yearData.allies + yearData.axis, // Combine allied and axis military deaths
          civilian: yearData.civilian,
          total: yearData.total
        };
      })
      .sort((a, b) => a.year - b.year);
  }, [filteredBattles, filters.side]); // Add filters.side to dependencies

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

      <StatsPanel battles={filteredBattles} deathType={deathType} filters={filters} />
      
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
