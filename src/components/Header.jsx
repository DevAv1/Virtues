import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';

const Header = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false)
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
            <div className="burger" onClick={() => setShowMobileMenu(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {showMobileMenu && 
              <nav className="mobile_menu">
                <CloseIcon id="close_menu_icon" onClick={() => setShowMobileMenu(false)}/>
                <ul>
                  <li><Link to="/">Beauty</Link></li>
                  <li><Link to="/">Body & Soul</Link></li>
                  <li><Link to="/">Food</Link></li>
                  <li><Link to="/">Life</Link></li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
                <div className="social">
                  <InstagramIcon />
                </div>
              </nav>

            }
        </div>
    </div>
  )
}

export default Header
