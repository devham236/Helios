import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useWeatherCard = () => {
  const { setActiveCard, activeCard, setWeatherArray, weatherArray } =
    useCustomContext()

  function removeItem(item) {
    if (activeCard === item) {
      setWeatherArray((prevArray) =>
        prevArray.filter((card) => card.current.dt !== item.current.dt)
      )
      setActiveCard(weatherArray.length === 0 ? null : weatherArray[0])
    } else {
      setWeatherArray((prevArray) =>
        prevArray.filter((card) => card.current.dt !== item.current.dt)
      )
    }
  }

  return { setActiveCard, removeItem, activeCard }
}

export default useWeatherCard
