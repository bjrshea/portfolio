import React from 'react';
import desktopHowl from './assets/images/howl-desktop.png'
import laptopHowl from './assets/images/howl-laptop.png'
import desktopSqueeze from './assets/images/squeeze-desktop.png'
import laptopSqueeze from './assets/images/squeeze-laptop.png'
import phone from './assets/images/phone.svg'


function Portfolio() {
  return(
    <div id="portfolio-box">
      <style>{`
        #portfolio-box {
        }
        .projects {
          position: relative;
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }
        .desktop {
          margin-bottom: 30px;
        }
        img {
          display: block;
          width: auto;
          height: auto;
        }
        img:hover {
          cursor: pointer;
        }
        img:nth-child(2) {
          position: absolute;
          bottom: 0;
          left: 20%;
        }
      `}</style>
      <div className="projects" id="project-1">
        <img className="desktop" src={desktopHowl} alt="Desktop image" />
        <img src={laptopHowl} alt="Laptop image" />
      </div>
      <div className="projects" id="project-2">
        <img className="desktop" src={desktopSqueeze} alt="Desktop image" />
        <img src={laptopSqueeze} alt="Laptop image" />
      </div>
      <div className="projects" id="project-3">
        <img className="desktop" src={desktopHowl} alt="Desktop image" />
        <img src={laptopHowl} alt="Laptop image" />
      </div>
    </div>
  );
}

export default Portfolio;
