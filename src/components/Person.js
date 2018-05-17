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
      <div>
        <h3>Person details</h3>
        <div>Name: {name}</div>
        <div>Lastname: {lastname}</div>
      </div>
    );
  }
}

export default Person;