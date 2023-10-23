import React from "react"
import {
  findByTestId,
  fireEvent,
  render,
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
import MainContent from "../../Components/MainContent"
import useModal from "../../Hooks/useModal"
import { ContextProvider } from "../../Context/Context"
import { act } from "react-dom/test-utils"
import Sidebar from "../../Components/Sidebar"

vi.spyOn(window, "fetch")

describe("Modal", () => {
  // beforeEach(() => {
  //   renderWithWrappers(<MainContent />)
  // })

  test("modal renders with correct data", () => {
    renderWithWrappers(<Modal modal={mockOneCallData} />)
    const element = screen.getByText(mockOneCallData.cityName)
    expect(element).toBeInTheDocument()
  })

  test("modal closes when clicking 'close' button", async () => {
    renderWithWrappers(<Modal modal={mockOneCallData} />)
    const modalEl = screen.getByTestId("modal")
    const closeBtn = screen.getByRole("button", { name: /close/i })
    await userEvent.click(closeBtn)
    expect(modalEl).not.toBeInTheDocument()
  })
})
