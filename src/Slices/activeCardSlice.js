import { createSlice } from "@reduxjs/toolkit"

const activeCardSlice = createSlice({
  name: "activeCard",
  initialState: { card: null },
  reducers: {
    activateCard: (state, action) => {
      state.card = action.payload
    },
    deactivateCard: (state) => {
      state.card = null
    },
  },
})

export const { activateCard, deactivateCard } = activeCardSlice.actions
export default activeCardSlice.reducer
