import React from "react"

const Rain = ({ rain }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="info-div">
        <i className="fa-solid fa-droplet mr-1"></i>
        <p className="ml-1">Amount of Rain</p>
      </div>
      <div>
        <p className="text-3xl">{rain ? rain["1h"].toFixed() : "0"} mm</p>
        <p>in the last</p>
        <p>Hour.</p>
      </div>
      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Rain
