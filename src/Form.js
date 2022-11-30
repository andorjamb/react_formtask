import React from 'react';
import './Form.css';


const Form = ({ eventHandler, submitHandler }) => {
    return (
        <div className="form">
            <form onChange={eventHandler}>
                <label htmlFor="firstname">Firstname</label>
                <input name="firstname" type="text" maxLength={50} id="firstname"></input><br />
                <label htmlFor="lastname">Lastname</label>
                <input name="lastname" type="text" maxLength={50} id="lastname"></input><br />
                <label htmlFor="phone">Phone number</label>
                <input type="tel" name="phone" maxLength={14} id="phone"></input><br />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" maxLength={200}></textarea><br />
                <label htmlFor="role">Role</label>
                <select name="role" id="role" selected="selected">
                    <option value="choice" disabled>Select a role</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="Other">Other</option>
                </select>
            </form>
            <button type="submit" onClick={submitHandler}>Submit Message</button>
        </div>
    )
}
export default Form;