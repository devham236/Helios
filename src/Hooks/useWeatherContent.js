import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useWeatherContent = () => {
  const { opened } = useCustomContext()

  return { opened }
}

export default useWeatherContent
