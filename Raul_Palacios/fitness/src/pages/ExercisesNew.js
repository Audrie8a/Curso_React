import React from "react";
import Boton from "../components/Boton";

class ExercisesNew extends React.Component {
  render() {
    return (
      <div>
        <h1>ExercisesNew</h1>
        <Boton dir="/exercise" />
      </div>
    );
  }
}

export default ExercisesNew;
