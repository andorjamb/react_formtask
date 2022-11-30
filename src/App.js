import React, { useEffect, useState } from 'react';

import Form from './Form';
import Notes from './Notes'
import Popup from './Popup';
import View from './View';

import './App.css';
import axios from 'axios';

const App = ({ notes }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [view, setView] = useState([]);
  const [note, setNote] = useState({

    "firstName": "",
    "lastName": "",
    "phonenumber": "",
    "message": "",
    "role": "",
  }
  );

  const submitHandler = (e) => {
    e.preventDefault();
    setShowPopup(true);
  }

  const formDataHandler = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
    setView({ ...note, [e.target.name]: e.target.value });
  }

  const sendButtonHandler = () => {
    axios.post('http://localhost:3003/notes', {
      ...note
    })
      .catch((error) => console.log(error));
    setShowPopup(false);
    window.location.reload(true);

  }

  const disCardButtonHandler = () => {
    setShowPopup(false);
    window.location.reload(true)

  }

  /*  useEffect(() => {
 
   }, [showPopup])
  */

  return (

    <div className="App">
      <header> <h1>Contact Form</h1></header>
      <main>

        <Form
          submitHandler={submitHandler}
          eventHandler={formDataHandler} {...note} />

        <View {...note} /></main> <Notes />
      {showPopup && <Popup firstname={note.firstname}
        sendButtonHandler={sendButtonHandler}
        discardButtonHandler={disCardButtonHandler} />}
    </div>
  )
}

export default App;
