import React, { Component } from "react";

import NavBar from "./navBar/navBar";
import Homepage from "./homepage/homepage";
import Results from "./results/results";

import "./App.css";

class App extends Component {
  handleLocation = (event, location) => {
    event.preventDefault();
    console.log(location);
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Homepage submitLocation={this.handleLocation} />
        <Results />
      </div>
    );
  }
}

export default App;
