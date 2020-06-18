import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
//import { Provider } from "react-redux";
//import store from "./store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
