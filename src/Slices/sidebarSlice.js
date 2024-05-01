import { createSlice } from "@reduxjs/toolkit"

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { value: { sidebarOpened: false, sidebarInput: "" } },
  reducers: {
    openSidebar: (state) => {
      state.value.sidebarOpened = !state.value.sidebarOpened
    },
    handleInputChange: (state, action) => {
      state.value.sidebarInput = action.payload
    },
  },
})

export const { openSidebar, handleInputChange } = sidebarSlice.actions
export default sidebarSlice.reducer
