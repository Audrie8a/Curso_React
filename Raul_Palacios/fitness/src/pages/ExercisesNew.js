import React from "react";
import ExercisesForm from "../components/ExerciseForm";
import Card from "../components/Card";

class ExercisesNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: "",
    },
  };

  handleChangeEvent = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitEvent = (e) => {
    //Evitar recargar al enviar información
    e.preventDefault();

    console.log(this.state.form);
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <Card {...this.state.form} />
        </div>
        <div className="col-sm">
          <ExercisesForm
            handleChange={this.handleChangeEvent}
            form={this.state.form}
            handleSubmit={this.handleSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default ExercisesNew;
