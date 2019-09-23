import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Vatan", age: 30 },
      { name: "Sonu", age: 28 },
      { name: "Raju", age: 26 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    // React don't respect this ===>>> this.state.persons[0].name = "Manuuu";
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Sonu", age: 28 },
        { name: "Raju", age: 26 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Vatan", age: 30 },
        { name: event.target.value, age: 28 },
        { name: "Raju", age: 26 }
      ]
    });
  };

  togglePersonshandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow }); //only showPerson will be updated with this syntex.
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(p => {
            return <Person name={p.name} age={p.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hii</h1>
        <p>working!</p>
        <button onClick={this.togglePersonshandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
