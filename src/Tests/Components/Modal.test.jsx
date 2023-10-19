import React from "react"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, test, vi } from "vitest"
import Modal from "../../Components/Modal"
import renderWithWrappers from "../Utils/renderWithWrappers"
import { mockOneCallData } from "../../Mocks/mockResponseData"

vi.spyOn(window, "fetch")

describe("Modal", () => {
  beforeEach(() => {
    renderWithWrappers(<Modal modal={mockOneCallData} />)
  })

  test("modal renders with mock data", () => {
    const element = screen.getByText(mockOneCallData.cityName)
    expect(element).toBeInTheDocument()
  })
})
