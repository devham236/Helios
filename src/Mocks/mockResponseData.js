const mockWeatherData = {
  base: "stations",
  clouds: { all: 0 },
  cod: 200,
  coord: { lon: 13.4105, lat: 52.5244 },
  dt: 1697623567,
  id: 2950159,
  main: {
    feels_like: 9.55,
    humidity: 69,
    pressure: 1013,
    temp: 10.63,
    temp_max: 12.21,
    temp_min: 8.33,
  },
  name: "Berlin",
  sys: {
    type: 2,
    id: 2011538,
    country: "DE",
    sunrise: 1697607368,
    sunset: 1697645204,
  },
  timezone: 7200,
  visibility: 10000,
  weather: [
    {
      description: "Cloudy",
      icon: "02d",
      id: 801,
      main: "Clouds",
    },
  ],
  wind: { deg: 100, speed: 3.6 },
}

export { mockWeatherData }
