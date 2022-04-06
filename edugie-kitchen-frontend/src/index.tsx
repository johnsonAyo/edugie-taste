import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./context/app.context";
import OrderProvider from "./context/ordersContext";
import "./styles/css/style.css";
import "./styles/css/icon-font.css";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </OrderProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
