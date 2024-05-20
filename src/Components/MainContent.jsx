import React, { useEffect } from "react"
import WeatherContent from "./WeatherContent"
import Sidebar from "./Sidebar"
import Modal from "./Modal"
import GridPlaceholder from "./GridPlaceholder"
import { AnimatePresence } from "framer-motion"
import useMainContent from "../Hooks/useMainContent"
import { useDispatch, useSelector } from "react-redux"
import { openSidebar } from "../Slices/sidebarSlice"
import { openModal } from "../Slices/modalSlice"

const MainContent = () => {
  const { activeCard, modalOpened, modal, weatherArray } = useMainContent()
  const { sidebarOpened, weatherData } = useSelector((state) => state.sidebar)
  const { value } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (weatherData == null) {
      return
    } else {
      dispatch(openModal(weatherData))
    }
  }, [weatherData])

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-slate-500 to-slate-700 flex relative duration-300">
      <Sidebar />
      {weatherArray.length > 0 ? (
        <WeatherContent activeCard={activeCard} />
      ) : (
        <GridPlaceholder />
      )}
      <AnimatePresence>
        {value && <Modal modal={weatherData} />}
      </AnimatePresence>
      <i
        data-testid="sidebar-icon"
        className={`fa-solid fa-${
          sidebarOpened ? "xmark md:left-[330px] sm:right-2" : "bars left-3"
        } absolute top-2 text-2xl duration-300 cursor-pointer z-10`}
        onClick={() => dispatch(openSidebar())}
      ></i>
    </div>
  )
}

export default MainContent
