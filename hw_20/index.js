import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { cityNames, countries, weather } from "./fixtures";

const appData = {
  cityNames,
  countries,
  weather
};

localStorage.setItem("appData", JSON.stringify(appData));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
