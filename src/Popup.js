
import React from 'react';
import './Popup.css';

function Popup(props) {
    return (
        <div className="overlay">
            <div className="popup">
                <p>Is this the message you want to send?</p>
                <div className=".popupViewData">
                    {props.children}
                </div>
                <div className="button-div"></div>
                <button id="send" onClick={props.sendButtonHandler}>Send Message</button>
                <button id="discard" onClick={props.discardButtonHandler}>Discard Message</button>

            </div>


        </div>



    )
}



export default Popup; 