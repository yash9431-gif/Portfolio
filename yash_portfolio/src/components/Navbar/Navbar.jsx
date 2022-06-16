import React from 'react'
import { HashLink as Link } from "react-router-hash-link"
import "./Navbar.css"

const Navbar = () => {
  return (
      <div className='navbar'>
          
          <button ><Link smooth to='#home'>Home</Link></button>
         <button><Link smooth to='#about'>About</Link></button>
          <button><Link smooth to='#project'>Projects</Link></button>
          <button><Link smooth to='#skills'>Skills</Link></button> 
          <button><Link smooth to='#contact'>Contact</Link></button>
          
    </div>
  )
}

export default Navbar