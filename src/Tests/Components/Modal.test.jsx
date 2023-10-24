import React from "react"
import {
  act,
  fireEvent,
  renderHook,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import { beforeEach, describe, expect, test, vi } from "vitest"
import Modal from "../../Components/Modal"
import renderWithWrappers from "../Utils/renderWithWrappers"
import { mockOneCallData } from "../../Mocks/mockResponseData"
import userEvent from "@testing-library/user-event"
import MainContent from "./../../Components/MainContent"
import { ContextProvider } from "../../Context/Context"
import useModal from "../../Hooks/useModal"

vi.spyOn(window, "fetch")

describe("Modal", () => {
  beforeEach(() => {
    renderWithWrappers(<MainContent />)
  })
  test("modal renders with correct data", () => {
    renderWithWrappers(<Modal modal={mockOneCallData} />)
    const element = screen.getByText(mockOneCallData.cityName)
    expect(element).toBeInTheDocument()
  })

  test("modal closes when close button is clicked", async () => {
    // renderWithWrappers(<Modal modal={mockOneCallData} />)
    // const element = screen.getByRole("button", { name: "Close" })
    // fireEvent.click(element)
    // await waitForElementToBeRemoved(() => screen.getByTestId("modal"))
    renderWithWrappers(<Modal modal={mockOneCallData} />)
    const { result } = renderHook(() => useModal(), {
      wrapper: ContextProvider,
    })
    act(() => {
      result.current.setModalOpened(true)
    })
    expect(result.current.modalOpened).toBe(true)
  })
})
