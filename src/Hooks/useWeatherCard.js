import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useWeatherCard = () => {
  const { setActiveCard, removeItem, activeCard } = useCustomContext()

  return { setActiveCard, removeItem, activeCard }
}

export default useWeatherCard
