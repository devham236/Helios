import { createSlice } from "@reduxjs/toolkit"

const cardsSlice = createSlice({
  name: "cards",
  initialState: { data: [] },
  reducers: {
    addCard: (state, action) => {
      state.data.push(action.payload)
    },
    removeCard: (state, action) => {
      state.data = state.data.filter((item) => item.id != action.payload.id)
    },
  },
})

export const { addCard, removeCard } = cardsSlice.actions
export default cardsSlice.reducer
