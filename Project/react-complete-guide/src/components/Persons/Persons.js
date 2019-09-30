import Person from "./Person/Person";
import React, { Component } from "react";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { Message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render() {
    console.log("[Person-s.js] rendering...");

    ///
    // Here we have two return statements
    ///
    return this.props.persons.map((p, index) => {
      //index auto-generated 0,1,2...

      return (
        <Person
          click={() => this.props.clicked(index)}
          name={p.name}
          age={p.age}
          key={p.id}
          changed={event => this.props.changed(event, p.id)}
        />
      );
    });
  }
}

export default Persons;
