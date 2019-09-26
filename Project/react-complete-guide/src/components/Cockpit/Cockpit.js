import React from "react";
//import classess from "./App.css";

const cockpit = props => {
  const classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <h1>Hii</h1>
      <p className={classes.join(" ")}>working!</p>
      <button onClick={props.toggle} style={props.style}>
        {/*works: <button onClick={() => props.toggle()} style={props.style}> */}
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
