import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ContextProvider } from "./Context"
import "./styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
)
