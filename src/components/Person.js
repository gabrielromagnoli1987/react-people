import React from "react";
import PropTypes from "prop-types";

class Person extends React.Component {

  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string
    })
  };

  render() {
    const { name, lastname } = this.props.details;
    return(
      <li>
        <h3>Person details</h3>
        <div>Name: {name}</div>
        <div>Lastname: {lastname}</div>
      </li>
    );
  }
}

export default Person;