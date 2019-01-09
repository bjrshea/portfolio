import React from 'react';
import howl from './assets/images/howl.png'
import squeeze from './assets/images/squeeze.png'
import thrillist from './assets/images/thrillist.png'

function Portfolio() {
  return(
    <div id="portfolio-box">
      <style>{`
        #portfolio-box {
          border: solid 2px pink;
        }
        .projects {
          position: relative;
          display: flex;
          margin: 125px 0;
          border: solid 2px yellow;
        }
      `}</style>
      <div className="projects" id="project-1">
        <div className="description">

        </div>
        <div className="images">
          <img src={howl} alt="Pictures of Howl"/>
        </div>
      </div>
      <div className="projects" id="project-2">
        <div className="description">

        </div>
        <div className="images">
          <img src={squeeze} alt="Pictures of Squeeze Burger"/>
        </div>
      </div>
      <div className="projects" id="project-3">
        <div className="description">

        </div>
        <div className="images">
          <img src={thrillist} alt="Pictures of Thrillist"/>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
