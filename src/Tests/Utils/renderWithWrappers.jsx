import React from "react"
import { ContextProvider } from "../../Context/Context"
import { render } from "@testing-library/react"

const renderWithWrappers = (component) => {
  render(<ContextProvider>{component}</ContextProvider>)
}

export default renderWithWrappers
