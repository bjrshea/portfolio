import React from 'react';
import howl from './assets/images/howl.png'
import squeeze from './assets/images/squeeze.png'
import remoter from './assets/images/remoter.png'

function Portfolio() {
  return(
    <div id="portfolio-box">
      <style>{`
        #portfolio-box {
        }
        .projects {
          display: flex;
          justify-content: space-between;
          margin: 2% 0;
          border-bottom: 1px solid #B7B5B3;
        }
        .projects:nth-child(4) {
          border-bottom: none;
        }
        .description {
          margin-top: 1%;
          width: 50%;
        }
        h1, p {
          text-align: center;
        }
        h1 {
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 3%;
        }
        p {
          font-family: 'Lato', sans-serif;
          margin: 0 5%;
          line-height: 2em;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
      <div className="projects" id="project-1">
        <div className="description">
          <h1>Howl</h1>
          <p>One of my first introductions to an MVC framework! Howl is your one-stop shop for finding concerts, previewing artists, and booking tickets. This app is built using Angular and leverages mutliple API calls to dynamically diplay concert details and artist's songs.</p>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/howl"><img src={howl} alt="Pictures of Howl"/></a>
        </div>
      </div>
      <div className="projects" id="project-2">
        <div className="description">
          <h1>Squeeze Burger</h1>
          <p>A food truck locater for the Guy Fieri approved Squeeze Burger. This app was built in React-Redux to help the owners of Squeeze Burger let their customers know where the food truck will be on a given day. This app utilizes multiple API calls, Firebase OAuth, and EmailJS for client booking requests.</p>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/squeeze-burger"><img src={squeeze} alt="Pictures of Squeeze Burger"/></a>
        </div>
      </div>
      <div className="projects" id="project-3">
        <div className="description">
          <h1>The Remoter</h1>
          <p>An app for a pseudo co-working space that I built during my learning UX/UI in programming school. The Remoter takes you on a journey through the entire web design process — from the beginning stages of wireframing and prototyping all the way to development.</p>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/the-remoter"><img src={remoter} alt="Pictures of The Remoter"/></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
