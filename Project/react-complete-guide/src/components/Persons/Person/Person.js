import React, { Component } from "react";
import "./Person.css";

//give lower case for fun variable.
class Person extends Component {
  componentDidUpdate() {
    console.log("[Person.js] componentDidUpdate");
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          I m a Person! having name {this.props.name} and age {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

// App:
//   Persons:
//     Person: This have real events like
//       onClick, onChange
