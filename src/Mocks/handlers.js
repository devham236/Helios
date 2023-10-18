import { rest } from "msw"
import { mockWeatherData } from "./mockResponseData"

export const handlers = [
  rest.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    (req, res, ctx) => {
      const input = req.url.searchParams.get("q")
      if (input) {
        return res(ctx.json(mockWeatherData))
      }
      return res(ctx.status(404))
    }
  ),
  rest.get(
    `https://api.openweathermap.org/data/3.0/onecall`,
    (req, res, ctx) => {
      const lat = req.url.searchParams.get("lat")
      const lon = req.url.searchParams.get("lon")
      if (lat && lon) {
        return res(
          ctx.json({
            cityName: "TestCity",
          })
        )
      }
      return res(ctx.status(404))
    }
  ),
]
