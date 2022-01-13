import React from "react";
import "./styles/Welcome.css";

function Welcome(props) {
  return (
    <div className="container">
      <div className="Fitness-User-Info">
        <h1>Hola {props.username}</h1>
        <p>Comencemos a trabajar!</p>
      </div>
    </div>
  );
}

export default Welcome;