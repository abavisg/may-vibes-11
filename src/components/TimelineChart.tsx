
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import type { YearlyDeaths } from "@/data/wwiiData";

interface TimelineChartProps {
  data: YearlyDeaths[];
  deathType: 'military' | 'civilian' | 'total';
}

const TimelineChart = ({ data, deathType }: TimelineChartProps) => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  // Format numbers in tooltip
  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 shadow-lg rounded-md">
          <p className="font-bold">{`Year: ${label}`}</p>
          {deathType === 'total' ? (
            <>
              <p className="text-blue-600">{`Military: ${formatNumber(payload[0].payload.military)}`}</p>
              <p className="text-red-600">{`Civilian: ${formatNumber(payload[0].payload.civilian)}`}</p>
              <p className="font-semibold border-t border-gray-200 mt-2 pt-2">
                {`Total: ${formatNumber(payload[0].payload.total)}`}
              </p>
            </>
          ) : (
            <p className={deathType === 'military' ? "text-blue-600" : "text-red-600"}>
              {`${deathType === 'military' ? 'Military' : 'Civilian'}: ${formatNumber(payload[0].value)}`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-6">
      <h3 className="text-lg font-semibold mb-4">WWII Casualties Timeline (1939-1945)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            onMouseMove={(data) => {
              if (data.activeTooltipIndex !== null) {
                const year = data.activeLabel;
                setActiveYear(Number(year));
              }
            }}
            onMouseLeave={() => setActiveYear(null)}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" />
            <YAxis 
              tickFormatter={(value) => value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : `${(value / 1000).toFixed(0)}K`} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {deathType === 'total' ? (
              <>
                <Bar dataKey="military" fill="#3b82f6" name="Military Deaths" stackId="a" />
                <Bar dataKey="civilian" fill="#ef4444" name="Civilian Deaths" stackId="a" />
              </>
            ) : (
              <Bar 
                dataKey={deathType} 
                fill={deathType === 'military' ? '#3b82f6' : '#ef4444'} 
                name={`${deathType === 'military' ? 'Military' : 'Civilian'} Deaths`} 
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-sm text-gray-500 mt-2 text-center">
        Hover over bars to see detailed casualties for each year
      </div>
    </div>
  );
};

export default TimelineChart;
