export interface Battle {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
    country: string;
  };
  startDate: string;
  endDate: string | null;
  sides: {
    allies: string[];
    axis: string[];
  };
  deaths: {
    military: {
      allies: number;
      axis: number;
    };
    civilian: number;
  };
  year: number;
}

// Calculate annual death totals
export interface YearlyDeaths {
  year: number;
  military: number;
  civilian: number;
  total: number;
}

export const battles: Battle[] = [
  {
    id: "b1",
    name: "Battle of Britain",
    location: {
      lat: 51.5074,
      lng: -0.1278,
      country: "United Kingdom"
    },
    startDate: "1940-07-10",
    endDate: "1940-10-31",
    sides: {
      allies: ["United Kingdom"],
      axis: ["Germany", "Italy"]
    },
    deaths: {
      military: {
        allies: 1542,
        axis: 2698
      },
      civilian: 14286
    },
    year: 1940
  },
  {
    id: "b2",
    name: "Battle of Stalingrad",
    location: {
      lat: 48.7,
      lng: 44.5,
      country: "Soviet Union"
    },
    startDate: "1942-08-23",
    endDate: "1943-02-02",
    sides: {
      allies: ["Soviet Union"],
      axis: ["Germany", "Romania", "Italy", "Hungary"]
    },
    deaths: {
      military: {
        allies: 478741,
        axis: 647300
      },
      civilian: 40000
    },
    year: 1942
  },
  {
    id: "b3",
    name: "Battle of Midway",
    location: {
      lat: 28.2,
      lng: -177.3,
      country: "Pacific Ocean"
    },
    startDate: "1942-06-04",
    endDate: "1942-06-07",
    sides: {
      allies: ["United States"],
      axis: ["Japan"]
    },
    deaths: {
      military: {
        allies: 307,
        axis: 3057
      },
      civilian: 0
    },
    year: 1942
  },
  {
    id: "b4",
    name: "D-Day (Normandy Landings)",
    location: {
      lat: 49.4144,
      lng: -0.8322,
      country: "France"
    },
    startDate: "1944-06-06",
    endDate: "1944-08-25",
    sides: {
      allies: ["United States", "United Kingdom", "Canada", "France"],
      axis: ["Germany"]
    },
    deaths: {
      military: {
        allies: 4414,
        axis: 9000
      },
      civilian: 3000
    },
    year: 1944
  },
  {
    id: "b5",
    name: "Battle of Iwo Jima",
    location: {
      lat: 24.7779,
      lng: 141.3044,
      country: "Japan"
    },
    startDate: "1945-02-19",
    endDate: "1945-03-26",
    sides: {
      allies: ["United States"],
      axis: ["Japan"]
    },
    deaths: {
      military: {
        allies: 6821,
        axis: 18375
      },
      civilian: 0
    },
    year: 1945
  },
  {
    id: "b6",
    name: "Battle of Berlin",
    location: {
      lat: 52.5200,
      lng: 13.4050,
      country: "Germany"
    },
    startDate: "1945-04-16",
    endDate: "1945-05-02",
    sides: {
      allies: ["Soviet Union", "Poland"],
      axis: ["Germany"]
    },
    deaths: {
      military: {
        allies: 81116,
        axis: 92000
      },
      civilian: 125000
    },
    year: 1945
  },
  {
    id: "b7",
    name: "Battle of Moscow",
    location: {
      lat: 55.7558,
      lng: 37.6173,
      country: "Soviet Union"
    },
    startDate: "1941-10-02",
    endDate: "1942-01-07",
    sides: {
      allies: ["Soviet Union"],
      axis: ["Germany"]
    },
    deaths: {
      military: {
        allies: 380000,
        axis: 250000
      },
      civilian: 26000
    },
    year: 1941
  },
  {
    id: "b8",
    name: "Pearl Harbor Attack",
    location: {
      lat: 21.3478,
      lng: -157.9383,
      country: "United States"
    },
    startDate: "1941-12-07",
    endDate: "1941-12-07",
    sides: {
      allies: ["United States"],
      axis: ["Japan"]
    },
    deaths: {
      military: {
        allies: 2403,
        axis: 64
      },
      civilian: 68
    },
    year: 1941
  },
  {
    id: "b9",
    name: "Battle of the Bulge",
    location: {
      lat: 50.2503,
      lng: 5.6667,
      country: "Belgium"
    },
    startDate: "1944-12-16",
    endDate: "1945-01-25",
    sides: {
      allies: ["United States", "United Kingdom", "France", "Belgium"],
      axis: ["Germany"]
    },
    deaths: {
      military: {
        allies: 19276,
        axis: 15000
      },
      civilian: 3000
    },
    year: 1944
  },
  {
    id: "b10",
    name: "Battle of Okinawa",
    location: {
      lat: 26.3344,
      lng: 127.8056,
      country: "Japan"
    },
    startDate: "1945-04-01",
    endDate: "1945-06-22",
    sides: {
      allies: ["United States"],
      axis: ["Japan"]
    },
    deaths: {
      military: {
        allies: 14009,
        axis: 77166
      },
      civilian: 142058
    },
    year: 1945
  }
];

// Calculate annual death totals
export const yearlyDeaths: YearlyDeaths[] = [
  { year: 1939, military: 120000, civilian: 18000, total: 138000 },
  { year: 1940, military: 280000, civilian: 460000, total: 740000 },
  { year: 1941, military: 1500000, civilian: 900000, total: 2400000 },
  { year: 1942, military: 2800000, civilian: 1800000, total: 4600000 },
  { year: 1943, military: 3900000, civilian: 2400000, total: 6300000 },
  { year: 1944, military: 5100000, civilian: 3800000, total: 8900000 },
  { year: 1945, military: 2900000, civilian: 4600000, total: 7500000 }
];

// Countries data for filtering
export const countries = [
  "All Countries",
  "United States", 
  "United Kingdom", 
  "France", 
  "Soviet Union", 
  "Poland",
  "Canada", 
  "Belgium",
  "Germany", 
  "Italy", 
  "Japan", 
  "Romania", 
  "Hungary"
];
