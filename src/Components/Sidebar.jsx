import React, { useContext } from 'react'
import { Context } from '../Context'
import WeatherCard from './WeatherCard'
import CardPlaceholder from './CardPlaceholder'

const Sidebar = () => {
  const {handleChange, handleKeyDown, getWeatherData, opened, arrayEmpty, weatherArray} = useContext(Context)
  
  const weatherCards = weatherArray.map((item, index) => (
    <WeatherCard key={index} item={item}/>
  ))
  
  return (
    <div className={`${opened ? 'md:w-80 sm:w-screen sm:h-screen p-2' : 'w-0 p-0'} bg-slate-800 relative duration-300 scrollbar-thin scrollbar-thumb-slate-400 text-white max-h-screen overflow-y-auto z-20`}>
      <div className={``}>
        <h1 className="text-3xl mb-4">Weather</h1>
        <div className='flex items-center'>
          <input type="text" placeholder='Search City...' className='mr-2 focus:outline-none p-1 rounded-md placeholder:text-slate-400 bg-slate-600 opacity-50 focus:opacity-100 duration-300 ' onChange={(e) => handleChange(e)} onKeyDown={(e) => handleKeyDown(e)}/>
          <div className='bg-slate-600 p-2 rounded-md cursor-pointer opacity-50 hover:opacity-100 duration-300 flex items-center justify-center'  onClick={getWeatherData}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className='mt-5 flex flex-col'>
          {arrayEmpty ? <CardPlaceholder/> : weatherCards}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
