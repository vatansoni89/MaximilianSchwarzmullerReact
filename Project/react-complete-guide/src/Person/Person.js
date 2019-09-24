import React from "react";
import "./Person.css";
import Radium from "radium";

//give lower case for fun variable.
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I m a Person! having name {props.name} and age {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
