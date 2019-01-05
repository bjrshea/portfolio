import React from 'react';
import { Link } from 'react-router-dom';
import home from './assets/images/home.png';

function Header() {
  return(
    <div id="header-box">
      <style>{`
        #header-box {
          display: flex;
          justify-content: space-between;
        }
        #header-left {
          display: flex;
          margin-top: 10px;
          margin-left: 20px;
        }
        #home-button {
          height: 35px;
          width: 35px;
        }
        #home-button:hover {
          cursor: pointer;
        }
        #header-right {
          display: flex;
          margin-top: 10px;
          font-family: 'Andika', sans-serif;
          color: #072251;
        }
        a {
          text-decoration: none;
        }
        a:visited {
          color: #305178;
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
      <div id="header-left">
        <Link to="/"><img id="home-button" src={home} alt="Home button"/></Link>
      </div>
      <div id="header-right">
        <h3><Link to="/about"><span id="about">About</span></Link></h3>
        <h3 id="spacer">|</h3>
        <h3><Link to="/portfolio"><span id="portfolio">Portfolio</span></Link></h3>
        <h3 id="spacer">|</h3>
        <h3><Link to="/contact"><span id="contact">Contact</span></Link></h3>
      </div>
    </div>
  );
}

export default Header;
