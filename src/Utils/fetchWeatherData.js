import { createAsyncThunk } from "@reduxjs/toolkit"
import uuid4 from "uuid4"

const fetchWeatherData = createAsyncThunk(
  "weatherData/feathWeatherData",
  async (city) => {
    if (city === "") {
      throw new Error("Input empty")
    }
    // Get coordinates from this url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`
    const response = await fetch(url)
    const data = await response.json()

    // Get full data of city using oneCall
    const onecallurl = `https://api.openweathermap.org/data/3.0/onecall?lat=${
      data.coord.lat
    }&lon=${data.coord.lon}&exclude=minutely&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`
    const onecallresponse = await fetch(onecallurl)
    const onecalldata = await onecallresponse.json()
    const id = uuid4()

    return { ...onecalldata, cityName: data.name, id }
  }
)

export default fetchWeatherData
