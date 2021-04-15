import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'boootstrap/dist/css/bootstrap.min.css';

import Navbar fromm "./components/exercise-list";

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
