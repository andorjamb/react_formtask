import React from 'react';
import './Form.css';


function Form(props) {
    return (
        <div className="form">
            <form onChange={props.eventHandler}>
                <label htmlFor="firstName">Firstname</label>
                <input name="firstName" type="text" maxLength={50} id="firstName"></input><br />
                <label htmlFor="lastName">Lastname</label>
                <input name="lastName" type="text" maxLength={50} id="lastName"></input><br />
                <label htmlFor="phonenumber">Phonenumber</label>
                <input type="text" name="phonenumber" maxLength={14} id="phonenumber"></input><br />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" maxLength={200}></textarea><br />
                <label htmlFor="role">Role</label>
                <select name="role" id="role" selected="selected">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </form>
            <button type="submit" onClick={props.submitHandler}>Submit Message</button>
        </div>
    )
}
export default Form;