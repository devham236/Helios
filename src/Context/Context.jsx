import React, { createContext, useEffect, useState } from "react"

const Context = createContext()

function ContextProvider({ children }) {
  const [modalOpened, setModalOpened] = useState(false)
  const [modal, setModal] = useState(null)
  const [arrayEmpty, setArrayEmpty] = useState(false)
  const [opened, setOpened] = useState(false)
  const [weatherArray, setWeatherArray] = useState([])
  const [activeCard, setActiveCard] = useState(null)

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
        setArrayEmpty,
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
