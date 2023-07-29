import React, { createContext, useEffect, useState } from "react"

const Context = createContext()

function ContextProvider({ children }) {
  const [input, setInput] = useState("")
  const [modalOpened, setModalOpened] = useState(false)
  const [modal, setModal] = useState(null)
  const [arrayEmpty, setArrayEmpty] = useState(false)
  const [opened, setOpened] = useState(
    () => JSON.parse(localStorage.getItem("opened")) || false
  )
  const [weatherArray, setWeatherArray] = useState(
    () => JSON.parse(localStorage.getItem("weatherArray")) || []
  )
  const [activeCard, setActiveCard] = useState(
    () => JSON.parse(localStorage.getItem("activeCard")) || null
  )

  useEffect(() => {
    localStorage.setItem("activeCard", JSON.stringify(activeCard))
    localStorage.setItem("opened", JSON.stringify(opened))
    localStorage.setItem("weatherArray", JSON.stringify(weatherArray))
  }, [opened, weatherArray, activeCard])

  useEffect(() => {
    if (weatherArray.length === 0) {
      showPlaceHolders()
    } else {
      setArrayEmpty(false)
    }
  }, [weatherArray])

  function showPlaceHolders() {
    setArrayEmpty(true)
  }

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      getWeatherData()
    }
  }

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

  function addItem(newItem) {
    setWeatherArray((prevItem) => [...prevItem, newItem])
    setModalOpened(false)
    setActiveCard(newItem)
  }

  async function getWeatherData() {
    if (input !== "") {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
        const res = await fetch(url)
        const data = await res.json()

        getOneCallData(data.coord.lat, data.coord.lon, data.name)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Input empty.")
    }
  }

  async function getOneCallData(lat, lon, cityName) {
    try {
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`
      const response = await fetch(url)
      const data = await response.json()

      setModalOpened(true)
      setModal({ ...data, cityName })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Context.Provider
      value={{
        opened,
        weatherArray,
        activeCard,
        modalOpened,
        modal,
        arrayEmpty,
        addItem,
        setModal,
        setModalOpened,
        removeItem,
        setActiveCard,
        setOpened,
        handleChange,
        getWeatherData,
        handleKeyDown,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
