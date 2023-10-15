import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useMainContent = () => {
  const { activeCard, modalOpened, modal, opened, setOpened, weatherArray } =
    useCustomContext()

  return { activeCard, modalOpened, modal, opened, setOpened, weatherArray }
}

export default useMainContent
