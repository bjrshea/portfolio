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
        }
        #spacer {
          margin: 0 5px;
        }
        #my-work {
          margin-right: 20px;
        }
      `}</style>
      <h3>About</h3>
      <h3 id="spacer">|</h3>
      <h3 id="my-work">Portfolio</h3>
    </div>
  );
}

export default Header;
