import React from 'react'

const Humidity = ({humidity}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="info-div">
        <i className="fa-solid fa-water mr-1"></i>
        <p className="ml-1">Humidity</p>
      </div>
      <p className="text-3xl">{humidity}%</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
    </div>
  )
}

export default Humidity