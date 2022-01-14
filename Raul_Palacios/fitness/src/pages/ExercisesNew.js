import React from "react";
import Boton from "../components/Boton";

class ExercisesNew extends React.Component {
  //Agregar props a una función mediante el constructor
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this); //Esta función no es una función de flecha
  // }

  //Eventos empiezan con handle
  handleClick = () => {
    alert("Click!");
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>ExercisesNew</h1>
        <button onClick={this.handleClick}>Click aquí!</button>
        <Boton dir="/exercise" />
      </div>
    );
  }
}

export default ExercisesNew;
