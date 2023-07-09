import React from 'react'

const Visibility = ({visibility}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="info-div">
        <i className="fa-solid fa-eye mr-1"></i>
        <p className="ml-1">Visibility</p>
      </div>
      <p className="text-3xl">{visibility / 1000} km</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
    </div>
  )
}

export default Visibility