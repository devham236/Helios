import React from "react"
import moment from "moment"

const HourlyForecast = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-between mr-10 ">
      <p className="text-xl">{moment(item.dt * 1000).format("HH:mm")}</p>
      <div className="w-12 h-12">
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <p className="text-xl">{item.temp.toFixed()}°</p>
    </div>
  )
}

export default HourlyForecast
