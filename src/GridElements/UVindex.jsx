import React from "react"

const UVindex = ({ index }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between text-left">
      <div className="info-div">
        <i className="fa-solid fa-sun mr-1"></i>
        <p className="ml-1">UV-Index</p>
      </div>
      <div>
        <p className="text-3xl">{index?.toFixed(1)}</p>
        <p className="text-lg font-medium">Low</p>
      </div>
      <div className="gradient-bar"></div>
      <p className="text-sm">Lorem, ipsum dolor.</p>
    </div>
  )
}

export default UVindex
