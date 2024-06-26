import React from "react"
import {
  HourlyForecast,
  DailyForecast,
  AirQuality,
  UVindex,
  SetRise,
  FeelsLike,
  Humidity,
  Visibility,
  Rain,
  Compass,
  AirPressure,
  Map,
} from "../GridElements/index"
import { AnimatePresence, motion } from "framer-motion"
import { gridContainer, gridItem } from "../Variants/grid"
import { useSelector } from "react-redux"

const WeatherContent = ({ activeCard }) => {
  const { sidebarOpened } = useSelector((state) => state.sidebar)

  const dailyElements = activeCard.daily.map((item) => (
    <DailyForecast item={item} key={item.dt} />
  ))

  const hourlyElements = activeCard.hourly
    .slice(0, 24)
    .map((item) => <HourlyForecast item={item} key={item.dt} />)

  return (
    <div
      className={`${
        sidebarOpened
          ? "md:w-[calc(100%-20rem)] md:block sm:hidden"
          : "w-screen"
      }  h-screen flex flex-col items-center duration-300 z-10`}
    >
      {/*Header*/}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
        className={`top-part flex flex-col items-center justify-center py-5
        2xl:h-64 2xl:w-full`}
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
      </motion.div>

      {/*Grid*/}
      <div
        className={`bottom-part w-full flex justify-center p-5 
        2xl:h-[calc(100%-16rem)] max-h-[calc(100%-13rem)]  2xl:items-start 
        xl:auto-scroll
        lg:auto-scroll
        md:auto-scroll
        sm:auto-scroll`}
      >
        <AnimatePresence>
          <motion.div
            variants={gridContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`grid 
              2xl:w-full 2xl:h-full gap-2 2xl:max-w-7xl 2xl:max-h-[805px] 2xl:grid-rows-4 2xl:grid-cols-6 
              xl:grid-rows-6 xl:grid-cols-4 xl:max-w-4xl
              lg:grid-rows-6 lg:grid-cols-4 lg:max-w-3xl
              md:grid-rows-6 md:grid-cols-4 md:max-w-3xl
              sm:grid-rows-6 sm:grid-cols-2 sm:max-w-2xl
              `}
          >
            <motion.div
              variants={gridItem}
              className="grid-div md:col-span-4 md:row-span-1 sm:row-span-1 sm:col-span-2"
            >
              <div className="text-sm h-6 opacity-50 border-b-2 border-slate-500 pb-2 mb-2 flex items-center">
                <i className="fa-solid fa-clock mr-1"></i>
                <p className="ml-1">Hourly Forecast</p>
              </div>
              <div className="HOURLY-FORECAST w-full h-[calc(95%-1.5rem)] flex max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-slate-400 ">
                {hourlyElements}
              </div>
            </motion.div>
            <motion.div
              variants={gridItem}
              className="grid-div md:row-span-2 md:col-span-2 sm:row-span-2 sm:col-span-2"
            >
              <Map coord={{ lat: activeCard.lat, lng: activeCard.lon }} />
            </motion.div>
            <motion.div
              variants={gridItem}
              className="grid-div md:row-span-3 md:col-span-2 sm:col-span-2 sm:row-span-3"
            >
              <div className="DAILY-FORECAST w-full h-full max-h-full overflow-y-auto flex flex-col justify-between">
                <div className="info-div border-b-2 pb-2 mb-2  border-slate-500">
                  <i className="fa-solid fa-calendar-days mr-1"></i>
                  <p className="text-left ml-1">10-Day-Forecast</p>
                </div>
                {dailyElements}
              </div>
            </motion.div>
            <motion.div
              variants={gridItem}
              className="grid-div AIR QUALITY sm:col-span-2 sm:row-span-1 sm:min-h-[189px] lg:min-h-0"
            >
              <AirQuality />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div UV INDEX">
              <UVindex index={activeCard.current.uvi} />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div SUNSET/SUNRISE">
              <SetRise
                times={{
                  sunrise: activeCard.current.sunrise,
                  sunset: activeCard.current.sunset,
                  offset: activeCard.timezone_offset,
                }}
              />
            </motion.div>
            <motion.div
              variants={gridItem}
              className="grid-div flex flex-col items-center justify-between"
            >
              <Compass
                speed={activeCard.current.wind_speed}
                degrees={activeCard.current.wind_deg}
              />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div">
              <Rain rain={activeCard.current.rain} />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div">
              <FeelsLike fl_temp={activeCard.current.feels_like} />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div">
              <Humidity humidity={activeCard.current.humidity} />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div">
              <Visibility visibility={activeCard.current.visibility} />
            </motion.div>
            <motion.div variants={gridItem} className="grid-div">
              <AirPressure pressure={activeCard.current.pressure} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WeatherContent
