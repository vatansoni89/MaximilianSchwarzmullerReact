import React from "react";

//give lower case for fun variable.
const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I m a Person! having name {props.name} and age {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
