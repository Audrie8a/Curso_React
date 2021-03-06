//SIN REACT -------------------------------------------

// const element = document.createElement("h1");

// element.innerText = "Hello React";

// const container = document.getElementById("root");
// container.appendChild(element);

//CON REACT -------------------------------------------
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";

const container = document.getElementById("root");

//ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(
  <div>
    <App />
  </div>,
  container
);
