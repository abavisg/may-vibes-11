import { Battle } from "@/data/wwiiData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsPanelProps {
  battles: Battle[];
  deathType: 'military' | 'civilian' | 'all';
}

const StatsPanel = ({ battles, deathType }: StatsPanelProps) => {
  // Calculate total deaths based on current filter
  const calculateTotalDeaths = () => {
    if (deathType === 'military') {
      return battles.reduce((sum, battle) => 
        sum + battle.deaths.military.allies + battle.deaths.military.axis, 0);
    } else if (deathType === 'civilian') {
      return battles.reduce((sum, battle) => sum + battle.deaths.civilian, 0);
    } else { // deathType === 'all'
      return battles.reduce((sum, battle) => 
        sum + battle.deaths.military.allies + battle.deaths.military.axis + battle.deaths.civilian, 0);
    }
  };

  // Calculate countries involved
  const calculateCountries = () => {
    const countries = new Set<string>();
    battles.forEach(battle => {
      battle.sides.allies.forEach(country => countries.add(country));
      battle.sides.axis.forEach(country => countries.add(country));
    });
    return countries.size;
  };

  // Format large numbers
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Battles</CardTitle>
          <CardDescription>Total battles shown</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{battles.length}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">
            {deathType === 'military' ? 'Military Deaths' : deathType === 'civilian' ? 'Civilian Deaths' : 'Total Deaths'}
          </CardTitle>
          <CardDescription>Total from visible battles</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{formatNumber(calculateTotalDeaths())}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Countries</CardTitle>
          <CardDescription>Involved in visible battles</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{calculateCountries()}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsPanel;
