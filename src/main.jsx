import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { ContextProvider } from "./Context/Context"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import sidebarReducer from "./Slices/sidebarSlice"

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Provider>
)
