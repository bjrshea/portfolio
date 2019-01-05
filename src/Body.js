import React from 'react';
import github from './assets/images/github.svg'
import google from './assets/images/google.png'
import linkedin from './assets/images/linkedin.png'
import mountains from './assets/images/mountains.svg';
import cloud from './assets/images/cloud.png';
import balloon1 from './assets/images/balloon1.svg';
import balloon2 from './assets/images/balloon2.svg';
import balloon3 from './assets/images/balloon3.svg';

function Body() {
  return(
    <div id="body-box">
      <style>{`
        #body-box {
          overflow: hidden;
        }
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
          animation: blow 70s linear infinite reverse;
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
          color: #293448;
        }
        #intro-2 {
          font-family: arial;
          margin-top: 10px;
          color: #072251;
        }
        #links {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }
        .link {
          width: 35px;
          height: 35px;
          margin-right: 10px;
        }
        .link:nth-child(3) {
          margin-right: 0px;
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
          max-height: 580px;
        }
        .balloons {
          display: flex;
          justify-content: space-between;
        }
        .balloon {
          z-index: -2;
          position: absolute;
        }
        .balloon:nth-child(1) {
          width: 40px;
          height: 59px;
          animation: fly 58s linear infinite;
          left: 10%;
        }
        .balloon:nth-child(2) {
          width: 45px;
          height: 67px;
          animation: fly 50s linear infinite;
          right: 20%;
        }
        .balloon:nth-child(3) {
          width: 35px;
          height: 52px;
          animation: fly 70s linear infinite;
          left: 35%;
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
        <div id="links">
          <img className="link" src={github} alt="Link to Github" />
          <img className="link" src={google} alt="Link to Google" />
          <img className="link" src={linkedin} alt="Link to LinkedIn" />
        </div>
      </div>
      <div id="mountains">
        <img id="mountain" src={mountains}/>
      </div>
      <div className="balloons">
        <img className="balloon" src={balloon1} alt="balloon"/>
        <img className="balloon" src={balloon2} alt="balloon"/>
        <img className="balloon" src={balloon3} alt="balloon"/>
      </div>
    </div>
  );
}

export default Body;
