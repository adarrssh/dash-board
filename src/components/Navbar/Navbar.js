import React, { useState } from 'react'
import "./Navbar.css"
import './apt.jpg'
import Popup from '../Popup/Popup'
import LoginPopup from '../Popup/LoginPop'

function Navbar() {
  
  const [showModal, setShowModal]=useState(false)
  const [showLoginModal, setShowLoginModal]=useState(false)

  const openModal=()=>{
    setShowModal(true)
  };

  const openLoginModal=()=>{
    setShowLoginModal(true)
  };

  return (
    <>
      <div className='main'>
        <div className='left'>
          <div className="left-el">
            <ul className='left-nav-el'>
              <li><img src={require('./apt.jpg')} alt="" /></li>
              <li>Home</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <ul className='right-nav-el'>
              <li onClick={openLoginModal}>Login</li>
            <li onClick={openModal}>
              Sign Up!
            </li>
          </ul>
        </div>
      </div>
      {showLoginModal?<LoginPopup setShowLoginModal={setShowLoginModal}/>:null}
      {showModal? <Popup setShowModal={setShowModal}/>:null}
    </>
  )
}

export default Navbar