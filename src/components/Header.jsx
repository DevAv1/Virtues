import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';


const Header = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false)
  const [ show, setShow ] = useState(false)

  const handleToggleMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

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
      <div className="cover_image">
        <div className="cover_text">
          <h1>Healthy Life...</h1>
          <p>By Limor Sror</p>
        </div>
      </div>
        <div className={`header-navbar ${show && "header-navbar__light"}`} >
            <div className="logo">
              <Link to="/"><span className="logo-name">VIRTUES</span></Link>
              <a href="https://www.instagram.com/limorsror/" target="_blank"><InstagramIcon id="logo_inst"/></a>
              
            </div>
            <div className="topBotomBordersOut">
              <ul>
                {/* <li><Link to="/admin">ADMIN</Link></li> */}
                <li><Link to="/category/life">life</Link></li>
                <li><Link to="/category/food">food</Link></li>
                <li><Link to="/category/body and soul">body & soul</Link></li>
                <li><Link to="/category/beauty">Beauty</Link></li>
              </ul>
            </div>
            <div className="burger" onClick={handleToggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
           
              <nav className={`${!showMobileMenu ? "mobile_menu" : "mobile_menu_open"}`}>
                <CloseIcon id="close_menu_icon" onClick={handleToggleMenu}/>
                <ul>
                  <li onClick={handleToggleMenu}><Link to="/category/beauty">Beauty</Link></li>
                  <li onClick={handleToggleMenu}><Link to="/category/body and soul">Body & Soul</Link></li>
                  <li onClick={handleToggleMenu}><Link to="/category/food">Food</Link></li>
                  <li onClick={handleToggleMenu}><Link to="/category/life">Life</Link></li>
                </ul>
                <div className="social">
                  <a href="https://www.instagram.com/limorsror/" target="_blank">
                   <InstagramIcon id="inst"/>
                  </a>
                </div>
              </nav>

            
        </div>
    </div>
  )
}

export default Header
