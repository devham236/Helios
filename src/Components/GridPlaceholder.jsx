import React from "react"

const GridPlaceholder = () => {
  return (
    <div className=" w-1/2 h-1/2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center absolute z-10">
      <div className="w-[100%] h-[100%] md:bg-slate-800 rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-center font-bold mb-4 text-slate-400 animate-pulse">
          Search for city...
        </h1>
        <i className="fa-solid fa-earth-americas text-6xl mt-4 text-slate-400 animate-pulse"></i>
      </div>
    </div>
  )
}

export default GridPlaceholder
