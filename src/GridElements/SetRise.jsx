import React from "react"
import moment from "moment"
import getTime from "../Utils/getTime"

const SetRise = ({ times }) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-between">
      <div className="info-div">
        <i className="fa-solid fa-sun mr-1"></i>
        <p className="ml-1">Sunrise/Sunset</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <i className="fa-solid fa-sun text-3xl mr-2"></i>
          <i className="fa-solid fa-arrow-up text-3xl"></i>
        </div>
        <p className="text-2xl">{getTime(times.sunrise, times.offset)}</p>
      </div>
      <div className="w-full h-0.5 bg-white rounded-lg opacity-50"></div>
      <div className="w-full flex items-center justify-between">
        <div>
          <i className="fa-solid fa-sun text-3xl mr-2"></i>
          <i className="fa-solid fa-arrow-down text-3xl"></i>
        </div>
        <p className="text-2xl">{getTime(times.sunset, times.offset)}</p>
      </div>
    </div>
  )
}

export default SetRise
