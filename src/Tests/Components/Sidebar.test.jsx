import React from "react"
import { beforeEach, describe, expect, test, vi } from "vitest"
import renderWithWrappers from "../Utils/renderWithWrappers"
import Sidebar from "../../Components/Sidebar"
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react"
import useSidebar from "../../Hooks/useSidebar"
import { ContextProvider } from "../../Context/Context"
import MainContent from "../../Components/MainContent"
import Modal from "../../Components/Modal"

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

  // test("get weather data function", () => {
  //   const input = screen.getByRole("textbox")
  //   const searchIcon = screen.getByTestId("search-icon")
  //   fireEvent.change(input, { target: { value: "Berlin" } })
  //   fireEvent.click(searchIcon)
  //   screen.debug()
  // })
})
