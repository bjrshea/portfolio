import React from 'react';

function Header() {
  return(
    <div id="header">
      <style>{`
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
        #portfolio {
          margin-right: 20px;
        }
        #portfolio:hover {
          cursor: pointer;
          color: #305178;
        }
      `}</style>
      <h3 id="about">About</h3>
      <h3 id="spacer">|</h3>
      <h3 id="portfolio">Portfolio</h3>
    </div>
  );
}

export default Header;
