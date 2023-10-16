import React from "react"
import { beforeEach, describe, expect, test } from "vitest"
import renderWithWrappers from "../Utils/renderWithWrappers"
import Sidebar from "../../Components/Sidebar"
import { act, renderHook, screen, waitFor } from "@testing-library/react"
import useSidebar from "../../Hooks/useSidebar"
import { ContextProvider } from "../../Context/Context"

describe("Sidebar", () => {
  beforeEach(() => {
    renderWithWrappers(<Sidebar />)
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
})
