import React from 'react'
import logo from '../assets/logo.jpg';

function Logo({width = '100px'}) {
  return (
      <img src={logo} alt="Logo" height='10px' width='20px'/>
    
  )
}

export default Logo