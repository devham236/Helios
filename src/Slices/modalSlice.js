import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: { value: null },
  reducers: {
    openModal: (state, action) => {
      state.value = action.payload
      console.log(action.payload)
    },
    closeModal: (state, action) => {
      state.value = null
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
