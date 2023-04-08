import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app";
import "./styles.scss";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="LolNet"> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

const devMode = process.env.NODE_ENV === "development";
if (devMode && module && module.hot) {
  module.hot.accept();
}
