import React from "react"
import WeatherCard from "./WeatherCard"
import CardPlaceholder from "./CardPlaceholder"
import { motion, AnimatePresence } from "framer-motion"
import { cardContainer } from "../Variants/weatherCard"
import useSidebar from "../Hooks/useSidebar"

const Sidebar = () => {
  const {
    handleChange,
    handleKeyDown,
    getWeatherData,
    opened,
    arrayEmpty,
    weatherArray,
  } = useSidebar()

  const weatherCards = weatherArray.map((item, index) => (
    <WeatherCard key={index} item={item} />
  ))

  return (
    <div
      data-testid="sidebar-container"
      className={`${
        opened ? "sidebar-opened" : "sidebar-closed"
      } bg-slate-800 relative duration-300 scrollbar-thin scrollbar-thumb-slate-400 text-white max-h-screen overflow-y-auto z-20`}
    >
      <div className={``}>
        <h1 className="text-3xl mb-4">Weather</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search City..."
            className="mr-2 focus:outline-none p-1 rounded-md placeholder:text-slate-400 bg-slate-600 opacity-50 focus:opacity-100 duration-300 "
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <div
            className="bg-slate-600 p-2 rounded-md cursor-pointer opacity-50 hover:opacity-100 duration-300 flex items-center justify-center"
            onClick={getWeatherData}
          >
            <i
              data-testid="search-icon"
              className="fa-solid fa-magnifying-glass"
            ></i>
          </div>
        </div>
        {arrayEmpty ? (
          <CardPlaceholder />
        ) : (
          <AnimatePresence>
            <motion.div
              variants={cardContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-5 flex flex-col"
              data-testid="weather-cards"
            >
              {weatherCards}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

export default Sidebar
