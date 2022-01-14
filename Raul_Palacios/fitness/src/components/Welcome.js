import React from "react";
import "./styles/Welcome.css";

const Welcome = ({ username }) => (
  <div className="container">
    <div className="Fitness-User-Info">
      <h1>Hola {username}! </h1>
      <p>Comencemos a trabajar!</p>
    </div>
  </div>
);

export default Welcome;
