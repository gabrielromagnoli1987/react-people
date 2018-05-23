import React from "react";
import PropTypes from "prop-types";

class AddPersonForm extends React.Component {

  static state = {
    name: '',
    lastname: ''
  };

  static propTypes = {
    addPerson: PropTypes.func
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createPerson = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. lifting state up
    this.props.addPerson(this.state);
    // refresh the form
    event.currentTarget.reset();
  };
  
  render() {
    return (
      <form onSubmit={this.createPerson} >
        <input name="name" type="text" placeholder="Name" onChange={this.handleChange} />
        <input name="lastname" type="text" placeholder="Lastname" onChange={this.handleChange} />
        <button type="submit">+ Add Person</button>
      </form>
    );
  }
}

export default AddPersonForm;
