import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { App } from "./components";
import { store } from "./redux/store/index";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
