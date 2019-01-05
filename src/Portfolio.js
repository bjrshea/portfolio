import React from 'react';
import desktop from './assets/images/desktop.svg'
import laptop from './assets/images/laptop.svg'
import phone from './assets/images/phone.svg'

function Portfolio() {
  return(
    <div id="portfolio-box">
      <style>{`
        #portfolio-box {
          border: 2px solid pink;
        }
        .projects {
          display: flex;
          border: 2px solid blue;
          justify-content: center;
        }
        img {
          display: block;
          width: auto;
          height: auto;
        }
      `}</style>
      <div className="projects" id="project-1">
        <img src={desktop} alt="Desktop image" />
        <img src={laptop} alt="Laptop image" />
        <img src={phone} alt="Phone image" />
      </div>
      <div className="projects" id="project-2">
        <img src={desktop} alt="Desktop image" />
        <img src={laptop} alt="Laptop image" />
        <img src={phone} alt="Phone image" />
      </div>
      <div className="projects" id="project-3">
        <img src={desktop} alt="Desktop image" />
        <img src={laptop} alt="Laptop image" />
        <img src={phone} alt="Phone image" />
      </div>
    </div>
  );
}

export default Portfolio;
