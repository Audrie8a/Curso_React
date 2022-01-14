import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Exercises from "../pages/Exercises";
import ExercisesNew from "../pages/ExercisesNew";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/exercise" element={<Exercises />} />
        <Route exact path="/exercise/new" element={<ExercisesNew />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
