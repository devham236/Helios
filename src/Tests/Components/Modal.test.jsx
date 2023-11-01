import React from "react"
import {
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
import { act } from "react-dom/test-utils"
import useModal from "../../Hooks/useModal"
import { ContextProvider } from "../../Context/Context"

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

  test("modal closes when 'close' button is clicked", async () => {
    renderWithWrappers(<Modal modal={mockOneCallData} />)
    const closeBtn = screen.getByRole("button", { name: "Close" })
    const modalEl = screen.getByTestId("modal")

    await act(async () => {
      await userEvent.click(closeBtn)
    })

    waitForElementToBeRemoved(modalEl)

    // waitFor(async () => {
    //   expect(modalEl).not.toBeInTheDocument()
    // })
  })
})
