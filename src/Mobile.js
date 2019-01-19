import React from 'react';
import { Link } from 'react-router-dom';

function Mobile() {
  return(
    <div id="mobile-box">
      <style>{`
        #mobile-box {
          display: none;
        }
        @media only screen and (max-width: 600px) {
          #mobile-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100vh;
          }
        }
        h1 {
          font-family: 'Satisfy', cursive;
          color: #293448;
        }
      `}</style>
      <h1>Coming to a mobile device near you soon!</h1>
    </div>
  );
}

export default Mobile;
