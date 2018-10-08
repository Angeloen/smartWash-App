import React, { Component } from 'react';

class OrderFields extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      }
    }

  render() {
    return (
      <div>
      <label>Name</label>
      <input type="text"
             ref="name"
             defaultValue={ this.props.fieldValues.name } />

      <label>Address</label>
      <input type="Address"
             ref="Address"
             defaultValue={ this.props.fieldValues.Address } />

      <label>PhoneNumber</label>
      <input type="PhoneNumber"
             ref="PhoneNumber"
             defaultValue={ this.props.fieldValues.PhoneNumber } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button>
      </div>
    )
  }

  saveAndContinue(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      Address : this.refs.Address.getDOMNode().value,
      PhoneNumber    : this.refs.PhoneNumber.getDOMNode().value,
      //BagSize : this.refs.BagSize.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
}

export default OrderFields;
