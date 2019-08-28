import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} /> */}
    </Router>
  );
}

export default App;
