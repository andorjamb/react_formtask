
import React from 'react';
import './Popup.css';

const Popup = ({ children, sendButtonHandler, discardButtonHandler }) => {

    return (
        <div className="overlay">
            <div className="popup">
                <p>Is this the message you want to send?</p>
                <div className=".popupViewData">
                    {children}
                </div>
                <div className="button-div"></div>
                <button id="send" onClick={sendButtonHandler}>Send Message</button>
                <button id="discard" onClick={discardButtonHandler}>Discard Message</button>

            </div>


        </div>



    )
}



export default Popup; 