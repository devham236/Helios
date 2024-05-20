import { createSlice } from "@reduxjs/toolkit"
import fetchWeatherData from "../Utils/fetchWeatherData"

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    sidebarOpened: false,
    sidebarInput: "",
    weatherData: null,
    loading: false,
    error: "",
  },
  reducers: {
    openSidebar: (state) => {
      state.sidebarOpened = !state.sidebarOpened
    },
    handleInputChange: (state, action) => {
      state.sidebarInput = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.loading = false
      state.weatherData = action.payload
    })
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const { openSidebar, handleInputChange } = sidebarSlice.actions
export default sidebarSlice.reducer
