import React, { useState } from 'react'
import "./Navbar.css"
import './apt.jpg'
import Popup from '../Popup/Popup'

function Navbar() {
  
  const [showModal, setShowModal]=useState(false)

  const openModal=()=>{
    setShowModal(true)
  };

  return (
    <>
      <div className='main'>
        <div className='left'>
          <div className="left-el">
            <ul className='left-nav-el'>
              <li><img src={require('./apt.jpg')} alt="" /></li>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <ul className='right-nav-el'>
            <li onClick={openModal}>
              Click here to Login or Sign Up!
            </li>
          </ul>
        </div>
      </div>
      {showModal? <Popup setShowModal={setShowModal}/>:null}
    </>
  )
}

export default Navbar