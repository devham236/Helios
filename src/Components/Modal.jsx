import React from "react"
import { motion } from "framer-motion"
import { modalContainer, modalItem } from "../Variants/modal"
import useModal from "../Hooks/useModal"

const Modal = ({ modal }) => {
  const { setModalOpened, addItem } = useModal()

  return (
    <motion.div
      initial={{ z: -100 }}
      animate={{ y: 0 }}
      data-testid="modal"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-30"
    >
      <motion.div
        variants={modalContainer}
        initial="initial"
        animate="animate"
        exit="exit"
        className=" w-[500px] h-[400px] bg-slate-800 rounded-lg p-3 flex flex-col items-center justify-between"
      >
        <motion.div
          variants={modalItem}
          className="w-full flex items-center justify-between"
        >
          <button
            className="px-2 py-1 rounded-lg cursor-pointer opacity-50 hover:opacity-100 duration-300 bg-slate-600 flex items-center"
            onClick={() => setModalOpened(false)}
          >
            <i className="fa-solid fa-circle-xmark mr-1 text-md"></i>
            <p>Close</p>
          </button>
          <button
            className="px-2 py-1 rounded-lg cursor-pointer opacity-50 hover:opacity-100 duration-300 bg-slate-600 flex items-center"
            onClick={() => addItem(modal)}
          >
            <i className="fa-solid fa-circle-plus mr-1 text-md"></i>
            <p>Add</p>
          </button>
        </motion.div>

        <motion.div
          variants={modalItem}
          className="flex flex-col items-center justify-center rounded-lg"
        >
          <h1 className="text-4xl mb-2">{modal.cityName}</h1>
          <h1 className="text-6xl mb-2 font-extralight">
            {modal.current.temp.toFixed()}°C
          </h1>
          <p>{modal.current.weather[0].description}</p>
        </motion.div>

        <motion.div
          variants={modalItem}
          className="flex items-center justify-around  rounded-lg py-1"
        >
          <p className="text-xl mr-5 bg-slate-600 py-1 px-3 rounded-lg">
            Feels like: {modal.current.feels_like.toFixed()}°
          </p>
          <p className="text-xl ml-5 bg-slate-600 py-1 px-3 rounded-lg">
            Humidity: {modal.current.humidity}%
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Modal
