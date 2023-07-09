import React from 'react'

const AirQuality = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="info-div">
        <i className="fa-solid fa-wind mr-1"></i>
        <p className="ml-1">Air Quality</p>
      </div>
      <div className="text-left">
        <p className="font-bold">Good</p>
        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio!
        </p>
      </div>
      <div className="gradient-bar">
        {/*gradient bar*/}
      </div>
    </div>
  )
}

export default AirQuality