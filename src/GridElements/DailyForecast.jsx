import React from "react"
import moment from "moment"

const DailyForecast = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-3 last:border-b-0 border-b-2 border-slate-500 border-opacity-50">
      <div className="flex items-center justify-between w-[40%]">
        <p>{moment(item.dt * 1000).format("dddd")}</p>
        <div className="w-8 h-8">
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between w-[40%]">
        <p>{item.temp.min.toFixed()}°</p>
        <div className="w-14 h-1 bg-slate-500 rounded-2xl "></div>
        <p>{item.temp.max.toFixed()}°</p>
      </div>
    </div>
  )
}

export default DailyForecast
