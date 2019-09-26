import React, { Component } from "react";
import classess from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";

import Persons from "../components/Persons/Persons";
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

  nameChangedHandler = (event, id) => {
    //Get person by id and update copy of that. Then create copy of list and update this person there and set state again.

    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
      style.backgroundColor = "lightblue";
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          toggle={this.togglePersonshandler}
          style={style}
        />
        {persons}
      </div>
    );
  }
}

export default App;
