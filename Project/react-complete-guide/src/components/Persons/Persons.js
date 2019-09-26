import Person from "./Person/Person";
import React from "react";

const personList = props =>
  props.persons.map((p, index) => {
    //index auto-generated 0,1,2...
    console.log("person index", index);
    return (
      <Person
        click={() => props.clicked(index)}
        name={p.name}
        age={p.age}
        key={p.id}
        changed={event => props.changed(event, p.id)}
      />
    );
  });

export default personList;
