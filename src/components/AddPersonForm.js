import React from "react";
import PropTypes from "prop-types";

class AddPersonForm extends React.Component {

  nameRef = React.createRef();
  lastnameRef = React.createRef();

  static propTypes = {
    addPerson: PropTypes.func
  };

  createPerson = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const person = {
      name: this.nameRef.current.value,
      lastname: this.lastnameRef.current.value
    };
    this.props.addPerson(person);
    // refresh the form
    event.currentTarget.reset();
  };
  
  render() {
    return (
      <form onSubmit={this.createPerson}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="lastname" ref={this.lastnameRef} type="text" placeholder="Lastname" />
        <button type="submit">+ Add Person</button>
      </form>
    );
  }
}

export default AddPersonForm;
