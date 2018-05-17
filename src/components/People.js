import React from "react";
import Person from "./Person";
import AddPersonForm from "./AddPersonForm";

class People extends React.Component {

  state = {
    people: []
  };

  addPerson = person => {
    // 1. Take a copy of the existing state
    const people = [ ...this.state.people ];
    // 2. Add our new person to that people variable
    person.id = Date.now();
    people.push(person);
    // 3. Set the new people object to state
    this.setState({ people });
  };

  deletePerson = index => {
    // 1. Take a copy of state
    const people = [ ...this.state.people ];
    // 2. Delete the person
    //const index = people.indexOf(person);
    people.splice(index, 1);
    // 3. Update the state
    this.setState({ people });
  }

  render() {
    return(
      <div>
        <h1>People</h1>
        <h2>Add person</h2>
        <AddPersonForm addPerson={this.addPerson} />
        <ul>
          {this.state.people.map(person => (
            <Person key={person.id} details={person} />
          ))}
        </ul>
      </div>
    );
  }
}

export default People;