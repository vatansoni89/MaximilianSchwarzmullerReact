import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { id: "asaas", name: "Vatan", age: 30 },
      { id: "asarfsa", name: "Sonu", age: 28 },
      { id: "asujjasa", name: "Raju", age: 26 }
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

  deletePersonHandler = index => {
    debugger;
    //don't mutate the original state, create and copy and update and set that.
    const persons = [...this.state.persons];
    persons.splice(index, 1); //delete 1 element from given index
    this.setState({ persons: persons });
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
          {this.state.persons.map((p, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={p.name}
                age={p.age}
                key={p.id}
              />
            );
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
