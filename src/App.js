import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExercises from "./components/create-exercises.component";
import CreateUsers from "./components/create-users.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit:exercisesId"  component={EditExercises} />
      <Route path="/createExercises"  component={CreateExercises} />
      <Route path="/createUsers"  component={CreateUsers} />
    </Router>
  );
}

export default App;
