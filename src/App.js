import React, { Component } from "react";

import NavBar from "./navBar/navBar";
import Homepage from "./homepage/homepage";
import Results from "./results/results";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      forecasts: [],
      location: "",
    };
  }

  handleLocation = (event, location) => {
    event.preventDefault();

    fetch(`https://mcr-codes-weather.herokuapp.com/forecast?city=${location}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          forecasts: data.forecasts,
          location: data.location.city,
        })
      );
  };

  render() {
    const { forecasts } = this.state;

    return (
      <div className="App">
        <NavBar />
        <Homepage submitLocation={this.handleLocation} />
        <Results forecasts={forecasts} />
      </div>
    );
  }
}

export default App;
