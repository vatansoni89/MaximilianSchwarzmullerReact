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

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hii</h1>
        <p>working!</p>
        <button
          onClick={this.switchNameHandler.bind(this, "Btn_Name")}
          style={style}
        >
          Switch Name
        </button>
        <Person
          click={this.switchNameHandler.bind(this, "Paragraph_Name")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbie: Badminton
        </Person>
        <Person
          click={() => this.switchNameHandler("By-Function-Call")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
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
