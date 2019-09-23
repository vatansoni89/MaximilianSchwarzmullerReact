import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";

const app = props => {
  const [personsState, setpersonsState] = useState({
    persons: [
      { name: "Vatan", age: 30 },
      { name: "Sonu", age: 28 },
      { name: "Raju", age: 26 }
    ],
    otherState: "some other value"
  });

  const [hii, funHii] = useState("hii111");
  console.log(personsState, hii);

  const switchNameHandler = () => {
    // React don't respect this ===>>> personsState.persons[0].name = "Manuuu";
    setpersonsState({
      persons: [
        { name: "Soni", age: 30 },
        { name: "Sonu", age: 28 },
        { name: "Raju", age: 26 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hii</h1>
      <p>working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My hobbie: Badminton
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;

// state = {
//   persons: [
//     { name: "Vatan", age: 30 },
//     { name: "Sonu", age: 28 },
//     { name: "Raju", age: 26 }
//   ]
// };

// switchNameHandler = () => {
//   // React don't respect this ===>>> personsState.persons[0].name = "Manuuu";
//   this.setState({
//     persons: [
//       { name: "Soni", age: 30 },
//       { name: "Sonu", age: 28 },
//       { name: "Raju", age: 26 }
//     ]
//   });
// };
