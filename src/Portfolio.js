import React from 'react';
import desktopHowl from './assets/images/howl-desktop.png'
import laptopHowl from './assets/images/howl-laptop.png'
import desktopSqueeze from './assets/images/squeeze-desktop.png'
import laptopSqueeze from './assets/images/squeeze-laptop.png'
import desktopThrillist from './assets/images/thrillist-desktop.png'
import laptopThrillist from './assets/images/thrillist-laptop.png'
import phone from './assets/images/phone.svg'


function Portfolio() {
  return(
    <div id="portfolio-box">
      <style>{`
        #portfolio-box {
          margin-top: 125px;
        }
        .projects {
          position: relative;
          display: flex;
          margin-bottom: 125px;
        }
        #project-1 {
          justify-content: flex-end;
          margin-right: 3%;
        }
        #project-2 {
          justify-content: flex-start;
          margin-left: 3%;
        }
        #project-3 {
          justify-content: flex-end;
          margin-right: 3%;
        }
        .project-images {
          border: 1px solid pink;
        }
        .desktop {
          margin-bottom: 30px;
        }
        img {
          display: block;
          width: auto;
          height: auto;
        }
        a:nth-child(2) {
          position: absolute;
          bottom: 0;
        }
        #laptop-1 {
          margin-right: 30;
        }
      `}</style>
      <div className="projects" id="project-1">
        <div className="project-images">
          <a href="https://github.com/bjrshea/howl"><img className="desktop" src={desktopHowl} alt="Desktop image"/></a>
          <a href="https://github.com/bjrshea/howl"><img id="laptop-1" src={laptopHowl} alt="Laptop image"/></a>
        </div>
      </div>
      <div className="projects" id="project-2">
        <div className="project-images">
          <a href="https://github.com/bjrshea/squeeze-burger"><img className="desktop" src={desktopSqueeze} alt="Desktop image"/></a>
          <a href="https://github.com/bjrshea/squeeze-burger"><img id="laptop-2" src={laptopSqueeze} alt="Laptop image"/></a>
        </div>
      </div>
      <div className="projects" id="project-3">
        <div className="project-images">
          <a href="https://github.com/bjrshea/thrillist"><img className="desktop" src={desktopThrillist} alt="Desktop image"/></a>
          <a href="https://github.com/bjrshea/thrillist"><img id="laptop-3" src={laptopThrillist} alt="Laptop image"/></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
