import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Popup.css'
import axios from 'axios'

function Popup({ setShowModal }) {

  const [user, setUser] = useState({
    name: "",
    email: "",
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
    const { name, email, password } = user
    if (name && email && password) {
      axios.post("http://localhost:8000/Register", user)
        .then(res => { console.log(res) })
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
            <h4>Signup</h4>
          </div>
          <div className="text">
            <input type="text" placeholder='name' name='name' value={user.name} onChange={handleChange} />
            <input type="text" placeholder='email' name='email' value={user.email} onChange={handleChange} />
            <input type="text" placeholder='password' name='password' value={user.password} onChange={handleChange} />
            <button className='submit' onClick={submit}>Submit</button>
          </div>
        </div>
        <button className='btn' onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Popup