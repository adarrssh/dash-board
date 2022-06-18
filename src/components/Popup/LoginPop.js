import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Popup.css'
import axios from 'axios'

function LoginPopup({ setShowLoginModal }) {

  const [user, setUser] = useState({
    name: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    console.log(value)
  }

  const submit = () => {
    const {email, password } = user
    if (email && password) {
    setShowLoginModal(false);
      axios.post("http://localhost:8000/Login", user)
        .then(res => { console.log(res.data.message);})
        .catct(err => {
          console.log(err);
        })
        
    } else {
      alert("invalid input")
    }
  }


  return ReactDOM.createPortal(
    <div className="container">
      <div className="modal">
        <div className="form">

          <div className='heading-blw'>
            <hr />
            <h4>Login</h4>
          </div>
          <div className="text">
            <input type="text" placeholder='email' name='email' value={user.email} onChange={handleChange} />
            <input type="text" placeholder='password' name='password' value={user.password} onChange={handleChange} />
            <button className='submit' onClick={submit}>Submit</button>
          </div>
        </div>
        <button className='btn' onClick={() => setShowLoginModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default LoginPopup