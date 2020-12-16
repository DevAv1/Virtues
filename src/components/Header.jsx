import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { Link } from "react-router-dom";

const Header = () => {

  const [ show, setShow ] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 45) {
        setShow(true)
      } else setShow(false) 
    });
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className='header' >
        <div className={`header-navbar ${show && "header-navbar__light"}`} >
            <div className="logo">
              <Link to="/"><span className="logo-name">VIRTUES</span></Link>
            </div>
            <div className="topBotomBordersOut">
              <ul>
                {/* <li><Link to="/admin">ADMIN</Link></li> */}
                <li><Link to="/">contact</Link></li>
                <li><Link to="/">life</Link></li>
                <li><Link to="/">food</Link></li>
                <li><Link to="/">body & soul</Link></li>
                <li><Link to="/">Beauty</Link></li>
              </ul>
            </div>
            <div className="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            
        </div>
    </div>
  )
}

export default Header
