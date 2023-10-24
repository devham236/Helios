import React, { useState } from "react"
import useCustomContext from "../Context/useCustomContext"

const useSidebar = () => {
  const [input, setInput] = useState("")
  const { opened, arrayEmpty, weatherArray, setModal, setModalOpened } =
    useCustomContext()

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      getWeatherData()
    }
  }

  async function getWeatherData() {
    if (input !== "") {
      try {
        // Get coordinates from this url
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        // Get full data of city using oneCall
        const onecallurl = `https://api.openweathermap.org/data/3.0/onecall?lat=${
          data.coord.lat
        }&lon=${data.coord.lon}&exclude=minutely&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
        const onecallresponse = await fetch(onecallurl)
        const onecalldata = await onecallresponse.json()
        console.log(onecalldata)

        setModalOpened(true)
        setModal({ ...onecalldata, cityName: data.name })
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Input empty.")
    }
  }

  // async function getOneCallData(lat, lon, cityName) {
  //   try {
  //     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${
  //       import.meta.env.VITE_API_KEY
  //     }`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)

  //     setModalOpened(true)
  //     setModal({ ...data, cityName })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return {
    handleChange,
    handleKeyDown,
    getWeatherData,
    input,
    opened,
    arrayEmpty,
    weatherArray,
  }
}

export default useSidebar
