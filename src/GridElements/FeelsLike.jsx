import React from 'react'

const FeelsLike = ({fl_temp}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="info-div">
        <i className="fa-solid fa-temperature-low mr-1"></i>
        <p className="ml-1">Feels Like</p>
      </div>
      <p className="text-3xl">{fl_temp?.toFixed()}°</p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
    </div>
  );
}

export default FeelsLike