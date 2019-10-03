import React, { Component } from "react";
import classess from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClasses from "../hoc/withClasses";
import Persons from "../components/Persons/Persons";
import withClasses from "../hoc/withClasses";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "asaas", name: "Vatan", age: 30 },
      { id: "asarfsa", name: "Sonu", age: 28 },
      { id: "asujjasa", name: "Raju", age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
    console.log("Title from Index is", this.props.title);
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    //Get person by id and update copy of that. Then create copy of list and update this person there and set state again.

    //personIndex is array index (integer) but id is string
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
      changeCounter: this.state.changeCounter + 1
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
    console.log("[App.js] render");
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

    //console.log("Am i running before componentWillUnmount"); //yes

    return (
      <div className="App">
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            personsLength={this.state.persons.length}
            toggle={this.togglePersonshandler}
            style={style}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default withClasses(App, classess.App);
