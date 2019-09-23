import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Vatan", age: 30 },
      { name: "Sonu", age: 28 },
      { name: "Raju", age: 26 }
    ]
  };

  switchNameHandler = () => {
    // React don't respect this ===>>> this.state.persons[0].name = "Manuuu";
    this.setState({
      persons: [
        { name: "Soni", age: 30 },
        { name: "Sonu", age: 28 },
        { name: "Raju", age: 26 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hii</h1>
        <p>working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbie: Badminton
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
