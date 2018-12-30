import React from 'react';
import mountains from './assets/images/mountains.svg';
import cloud from './assets/images/cloud.png';

function Body() {
  return(
    <div id="body">
      <style>{`
        .cloud {
          position: absolute;
          z-index: -1;
        }
        .cloud:nth-child(1) {
          opacity: 0.4;
          width: 120px;
          height: 60px;
          animation: blow 100s linear infinite;
        }
        .cloud:nth-child(2) {
          opacity: 0.6;
          width: 140px;
          height: 70px;
          animation: blow 90s linear infinite reverse;
        }
        .cloud:nth-child(3) {
          opacity: 0.8;
          width: 180px;
          height: 90px;
          animation: blow 75s linear infinite;
        }
        @keyframes blow {
          from{left: -180px}
          to{left: 100%}
        }
        #mountains {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: auto;
        }
        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className="clouds">
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
      </div>
      <div id="mountains">
        <img src={mountains}/>
      </div>
    </div>
  );
}

export default Body;
