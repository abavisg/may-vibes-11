export interface Battle {
  id: string;
  name: string;
  location: {
    lat: number | null;
    lng: number | null;
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
  type: string[];
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
    "id": "b1",
    "name": "Invasion of Poland (1939)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Poland (center approx.)"
    },
    "startDate": "1939-09-01",
    "endDate": "1939-10-06",
    "sides": {
      "allies": [
        "Poland",
        "United Kingdom**",
        "France**"
      ],
      "axis": [
        "Germany",
        "Slovakia"
      ]
    },
    "deaths": {
      "military": {
        "allies": 66000,
        "axis": 17000
      },
      "civilian": 150000
    },
    "year": 1939,
    "type": ["ground"]
  },
  {
    "id": "b2",
    "name": "Winter War (Soviet\u2013Finnish War)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Eastern Finland [oai_citation:9\u2021en.wikipedia.org](https://en.wikipedia.org/wiki/Winter_War#:~:text=Location)"
    },
    "startDate": "1939-11-30",
    "endDate": "1940-03-13",
    "sides": {
      "allies": [
        "Finland"
      ],
      "axis": [
        "Soviet Union\u2020"
      ]
    },
    "deaths": {
      "military": {
        "allies": 25904,
        "axis": 0
      },
      "civilian": 957
    },
    "year": 1939,
    "type": ["ground"]
  },
  {
    "id": "b3",
    "name": "Norwegian Campaign (Operation Weser\u00fcbung)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Denmark and Norway [oai_citation:14\u2021en.wikipedia.org](https://en.wikipedia.org/wiki/Operation_Weser%C3%BCbung#:~:text=Location)"
    },
    "startDate": "1940-04-09",
    "endDate": "1940-06-10",
    "sides": {
      "allies": [
        "Denmark",
        "Norway",
        "United Kingdom",
        "France",
        "Poland"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 4900,
        "axis": 5296
      },
      "civilian": 0
    },
    "year": 1940,
    "type": ["ground", "naval"]
  },
  {
    "id": "b4",
    "name": "Battle of France",
    "location": {
      "lat": null,
      "lng": null,
      "country": "France & Low Countries"
    },
    "startDate": "1940-05-10",
    "endDate": "1940-06-25",
    "sides": {
      "allies": [
        "France",
        "United Kingdom",
        "Belgium",
        "Netherlands"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 85000,
        "axis": 27074
      },
      "civilian": 150000
    },
    "year": 1940,
    "type": ["ground"]
  },
  {
    "id": "b5",
    "name": "Dunkirk Evacuation (Battle of Dunkirk)",
    "location": {
      "lat": 51.03,
      "lng": 2.37,
      "country": "Dunkirk"
    },
    "startDate": "1940-05-26",
    "endDate": "1940-06-04",
    "sides": {
      "allies": [
        "United Kingdom",
        "France",
        "Belgium"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 68000,
        "axis": 20000
      },
      "civilian": 0
    },
    "year": 1940,
    "type": ["ground", "naval"]
  },
  {
    "id": "b6",
    "name": "Greco-Italian War",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Greece"
    },
    "startDate": "1940-10-28",
    "endDate": "1941-04-23",
    "sides": {
      "allies": [
        "Greece",
        "United Kingdom"
      ],
      "axis": [
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 13000,
        "axis": 13755
      },
      "civilian": 0
    },
    "year": 1940,
    "type": ["ground"]
  },
  {
    "id": "b7",
    "name": "Battle of Greece (German invasion)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Greece"
    },
    "startDate": "1941-04-06",
    "endDate": "1941-04-30",
    "sides": {
      "allies": [
        "Greece",
        "United Kingdom"
      ],
      "axis": [
        "Germany",
        "Italy",
        "Bulgaria"
      ]
    },
    "deaths": {
      "military": {
        "allies": 15000,
        "axis": 2000
      },
      "civilian": 0
    },
    "year": 1941,
    "type": ["ground"]
  },
  {
    "id": "b8",
    "name": "Battle of Crete",
    "location": {
      "lat": 35.33,
      "lng": 25.13,
      "country": "Crete"
    },
    "startDate": "1941-05-20",
    "endDate": "1941-06-01",
    "sides": {
      "allies": [
        "United Kingdom",
        "Greece",
        "New Zealand",
        "Australia"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 4000,
        "axis": 4000
      },
      "civilian": 500
    },
    "year": 1941,
    "type": ["ground", "air"]
  },
  {
    "id": "b9",
    "name": "Operation Barbarossa (Invasion of USSR)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Western Soviet Union"
    },
    "startDate": "1941-06-22",
    "endDate": "1941-12-05",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany",
        "Romania",
        "Italy",
        "Finland",
        "Hungary"
      ]
    },
    "deaths": {
      "military": {
        "allies": 0,
        "axis": 200000
      },
      "civilian": 0
    },
    "year": 1941,
    "type": ["ground"]
  },
  {
    "id": "b10",
    "name": "Battle of Moscow",
    "location": {
      "lat": 55.75,
      "lng": 37.62,
      "country": "Moscow region"
    },
    "startDate": "1941-10-02",
    "endDate": "1942-01-07",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 0,
        "axis": 0
      },
      "civilian": 0
    },
    "year": 1941,
    "type": ["ground"]
  },
  {
    "id": "b11",
    "name": "Siege of Leningrad",
    "location": {
      "lat": 59.93,
      "lng": 30.33,
      "country": "Leningrad (St. Petersburg)"
    },
    "startDate": "1941-09-08",
    "endDate": "1944-01-27",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany",
        "Finland"
      ]
    },
    "deaths": {
      "military": {
        "allies": 1000000,
        "axis": 580000
      },
      "civilian": 1000000
    },
    "year": 1941,
    "type": ["ground"]
  },
  {
    "id": "b12",
    "name": "Siege of Sevastopol (1941\u201342)",
    "location": {
      "lat": 44.6,
      "lng": 33.53,
      "country": "Sevastopol"
    },
    "startDate": "1941-10-30",
    "endDate": "1942-07-04",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany",
        "Romania",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 18000,
        "axis": 4264
      },
      "civilian": 20000
    },
    "year": 1941,
    "type": ["ground", "naval"]
  },
  {
    "id": "b13",
    "name": "Battle of Stalingrad",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Stalingrad (Volgograd)"
    },
    "startDate": "1942-07-17",
    "endDate": "1943-02-02",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany",
        "Italy",
        "Romania",
        "Hungary",
        "Croatia"
      ]
    },
    "deaths": {
      "military": {
        "allies": 674000,
        "axis": 500000
      },
      "civilian": 40000
    },
    "year": 1942,
    "type": ["ground", "air"]
  },
  {
    "id": "b14",
    "name": "Battle of Gazala",
    "location": {
      "lat": 32.1,
      "lng": 23.9,
      "country": "Gazala"
    },
    "startDate": "1942-05-26",
    "endDate": "1942-06-21",
    "sides": {
      "allies": [
        "United Kingdom"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 50000,
        "axis": 3360
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground"]
  },
  {
    "id": "b15",
    "name": "First Battle of El Alamein",
    "location": {
      "lat": 30.83,
      "lng": 28.95,
      "country": "El Alamein"
    },
    "startDate": "1942-07-01",
    "endDate": "1942-07-27",
    "sides": {
      "allies": [
        "United Kingdom"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 1100,
        "axis": 1000
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground"]
  },
  {
    "id": "b16",
    "name": "Second Battle of El Alamein",
    "location": {
      "lat": 30.83,
      "lng": 28.95,
      "country": "El Alamein"
    },
    "startDate": "1942-10-23",
    "endDate": "1942-11-04",
    "sides": {
      "allies": [
        "United Kingdom",
        "Australia",
        "New Zealand",
        "South Africa"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 4800,
        "axis": 9000
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground"]
  },
  {
    "id": "b17",
    "name": "Operation Torch (Allied landings in N. Africa)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Morocco and Algeria"
    },
    "startDate": "1942-11-08",
    "endDate": "1942-11-16",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom"
      ],
      "axis": [
        "Vichy France**"
      ]
    },
    "deaths": {
      "military": {
        "allies": 500,
        "axis": 1346
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground", "naval"]
  },
  {
    "id": "b18",
    "name": "Battle of Kasserine Pass",
    "location": {
      "lat": 35.23,
      "lng": 8.65,
      "country": "Kasserine Pass"
    },
    "startDate": "1943-02-19",
    "endDate": "1943-02-25",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 1000,
        "axis": 201
      },
      "civilian": 0
    },
    "year": 1943,
    "type": ["ground"]
  },
  {
    "id": "b19",
    "name": "Battle of Kursk",
    "location": {
      "lat": 51.75,
      "lng": 36.18,
      "country": "Kursk region"
    },
    "startDate": "1943-07-05",
    "endDate": "1943-08-23",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 860000,
        "axis": 200000
      },
      "civilian": 0
    },
    "year": 1943,
    "type": ["ground", "air"]
  },
  {
    "id": "b20",
    "name": "Allied Invasion of Sicily (Operation Husky)",
    "location": {
      "lat": 37.6,
      "lng": 14.15,
      "country": "Sicily"
    },
    "startDate": "1943-07-09",
    "endDate": "1943-08-17",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom",
        "Canada"
      ],
      "axis": [
        "Germany",
        "Italy"
      ]
    },
    "deaths": {
      "military": {
        "allies": 5800,
        "axis": 9000
      },
      "civilian": 5000
    },
    "year": 1943,
    "type": ["ground", "naval", "air"]
  },
  {
    "id": "b21",
    "name": "Allied Invasion of Italy (Salerno landings)",
    "location": {
      "lat": 40.68,
      "lng": 14.76,
      "country": "Salerno"
    },
    "startDate": "1943-09-09",
    "endDate": "1943-09-16",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 2000,
        "axis": 1300
      },
      "civilian": 200
    },
    "year": 1943,
    "type": ["ground", "naval"]
  },
  {
    "id": "b22",
    "name": "Battle of Monte Cassino (Italian Campaign)",
    "location": {
      "lat": 41.49,
      "lng": 13.81,
      "country": "Monte Cassino"
    },
    "startDate": "1944-01-17",
    "endDate": "1944-05-18",
    "sides": {
      "allies": [
        "United Kingdom",
        "United States",
        "Poland",
        "France (Free)"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 55000,
        "axis": 20000
      },
      "civilian": 2000
    },
    "year": 1944,
    "type": ["ground", "air"]
  },
  {
    "id": "b23",
    "name": "Battle of Anzio",
    "location": {
      "lat": 41.45,
      "lng": 12.62,
      "country": "Anzio"
    },
    "startDate": "1944-01-22",
    "endDate": "1944-06-05",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom",
        "Canada"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 7000,
        "axis": 5500
      },
      "civilian": 0
    },
    "year": 1944,
    "type": ["ground", "naval"]
  },
  {
    "id": "b24",
    "name": "Operation Bagration",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Belarus (USSR)"
    },
    "startDate": "1944-06-22",
    "endDate": "1944-08-19",
    "sides": {
      "allies": [
        "Soviet Union"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 178000,
        "axis": 800000
      },
      "civilian": 0
    },
    "year": 1944,
    "type": ["ground"]
  },
  {
    "id": "b25",
    "name": "Normandy Landings (D-Day)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Normandy coast"
    },
    "startDate": "1944-06-06",
    "endDate": "1944-06-06",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom",
        "Canada"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 4414,
        "axis": 0
      },
      "civilian": 3000
    },
    "year": 1944,
    "type": ["ground", "naval", "air"]
  },
  {
    "id": "b26",
    "name": "Battle of Normandy (Normandy Campaign)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Normandy"
    },
    "startDate": "1944-06-06",
    "endDate": "1944-08-30",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom",
        "Canada",
        "Poland",
        "France"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 37000,
        "axis": 50000
      },
      "civilian": 20000
    },
    "year": 1944,
    "type": ["ground", "air"]
  },
  {
    "id": "b27",
    "name": "Operation Market Garden",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Netherlands (Arnhem"
    },
    "startDate": "1944-09-17",
    "endDate": "1944-09-25",
    "sides": {
      "allies": [
        "United Kingdom",
        "United States",
        "Poland",
        "Canada"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 17000,
        "axis": 8000
      },
      "civilian": 0
    },
    "year": 1944,
    "type": ["ground", "air"]
  },
  {
    "id": "b28",
    "name": "Battle of the Bulge (Ardennes)",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Ardennes (Belgium/Luxembourg)"
    },
    "startDate": "1944-12-16",
    "endDate": "1945-01-25",
    "sides": {
      "allies": [
        "United States",
        "United Kingdom",
        "Belgium"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 19000,
        "axis": 100000
      },
      "civilian": 3000
    },
    "year": 1944,
    "type": ["ground", "air"]
  },
  {
    "id": "b29",
    "name": "Battle of Berlin",
    "location": {
      "lat": 52.52,
      "lng": 13.4,
      "country": "Berlin"
    },
    "startDate": "1945-04-16",
    "endDate": "1945-05-02",
    "sides": {
      "allies": [
        "Soviet Union",
        "Poland"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 81000,
        "axis": 92000
      },
      "civilian": 125000
    },
    "year": 1945,
    "type": ["ground", "air"]
  },
  {
    "id": "b30",
    "name": "Attack on Pearl Harbor",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Pearl Harbor"
    },
    "startDate": "1941-12-07",
    "endDate": "1941-12-07",
    "sides": {
      "allies": [
        "United States"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 2403,
        "axis": 64
      },
      "civilian": 68
    },
    "year": 1941,
    "type": ["air", "naval"]
  },
  {
    "id": "b31",
    "name": "Battle of Hong Kong",
    "location": {
      "lat": 22.33,
      "lng": 114.18,
      "country": "Hong Kong"
    },
    "startDate": "1941-12-08",
    "endDate": "1941-12-25",
    "sides": {
      "allies": [
        "United Kingdom",
        "Canada"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 2113,
        "axis": 1996
      },
      "civilian": 0
    },
    "year": 1941,
    "type": ["ground"]
  },
  {
    "id": "b32",
    "name": "Battle of Singapore",
    "location": {
      "lat": 1.35,
      "lng": 103.82,
      "country": "Singapore"
    },
    "startDate": "1942-02-07",
    "endDate": "1942-02-15",
    "sides": {
      "allies": [
        "United Kingdom",
        "Australia"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 5000,
        "axis": 1700
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground"]
  },
  {
    "id": "b33",
    "name": "Battle of the Java Sea",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Java Sea"
    },
    "startDate": "1942-02-27",
    "endDate": "1942-02-27",
    "sides": {
      "allies": [
        "Netherlands",
        "United Kingdom",
        "United States",
        "Australia"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 2300,
        "axis": 36
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["naval"]
  },
  {
    "id": "b34",
    "name": "Battle of the Coral Sea",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Coral Sea (Pacific Ocean)"
    },
    "startDate": "1942-05-04",
    "endDate": "1942-05-08",
    "sides": {
      "allies": [
        "United States",
        "Australia"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 656,
        "axis": 966
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["naval", "air"]
  },
  {
    "id": "b35",
    "name": "Battle of Midway",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Midway Atoll [oai_citation:110\u2021en.wikipedia.org](https://en.wikipedia.org/wiki/Battle_of_Midway#:~:text=Date%204%E2%80%937%20June%201942%20Location)"
    },
    "startDate": "1942-06-04",
    "endDate": "1942-06-07",
    "sides": {
      "allies": [
        "United States"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 307,
        "axis": 3057
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["naval", "air"]
  },
  {
    "id": "b36",
    "name": "Guadalcanal Campaign",
    "location": {
      "lat": -9.43,
      "lng": 160.05,
      "country": "Guadalcanal"
    },
    "startDate": "1942-08-07",
    "endDate": "1943-02-09",
    "sides": {
      "allies": [
        "United States",
        "Allied Pacific forces"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 7100,
        "axis": 24000
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground", "naval", "air"]
  },
  {
    "id": "b37",
    "name": "Battle of Bataan",
    "location": {
      "lat": 14.5,
      "lng": 120.3,
      "country": "Bataan Peninsula"
    },
    "startDate": "1942-01-07",
    "endDate": "1942-04-09",
    "sides": {
      "allies": [
        "United States",
        "Philippines"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 10000,
        "axis": 7000
      },
      "civilian": 0
    },
    "year": 1942,
    "type": ["ground"]
  },
  {
    "id": "b38",
    "name": "Battle of Leyte Gulf",
    "location": {
      "lat": 11.0,
      "lng": 127.0,
      "country": "Philippine Sea (off Leyte)"
    },
    "startDate": "1944-10-23",
    "endDate": "1944-10-26",
    "sides": {
      "allies": [
        "United States",
        "Australia"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 3000,
        "axis": 12000
      },
      "civilian": 0
    },
    "year": 1944,
    "type": ["naval", "air"]
  },
  {
    "id": "b39",
    "name": "Battle of the Philippine Sea",
    "location": {
      "lat": 15.0,
      "lng": 135.0,
      "country": "Philippine Sea (Pacific Ocean)"
    },
    "startDate": "1944-06-19",
    "endDate": "1944-06-20",
    "sides": {
      "allies": [
        "United States"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 109,
        "axis": 3000
      },
      "civilian": 0
    },
    "year": 1944,
    "type": ["naval", "air"]
  },
  {
    "id": "b40",
    "name": "Battle of Iwo Jima",
    "location": {
      "lat": 24.78,
      "lng": 141.32,
      "country": "Iwo Jima"
    },
    "startDate": "1945-02-19",
    "endDate": "1945-03-26",
    "sides": {
      "allies": [
        "United States"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 6821,
        "axis": 18375
      },
      "civilian": 0
    },
    "year": 1945,
    "type": ["ground", "naval", "air"]
  },
  {
    "id": "b41",
    "name": "Battle of Okinawa",
    "location": {
      "lat": 26.5,
      "lng": 128.0,
      "country": "Okinawa"
    },
    "startDate": "1945-04-01",
    "endDate": "1945-06-22",
    "sides": {
      "allies": [
        "United States"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 0,
        "axis": 110000
      },
      "civilian": 100000
    },
    "year": 1945,
    "type": ["ground", "naval", "air"]
  },
  {
    "id": "b42",
    "name": "Battle of Imphal & Kohima",
    "location": {
      "lat": null,
      "lng": null,
      "country": "Imphal & Kohima"
    },
    "startDate": "1944-03-08",
    "endDate": "1944-07-18",
    "sides": {
      "allies": [
        "United Kingdom (India)"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 17500,
        "axis": 30000
      },
      "civilian": 0
    },
    "year": 1944,
    "type": ["ground"]
  },
  {
    "id": "b43",
    "name": "Battle of Changsha (1939)",
    "location": {
      "lat": 28.2,
      "lng": 112.97,
      "country": "Changsha"
    },
    "startDate": "1939-09-17",
    "endDate": "1939-10-06",
    "sides": {
      "allies": [
        "China"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 35000,
        "axis": 20000
      },
      "civilian": 0
    },
    "year": 1939,
    "type": ["ground"]
  },
  {
    "id": "b44",
    "name": "Battle of Khalkhin Gol",
    "location": {
      "lat": 47.9,
      "lng": 118.7,
      "country": "Khalkhin Gol (Nomonhan)"
    },
    "startDate": "1939-05-11",
    "endDate": "1939-09-16",
    "sides": {
      "allies": [
        "Soviet Union",
        "Mongolia"
      ],
      "axis": [
        "Japan (Manchukuo)"
      ]
    },
    "deaths": {
      "military": {
        "allies": 9700,
        "axis": 8400
      },
      "civilian": 0
    },
    "year": 1939,
    "type": ["ground", "air"]
  },
  {
    "id": "b45",
    "name": "Battle of Tarawa",
    "location": {
      "lat": 1.35,
      "lng": 172.92,
      "country": "Tarawa (Betio)"
    },
    "startDate": "1943-11-20",
    "endDate": "1943-11-23",
    "sides": {
      "allies": [
        "United States"
      ],
      "axis": [
        "Japan"
      ]
    },
    "deaths": {
      "military": {
        "allies": 1009,
        "axis": 4690
      },
      "civilian": 1000
    },
    "year": 1943,
    "type": ["ground", "naval"]
  },
  {
    "id": "b46",
    "name": "Battle of the River Plate",
    "location": {
      "lat": null,
      "lng": null,
      "country": "R\u00edo de la Plata (off Uruguay/Argentina)"
    },
    "startDate": "1939-12-13",
    "endDate": "1939-12-13",
    "sides": {
      "allies": [
        "United Kingdom",
        "New Zealand"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 72,
        "axis": 36
      },
      "civilian": 0
    },
    "year": 1939,
    "type": ["naval"]
  },
  {
    "id": "b47",
    "name": "Battle of Narvik",
    "location": {
      "lat": 68.44,
      "lng": 17.43,
      "country": "Narvik"
    },
    "startDate": "1940-04-09",
    "endDate": "1940-06-08",
    "sides": {
      "allies": [
        "Norway",
        "United Kingdom",
        "France",
        "Poland"
      ],
      "axis": [
        "Germany"
      ]
    },
    "deaths": {
      "military": {
        "allies": 1700,
        "axis": 2500
      },
      "civilian": 100
    },
    "year": 1940,
    "type": ["ground", "naval"]
  }
]

// Countries data for filtering
export const countries = [
  "All Countries",
  "Australia",
  "Belgium",
  "Bulgaria",
  "Canada",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Italy",
  "Japan",
  "Netherlands",
  "New Zealand",
  "Poland",
  "Romania",
  "Soviet Union",
  "United Kingdom",
  "United States"
];
