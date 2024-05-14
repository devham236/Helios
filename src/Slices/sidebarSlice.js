import { createSlice } from "@reduxjs/toolkit"

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { sidebarOpened: false, sidebarInput: "" },
  reducers: {
    openSidebar: (state) => {
      state.sidebarOpened = !state.sidebarOpened
    },
    handleInputChange: (state, action) => {
      state.sidebarInput = action.payload
    },
  },
})

export const { openSidebar, handleInputChange } = sidebarSlice.actions
export default sidebarSlice.reducer
