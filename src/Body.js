import React from 'react';
import mountains from './assets/images/mountains.svg';
import cloud from './assets/images/cloud.png';
import balloon1 from './assets/images/balloon1.svg';
import balloon2 from './assets/images/balloon2.svg';

function Body() {
  return(
    <div id="body">
      <style>{`
        .cloud {
          position: absolute;
          z-index: -1;
        }
        .cloud:nth-child(1) {
          top: 5%;
          opacity: 0.4;
          width: 120px;
          height: 70px;
          animation: blow 100s linear infinite;
        }
        .cloud:nth-child(2) {
          top: 8%;
          opacity: 0.6;
          width: 140px;
          height: 80px;
          animation: blow 90s linear infinite reverse;
        }
        .cloud:nth-child(3) {
          top: 10%;
          opacity: 0.7;
          width: 180px;
          height: 100px;
          animation: blow 70s linear reverse;
        }
        .cloud:nth-child(4) {
          top: 3%;
          opacity: 0.8;
          width: 140px;
          height: 80px;
          animation: blow 120s linear infinite;
        }
        .cloud:nth-child(5) {
          top: 12%;
          opacity: 0.5;
          width: 160px;
          height: 90px;
          animation: blow 80s linear infinite;
        }
        @keyframes blow {
          from{left: -180px}
          to{left: 100%}
        }
        #intro-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          min-height: 70vh;
        }
        #intro-1 {
          font-family: 'Amatic SC', cursive;
          font-size: 50px;
        }
        #intro-2 {
          font-family: 'Andika', sans-serif;
          margin-top: 5px;
        }
        #mountains {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: auto;
        }
        #mountain {
          width: 100%;
          height: 100%;
        }
        .balloons {
          display: flex;
          justify-content: space-between;
        }
        .balloon {
          z-index: -2;
          position: absolute;
          width: 45px;
          height: 67px;
        }
        .balloon:nth-child(1) {
          animation: fly 60s linear infinite;
          left: 10%;
        }
        .balloon:nth-child(2) {
          animation: fly 40s linear infinite;
          right: 30%;
        }
        @keyframes fly {
          from{bottom: -40px}
          to{bottom: 100%}
        }
      `}</style>
      <div className="clouds">
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
        <img className="cloud" src={cloud} alt="cloud"/>
      </div>
      <div id="intro-box">
        <h1 id="intro-1">Hi, my name is Brendan</h1>
        <h3 id="intro-2">and I'm a web developer.</h3>
      </div>
      <div id="mountains">
        <img id="mountain" src={mountains}/>
      </div>
      <div className="balloons">
        <img className="balloon" src={balloon1} alt="balloon"/>
        <img className="balloon" src={balloon2} alt="balloon"/>
      </div>
    </div>
  );
}

export default Body;