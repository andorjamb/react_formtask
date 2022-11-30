import React from 'react';
import './View.css';

const View = ({ firstname, lastname, phone, message, role }) => {

    return (
        <div className="view">
            <h3>Your Input:</h3>
            <p><span className="proforma">First name</span><span className='handwriting'>{firstname}</span></p>
            <p><span className="proforma">Last name</span><span className='handwriting'>{lastname}</span></p>
            <p><span className="proforma">Phone Number</span><span className='handwriting'>{phone}</span></p>
            <p><span className="proforma">Message</span><span className='handwriting'>{message}</span></p>
            <p><span className="proforma">Role</span><span className='handwriting'>{role}</span></p>
        </div>
    )
}

export default View;