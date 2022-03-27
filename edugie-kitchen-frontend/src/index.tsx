import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./context/app.context";
import "./styles/css/style.css";
import "./styles/css/icon-font.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
