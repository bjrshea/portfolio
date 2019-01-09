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
          display: flex;
          justify-content: space-between;
          margin: 125px 0;
          border: solid 2px yellow;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
      <div className="projects" id="project-1">
        <div className="description">
          <h2>Howl</h2>
          <p></p>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/howl"><img src={howl} alt="Pictures of Howl"/></a>
        </div>
      </div>
      <div className="projects" id="project-2">
        <div className="description">
          <h2>Squeeze Burger</h2>
          <p></p>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/squeeze-burger"><img src={squeeze} alt="Pictures of Squeeze Burger"/></a>
        </div>
      </div>
      <div className="projects" id="project-3">
        <div className="description">
          <h2>Thrillist</h2>
          <p></p>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/thrillist"><img src={thrillist} alt="Pictures of Thrillist"/></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
