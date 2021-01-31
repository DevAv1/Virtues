import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
              <div className="logo-name">
               <h1>Virtues</h1>
              </div>
              <div className="catagories">
                <ul>
                  <li><Link to="/category/beauty">beauty</Link></li>
                  <li><Link to="/category/body and soul" href="#">body & soul</Link></li>
                  <li><Link to="/category/food" href="#">food</Link></li>
                  <li><Link to="/category/life" href="#">life</Link></li>
                </ul>
              </div>
              <div className="social">

              </div>
              <div className="rights">
                <p>Developed by &copy;AviRevah</p>
              </div>
            </div>
        </div>
    )
}

export default Footer
