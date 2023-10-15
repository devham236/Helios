import React from "react"
import WeatherContent from "./WeatherContent"
import Sidebar from "./Sidebar"
import Modal from "./Modal"
import GridPlaceholder from "./GridPlaceholder"
import { AnimatePresence } from "framer-motion"
import useMainContent from "../Hooks/useMainContent"

const MainContent = () => {
  const { activeCard, modalOpened, modal, opened, setOpened, weatherArray } =
    useMainContent()

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-slate-500 to-slate-700 flex relative duration-300">
      <Sidebar />
      {weatherArray.length > 0 ? (
        <WeatherContent activeCard={activeCard} />
      ) : (
        <GridPlaceholder />
      )}
      <AnimatePresence>
        {modalOpened && <Modal modal={modal} />}
      </AnimatePresence>
      <i
        className={`fa-solid fa-${
          opened ? "xmark md:left-[330px] sm:right-2" : "bars left-3"
        } absolute top-2 text-2xl duration-300 cursor-pointer z-50`}
        onClick={() => setOpened(!opened)}
      ></i>
    </div>
  )
}

export default MainContent
