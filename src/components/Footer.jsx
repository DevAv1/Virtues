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
                  <li><a href="#">contact</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">Active</a></li>
                  <li><a href="#">Mindfulness</a></li>
                  <li><a href="#">Beauty</a></li>
                </ul>
              </div>
              <div className="social">

              </div>

              <div className="rights">
                <p>Developed by @AviRevah</p>
              </div>

            </div>
        </div>
    )
}

export default Footer
