import React from "react"
import useCustomContext from "../Context/useCustomContext"

const useModal = () => {
  const { setModalOpened, addItem } = useCustomContext()

  return { setModalOpened, addItem }
}

export default useModal
