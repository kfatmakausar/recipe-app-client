import React, { Component } from "react";
import "./App.css";
// import RoutesContainer from "../components/routes/RoutesContainer";
import { AllRecipesContainer } from "../components/containers";

class App extends Component {
  render() {
    return (
      <div className="app">
        <AllRecipesContainer />

        <header className="app-header"></header>
      </div>
    );
  }
}

export default App;
