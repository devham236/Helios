import React from 'react'

const AirPressure = ({pressure}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <div className="info-div w-full">
        <i className="fa-brands fa-cloudscale mr-1"></i>
        <p className="ml-1">Air pressure</p>
      </div>
      <div className="w-32 h-32 border-2 border-dashed border-slate-400 border-opacity-50 rounded-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-md font-bold">=</p>
          <p className="text-md font-bold">{pressure}</p>
          <p className="font-light text-sm">hPa</p>
        </div>
      </div>
    </div>
  );
}

export default AirPressure