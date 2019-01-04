import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div id="header">
      <style>{`
        a {
          text-decoration: none;
        }
        a:visited {
          color: #305178;
        }
        #header {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
          font-family: 'Andika', sans-serif;
          color: #072251;
        }
        #about:hover {
          cursor: pointer;
          color: #305178;
        }
        #spacer {
          margin: 0 5px;
        }
        #spacer:hover {
          cursor: default;
        }
        #portfolio:hover {
          cursor: pointer;
          color: #305178;
        }
        #contact {
          margin-right: 20px;
        }
        #contact:hover {
          cursor: pointer;
          color: #305178;
        }
      `}</style>
      <h3><Link to="/about"><span id="about">About</span></Link></h3>
      <h3 id="spacer">|</h3>
      <h3><Link to="/portfolio"><span id="portfolio">Portfolio</span></Link></h3>
      <h3 id="spacer">|</h3>
      <h3><Link to="/contact"><span id="contact">Contact</span></Link></h3>
    </div>
  );
}

export default Header;
