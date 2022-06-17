import React from 'react'
import  ReactDOM from 'react-dom';
import './Popup.css'

function Popup({setShowModal}) {


    return ReactDOM.createPortal(
        <div className="container">
          <div className="modal">
            <div className="form">
                <div className='heading'>
                <h4>Login or Sign up</h4>
                </div>
                <div className="text">
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='password' />
                    <button className='submit'>Submit</button>
                </div>
            </div>
            <button className='btn' onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>,
        document.getElementById("portal")
    );
}

export default Popup