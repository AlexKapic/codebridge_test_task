import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import { store } from "./store/store";
import "./assets/style/style.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
