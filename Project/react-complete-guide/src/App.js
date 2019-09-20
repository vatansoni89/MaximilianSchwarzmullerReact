import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hii</h1>
        <p>working!</p>
        <Person name="Vatan" age="30">
          My hobbie: Badminton
        </Person>
        <Person name="Sonu" age="25" />
      </div>
    );
  }
}

export default App;
