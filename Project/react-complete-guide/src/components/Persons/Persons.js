import Person from "./Person/Person";
import React, { Component } from "react";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    //without this even Persons not got updated it will re-render persons on 'Remove Cockpit' button click
    ///
    //Before:
    //[App.js] getDerivedStateFromProps {title: "Hi Title"}
    //[App.js] render
    //[Persons.js] shouldComponentUpdate
    //[Person-s.js] rendering...
    //[Person.js] rendering...
    //[Persons.js] getSnapshotBeforeUpdate
    //[Cockpit.js] cleanup work in useEffect
    //Person.js] componentDidUpdate
    //[Persons.js] componentDidUpdate

    //After:
    //[App.js] getDerivedStateFromProps {title: "Hi Title"}
    //[App.js] render
    //[Persons.js] shouldComponentUpdate
    //[Cockpit.js] cleanup work in useEffect
    //[App.js] componentDidUpdate

    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { Message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
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
