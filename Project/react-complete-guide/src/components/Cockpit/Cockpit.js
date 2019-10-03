import React, { useEffect } from "react";
//import classess from "./App.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    setTimeout(() => {
      alert("Saved data to cloud");
    }, 100);

    return () => {
      //cleanup function
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, [props.persons]);

  const classes = [];
  if (props.personsLength <= 2) {
    classes.push("red");
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
