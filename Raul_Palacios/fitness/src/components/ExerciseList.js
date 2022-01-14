import React from "react";
import Card from "./Card";
import CardUsrs from "./CardUsrs";

const ExerciseList = ({ exercises, prueba }) => (
  <div>
    {/* ngFor Recorre el state */}
    {exercises.map((exercise) => {
      return (
        <Card
          key={exercise.id}
          title={exercise.title}
          description={exercise.description}
          img={exercise.img}
          leftColor={exercise.leftColor}
          rightColor={exercise.rightColor}
        />
      );
    })}
    <div>
      <h1>Prueba Listar con fetch</h1>
      {prueba.map((prue) => {
        return (
          <CardUsrs
            key={prue.id}
            title={prue.title}
            thumbnailUrl={prue.thumbnailUrl}
          />
        );
      })}
    </div>
  </div>
);

export default ExerciseList;
