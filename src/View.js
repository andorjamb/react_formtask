import React from 'react';
import './View.css';

function View(props) {
    return (
        <div className="view">
            <h3>Your Input:</h3>
            <p><span className="proforma">First name</span><span className='handwriting'>{props.firstName}</span></p>
            <p><span className="proforma">Last name</span><span className='handwriting'>{props.lastName}</span></p>
            <p><span className="proforma">Phone Number</span><span className='handwriting'>{props.phonenumber}</span></p>
            <p><span className="proforma">Message</span><span className='handwriting'>{props.message}</span></p>
            <p><span className="proforma">Role</span><span className='handwriting'>{props.role}</span></p>
        </div>
    )
}

export default View;