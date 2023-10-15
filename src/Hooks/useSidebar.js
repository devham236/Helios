import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useSidebar = () => {
  const {
    handleChange,
    handleKeyDown,
    getWeatherData,
    opened,
    arrayEmpty,
    weatherArray,
  } = useCustomContext()
  return {
    handleChange,
    handleKeyDown,
    getWeatherData,
    opened,
    arrayEmpty,
    weatherArray,
  }
}

export default useSidebar
