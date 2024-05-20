import { createSlice } from "@reduxjs/toolkit"

const activeCardSlice = createSlice({
  name: "activeCard",
  initialState: { value: null },
  reducers: {},
})

export default activeCardSlice.reducer
