import React, {useContext} from 'react'
import WeatherContent from './WeatherContent'
import Sidebar from './Sidebar'
import Modal from './Modal'
import GridPlaceholder from './GridPlaceholder'
import { Context } from '../Context'

const MainContent = () => {
  const {activeCard, modalOpened, modal, opened, setOpened, weatherArray} = useContext(Context)

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-slate-500 to-slate-700 flex relative duration-300">
      <Sidebar />
      {weatherArray.length > 0 ? (
        <WeatherContent activeCard={activeCard} />
      ) : (
        <GridPlaceholder />
      )}
      {modalOpened && <Modal modal={modal} />}
      <i
        className={`fa-solid fa-${
          opened ? "xmark md:left-[330px] sm:right-2" : "bars left-3"
        } absolute top-2 text-2xl duration-300 cursor-pointer z-50`}
        onClick={() => setOpened(!opened)}
      ></i>
    </div>
  );
}

export default MainContent

