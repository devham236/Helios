import React, { createContext, useEffect, useState } from "react"

const Context = createContext()

function ContextProvider({ children }) {
  const [modalOpened, setModalOpened] = useState(false)
  const [modal, setModal] = useState(null)
  const [arrayEmpty, setArrayEmpty] = useState(false)
  const [opened, setOpened] = useState(
    // () => JSON.parse(localStorage.getItem("opened")) || false
    false
  )
  const [weatherArray, setWeatherArray] = useState(
    // () => JSON.parse(localStorage.getItem("weatherArray")) || []
    []
  )
  const [activeCard, setActiveCard] = useState(
    // () => JSON.parse(localStorage.getItem("activeCard")) || null
    null
  )

  // useEffect(() => {
  //   localStorage.setItem("activeCard", JSON.stringify(activeCard))
  //   localStorage.setItem("opened", JSON.stringify(opened))
  //   localStorage.setItem("weatherArray", JSON.stringify(weatherArray))
  // }, [opened, weatherArray, activeCard])

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

  return (
    <Context.Provider
      value={{
        opened,
        weatherArray,
        activeCard,
        modalOpened,
        modal,
        arrayEmpty,
        setModal,
        setModalOpened,
        setActiveCard,
        setWeatherArray,
        setOpened,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
