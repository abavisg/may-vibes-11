import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries } from "@/data/wwiiData";

interface FilterControlsProps {
  onFilterChange: (filters: FilterState) => void;
  deathType: 'military' | 'civilian' | 'all';
  onDeathTypeChange: (type: 'military' | 'civilian' | 'all') => void;
}

export interface FilterState {
  side: string;
  country: string;
  year: string;
}

const FilterControls = ({ onFilterChange, deathType, onDeathTypeChange }: FilterControlsProps) => {
  const [filters, setFilters] = useState<FilterState>({
    side: "all",
    country: "All Countries",
    year: "all"
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const years = ["all", "1939", "1940", "1941", "1942", "1943", "1944", "1945"];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="mr-4">
            <Label htmlFor="casualty-type" className="mr-2 mb-1 block">Casualty Type</Label>
            <Select
              value={deathType}
              onValueChange={(value) => onDeathTypeChange(value as 'military' | 'civilian' | 'all')}
            >
              <SelectTrigger id="casualty-type" className="w-[180px]">
                <SelectValue placeholder="Select casualty type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="military">Military Deaths</SelectItem>
                <SelectItem value="civilian">Civilian Deaths</SelectItem>
                <SelectItem value="all">All Deaths</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="side-filter" className="mr-2 mb-1 block">Side</Label>
            <Select 
              value={filters.side} 
              onValueChange={(value) => handleFilterChange('side', value)}
            >
              <SelectTrigger id="side-filter" className="w-[180px]">
                <SelectValue placeholder="Filter by side" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sides</SelectItem>
                <SelectItem value="allies">Allies</SelectItem>
                <SelectItem value="axis">Axis</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="country-filter" className="mr-2 mb-1 block">Country</Label>
            <Select 
              value={filters.country} 
              onValueChange={(value) => handleFilterChange('country', value)}
            >
              <SelectTrigger id="country-filter" className="w-[180px]">
                <SelectValue placeholder="Filter by country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="year-filter" className="mr-2 mb-1 block">Year</Label>
          <Select 
            value={filters.year} 
            onValueChange={(value) => handleFilterChange('year', value)}
          >
            <SelectTrigger id="year-filter" className="w-[180px]">
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year === "all" ? "All Years" : year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
