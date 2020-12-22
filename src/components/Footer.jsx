import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
              <div className="logo-name">
               <h1>VIRTUES</h1>
              </div>
              <div className="catagories">
                <ul>
                  <li><a href="#">beauty</a></li>
                  <li><a href="#">body & soul</a></li>
                  <li><a href="#">food</a></li>
                  <li><a href="#">life</a></li>
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
