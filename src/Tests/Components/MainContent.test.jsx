import React from "react"
import { act, fireEvent, renderHook, screen } from "@testing-library/react"
import { beforeEach, describe, expect, test } from "vitest"
import MainContent from "./../../Components/MainContent"
import { ContextProvider } from "../../Context/Context"
import useMainContent from "../../Hooks/useMainContent"
import renderWithWrappers from "../Utils/renderWithWrappers"

describe("MainContent", () => {
  beforeEach(() => {
    renderWithWrappers(<MainContent />)
  })

  test("clicking on icon should change 'opened' state", () => {
    const { result } = renderHook(() => useMainContent(), {
      wrapper: ContextProvider,
    })
    act(() => {
      result.current.setOpened(!result.current.opened)
    })
    expect(result.current.opened).toBe(true)
  })

  test("clicking on icon should open sidebar", () => {
    const icon = screen.getByTestId(/sidebar-icon/i)
    const sidebar = screen.getByTestId(/sidebar-container/i)
    fireEvent.click(icon)
    expect(sidebar).toHaveClass("sidebar-opened")
  })

  test("grid-placeholder should be rendered", () => {
    const gridPlaceholder = screen.getByTestId(/grid-placeholder/i)
    expect(gridPlaceholder).toBeInTheDocument()
  })
})
