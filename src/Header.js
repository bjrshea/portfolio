import React from 'react';

function Header() {
  return(
    <div id="header">
      <style>{`
        #header {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }
        #spacer {
          margin: 0 5px;
        }
        #my-work {
          margin-right: 20px;
        }
      `}</style>
      <h2>About</h2>
      <h2 id="spacer">|</h2>
      <h2 id="my-work">My Work</h2>
    </div>
  );
}

export default Header;
