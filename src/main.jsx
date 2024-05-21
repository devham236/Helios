import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"

import sidebarReducer from "./Slices/sidebarSlice"
import modalReducer from "./Slices/modalSlice"
import cardsReducer from "./Slices/cardsSlice"
import activeCardReducer from "./Slices/activeCardSlice"

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    modal: modalReducer,
    cards: cardsReducer,
    activeCard: activeCardReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)
