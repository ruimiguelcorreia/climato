import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./navBar/navBar";
import Homepage from "./homepage/homepage";
import Results from "./results/results";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  );
};

export default App;
