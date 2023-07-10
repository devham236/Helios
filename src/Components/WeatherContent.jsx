import React, {useContext} from 'react'
import { Context } from '../Context'
import HourlyForecast from '../GridElements/HourlyForecast'
import DailyForecast from '../GridElements/DailyForecast'
import AirQuality from '../GridElements/AirQuality'
import UVindex from '../GridElements/UVindex'
import SetRise from '../GridElements/SetRise'
import FeelsLike from '../GridElements/FeelsLike'
import Humidity from '../GridElements/Humidity'
import Visibility from '../GridElements/Visibility'
import Rain from '../GridElements/Rain'
import Compass from '../GridElements/Compass'
import AirPressure from '../GridElements/AirPressure'
import Map from '../GridElements/Map'
import GridPlaceholder from './GridPlaceholder'

const WeatherContent = ({activeCard}) => {
  const {opened, arrayEmpty} = useContext(Context)

  const dailyElements = activeCard.daily.map(item => (
    <DailyForecast item={item} key={item.dt}/>
  ))

  const hourlyElements = activeCard.hourly.slice(0, 24).map(item => (
    <HourlyForecast item={item} key={item.dt}/>
  ))

  return (
    <div
      className={`${opened ? "md:w-[calc(100%-20rem)] md:block sm:hidden" : "w-screen"} h-screen flex flex-col items-center duration-300 z-10`}
    >
      <div
        className={`top-part flex flex-col items-center justify-center py-5
        2xl:h-64 2xl:w-72`}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-2 ">{activeCard.cityName}</h1>
          <h1 className="text-6xl mb-2 font-extralight">
            {activeCard.current.temp.toFixed()}°C
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-1 text-lg">
            {activeCard.current.weather[0].description}
          </p>
        </div>
      </div>

      <div
        className={`bottom-part w-full flex justify-center p-5 
        2xl:h-[calc(100%-16rem)] 2xl:items-start 
        xl:auto-scroll
        lg:auto-scroll
        md:auto-scroll
        sm:auto-scroll`}
      >
        <div
          className={`grid 
              2xl:w-full 2xl:h-full gap-4 2xl:max-w-7xl 2xl:max-h-[805px] 2xl:grid-rows-4 2xl:grid-cols-6 
              xl:grid-rows-6 xl:grid-cols-4 xl:max-w-4xl
              lg:grid-rows-6 lg:grid-cols-4 lg:max-w-3xl
              md:grid-rows-6 md:grid-cols-4 md:max-w-3xl
              sm:grid-rows-6 sm:grid-cols-2 sm:max-w-2xl
              `}
        >
          <div className="grid-div md:col-span-4 md:row-span-1 sm:row-span-1 sm:col-span-2">
            <div className="text-sm h-6 opacity-50 border-b-2 border-slate-500 pb-2 mb-2 flex items-center">
              <i className="fa-solid fa-clock mr-1"></i>
              <p className="ml-1">Hourly Forecast</p>
            </div>
            <div className="HOURLY-FORECAST w-full h-[calc(95%-1.5rem)] flex max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-slate-400 ">
              {hourlyElements}
            </div>
          </div>
          <div className="grid-div md:row-span-2 md:col-span-2 sm:row-span-2 sm:col-span-2">
            <Map coord={{ lat: activeCard.lat, lng: activeCard.lon }} />
          </div>
          <div className="grid-div md:row-span-3 md:col-span-2 sm:col-span-2 sm:row-span-3">
            <div className="DAILY-FORECAST w-full h-full max-h-full overflow-y-auto flex flex-col justify-between">
              <div className="info-div border-b-2 pb-2 mb-2  border-slate-500">
                <i className="fa-solid fa-calendar-days mr-1"></i>
                <p className="text-left ml-1">10-Day-Forecast</p>
              </div>
              {dailyElements} 
            </div>
          </div>
          <div className="AIR QUALITY grid-div sm:col-span-2 sm:row-span-1 sm:min-h-[189px]">
            <AirQuality />
          </div>
          <div className="UV INDEX grid-div">
            <UVindex index={activeCard.current.uvi} />
          </div>
          <div className="SUNSET/SUNRISE grid-div">
            <SetRise
              times={{
                sunrise: activeCard.current.sunrise,
                sunset: activeCard.current.sunset,
                offset: activeCard.timezone_offset,
              }}
            />
          </div>
          <div className="grid-div flex flex-col items-center justify-between">
            <Compass
              speed={activeCard.current.wind_speed}
              degrees={activeCard.current.wind_deg}
            />
          </div>
          <div className="grid-div">
            <Rain rain={activeCard.current.rain} />
          </div>
          <div className="grid-div">
            <FeelsLike fl_temp={activeCard.current.feels_like} />
          </div>
          <div className="grid-div">
            <Humidity humidity={activeCard.current.humidity} />
          </div>
          <div className="grid-div">
            <Visibility visibility={activeCard.current.visibility} />
          </div>
          <div className="grid-div">
            <AirPressure pressure={activeCard.current.pressure} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherContent

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl 1536px	@media (min-width: 1536px) { ... }

/**
 
 */