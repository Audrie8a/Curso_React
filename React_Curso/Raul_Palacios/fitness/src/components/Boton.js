import React from "react";
import "./styles/Boton.css";
import buttomImg from "../images/add.png";
import { Link } from "react-router-dom";

const Boton = (props) => (
  <Link to={props.dir}>
    <img src={buttomImg} className="Fitness-Add" alt="exercise" />
  </Link>
);

export default Boton;
