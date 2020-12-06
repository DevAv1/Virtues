import React from 'react'
import '../styles/header.css'

import {
  Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
          <div className="header-image">
            <img src="" alt=""/>
          </div>
            <div className="header-navbar ">
                <div className="logo">
                    <Link to="/"><span className="logo-name">VIRTUES</span></Link>
                    {/* <i class="fab fa-instagram"></i> */}
                </div>
                <div className="topBotomBordersOut">
                  <ul>
                      <li><Link to="/admin">ADMIN</Link></li>
                      <li><a href="#">contact</a></li>
                      <li><a href="#">about</a></li>
                      <li><a href="#">Active</a></li>
                      <li><a href="#">Mindfulness</a></li>
                      <li><a href="#">Beauty</a></li>
                  </ul>
                </div>
                <div className="burger-menu">
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                  <div className="menu-line"></div>
                </div>
              
            </div>
            
            {/* <div className="header-sub-text">
                <h4>
                  פה יהיה סאב טקסט עם הסבר על וירטוס ומה המטרה שלו, המשפט יהיה לא ארוך מדי וינסה לתמצץ את תכליט הבלוג בצורה הכי יפה ואטרקטיבית.
                </h4>
            </div> */}
        </div>
    )
}

export default Header
