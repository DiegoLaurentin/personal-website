import React from 'react';
import './css/footer.css'

function Footer(){
  return(
    <footer>
      <div className="divisor-line"/>
        <div className="footer-info">
          <div className="logo">
            <a>Diego<b>Laurentin</b> ©2022</a>
          </div>
          <div className="links">
            <a href="https://www.behance.net/diegolaurentin">BEHANCE</a>
            <a href="https://www.instagram.com/diegolaurentin/">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/diegolaurentin/">LINKEDIN</a>
          </div>
          <a href="#" className="Back-to-top">BACK TO TOP</a>
      </div>
    </footer>
  )
}

export { Footer };
