
import './App.css';
import React, { Component } from 'react';
import { render } from 'react';

import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {

  state = {
    note: {
      "firstName": "",
      "lastName": "",
      "phonenumber": "",
      "message": "",
      "role": "",
    },

    showPopup: false,
  }

  formDataHandler = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value }
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  }

  buttonHandler = () => {
    window.location.reload(true);

  }


  render() {
    const showPopup = this.state.showPopup;
    let popup;

    if (showPopup) {
      popup = <Popup
        discardButtonHandler={this.buttonHandler}
        sendButtonHandler={this.buttonHandler}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        phonenumber={this.state.phonenumber}
        message={this.state.message}
        role={this.state.role}>
        <View {...this.state.note} />
      </Popup>
    }

    return (
      <div className="App">
        <h1>Contact Form</h1>
        <Form
          submitHandler={this.submitHandler}
          eventHandler={this.formDataHandler} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phonenumber={this.state.phonenumber}
          message={this.state.message}
          role={this.state.role} />
        {popup}
      </div>
    )
  }
}

export default App;
