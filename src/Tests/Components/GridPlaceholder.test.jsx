import { describe, expect, test } from "vitest"
import { ContextProvider } from "../../Context"
import App from "./../../App"
import { React } from "react"
import { render, screen } from "@testing-library/react"
import GridPlaceholder from "../../Components/GridPlaceholder"

describe("test", () => {
  test("test", () => {
    render(
      <ContextProvider>
        <GridPlaceholder />
      </ContextProvider>
    )
    const element = screen.getByText(/search for a city.../i)
    expect(element).toBeInTheDocument()
  })
})
