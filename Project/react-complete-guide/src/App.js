import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hii</h1>
        <p>working!</p>
        <Person />
      </div>
    );
  }
}

export default App;
