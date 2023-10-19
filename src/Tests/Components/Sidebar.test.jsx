import React from "react"
import { beforeEach, describe, expect, test, vi } from "vitest"
import renderWithWrappers from "../Utils/renderWithWrappers"
import { act, fireEvent, renderHook, screen } from "@testing-library/react"
import useSidebar from "../../Hooks/useSidebar"
import { ContextProvider } from "../../Context/Context"
import MainContent from "../../Components/MainContent"
import userEvent from "@testing-library/user-event"

vi.spyOn(window, "fetch")

describe("Sidebar", () => {
  beforeEach(() => {
    renderWithWrappers(<MainContent />)
  })

  test("input state changes when typing in input element", () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: ContextProvider,
    })

    act(() => {
      result.current.handleChange({ target: { value: "test" } })
    })
    expect(result.current.input).toBe("test")
  })

  test("getWeatherData function opens modal", async () => {
    const input = screen.getByRole("textbox")
    const search = screen.getByTestId(/search-icon/i)

    fireEvent.change(input, { target: { value: "Test" } })
    await userEvent.click(search)

    expect(screen.getByTestId("modal")).toBeInTheDocument()
  })
})
