import React from "react"
import getTime from "../Utils/getTime"
import { motion } from "framer-motion"
import { cardItem } from "../Variants/weatherCard"
import { removeCard } from "../Slices/cardsSlice"
import { useDispatch, useSelector } from "react-redux"
import { activateCard } from "../Slices/activeCardSlice"

const WeatherCard = ({ item }) => {
  const { card } = useSelector((state) => state.activeCard)
  const dispatch = useDispatch()

  const match = item?.id === card?.id

  console.log(card.cityName)

  return (
    <motion.div
      variants={cardItem}
      className={` bg-slate-600 rounded-lg p-2 mb-4 cursor-pointer ${
        match ? "border-[1px] border-slate-400" : ""
      }`}
      onClick={() => dispatch(activateCard(item))}
    >
      <div className="top-part flex justify-between mb-3">
        <div className="city-time">
          <h1 className="text-xl">{item?.cityName}</h1>
          <p className="text-sm">
            {getTime(item?.current?.dt, item?.timezone_offset)}
          </p>
          <div
            className="flex items-center mt-2 opacity-50 hover:opacity-100 duration-300 text-sm w-0"
            onClick={(e) => {
              e.stopPropagation()
              dispatch(removeCard(item))
            }}
          >
            <i className="fa-solid fa-trash-can mr-1"></i>
            <p className="">Remove</p>
          </div>
        </div>
        <div className="temp">
          <p className="text-4xl">{item?.current?.temp.toFixed()}°</p>
        </div>
      </div>
      <div className="bottom-part mt-4 flex items-center justify-between">
        <div className="info">
          <p>{item?.current?.weather[0].description}</p>
        </div>
        <div className="high-low flex flex-col items-start justify-center">
          <p className="">
            H :{" "}
            <span className="ml-3">{item?.daily[0]?.temp.max.toFixed()}°</span>
          </p>
          <p className="">
            L :{" "}
            <span className="ml-3">{item?.daily[0]?.temp.min.toFixed()}°</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default WeatherCard
