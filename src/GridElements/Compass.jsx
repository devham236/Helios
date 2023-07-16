import React from "react"
import getSectors from "../Utils/getSectors"

const Compass = ({ speed, degrees }) => {
  const sectors = getSectors(degrees)

  return (
    <>
      <div className="info-div w-full">
        <i className="fa-solid fa-wind mr-1"></i>
        <p className="ml-1">Wind</p>
      </div>

      <div className=" w-32 h-32 border-opacity-50 rounded-full border-2 border-slate-400 flex items-center justify-center relative">
        <div className="w-16 h-16 bg-slate-600 shadow-lg rounded-full flex flex-col items-center justify-center">
          <p className="text-xs font-bold">{(speed * 3.6).toFixed()} km/h</p>
          <p className="text-xs font-light">{sectors}</p>
        </div>

        <div
          className={`compass-sector -top-2 flex-col justify-center text-xs ${
            sectors.includes("N") ? "opacity-100" : ""
          }`}
        >
          <i className="fa-solid fa-caret-up"></i>
          <p>N</p>
        </div>

        <div
          className={`compass-sector -right-1 text-xs ${
            sectors.includes("E") ? "opacity-100" : ""
          }`}
        >
          <p className="mr-2">E</p>
          <i className="fa-solid fa-caret-right"></i>
        </div>

        <div
          className={`compass-sector -bottom-2 text-xs flex-col justify-center ${
            sectors.includes("S") ? "opacity-100" : ""
          }`}
        >
          <p className="">S</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>

        <div
          className={`compass-sector -left-1 text-xs justify-center ${
            sectors.includes("W") ? "opacity-100" : ""
          }`}
        >
          <i className="fa-solid fa-caret-left"></i>
          <p className="ml-1">W</p>
        </div>
      </div>
    </>
  )
}

export default Compass
