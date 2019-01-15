import React from 'react';
import howl from './assets/images/howl.png'
import squeeze from './assets/images/squeeze.png'
import remoter from './assets/images/remoter.png'
import briefcase from './assets/images/briefcase.png'

function Portfolio() {
  return(
    <div id="portfolio-box">
      <style>{`
        #portfolio-box {
          margin-top: 3%;
        }
        #portfolio-page-box {
          height: 70vh;
          background-color: #E2EFF0;
        }
        #portfolio-header {
          font-family: 'Satisfy', cursive;
          color: #293448;
          text-align: center;
          margin-bottom: 5%;
          font-size: 3.5em;
        }
        #briefcase {
          display: block;
          margin-left: auto;
        	margin-right: auto;
          height: auto;
          width: 20%;
        }
        .projects {
          display: flex;
          justify-content: space-between;
          margin: 2% 0;
          border-bottom: 2px solid #B7B5B3;
        }
        #project-1 {

        }
        #project-3 {
          border-bottom: none;
        }
        .description {
          margin-top: 1%;
          width: 50%;
        }
        .titles {
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 3%;
          margin-left: 5%;
          color: #DC9E82
        }
        p {
          font-family: 'Lato', sans-serif;
          margin-left: 5%;
          margin-right: 8%;
          line-height: 2em;
        }
        button {
          font-family: 'Montserrat', sans-serif;
          border-radius: 5px;
          padding: 1% 0;
          background-color: transparent;
          border: 1px solid #DC9E82;
          color: #DC9E82;
          width: 22%;
          margin: 5% 0 0 5%;
        }
        button:hover {
          cursor: pointer;
          color: white;
          background-color: #DC9E82;
        }
        button:nth-child(2) {
          margin-left: 2%;
        }
        .TBA {
          border: 1px solid #B7B5B3;
          color: #B7B5B3;
        }
        .TBA:hover {
          cursor: default;
          color: #B7B5B3;
          background-color: transparent;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
      <div id="portfolio-page-box">
        <h1 id="portfolio-header">Portfolio</h1>
        <img id="briefcase" src={briefcase} alt="Picture of briefcase"/>
      </div>
      <div className="projects" id="project-1">
        <div className="description">
          <h1 className="titles" >Howl</h1>
          <p>One of my first introductions to an MVC framework! Howl is your one-stop shop for finding concerts, previewing artists, and booking tickets. This app is built using Angular and leverages mutliple API calls to dynamically diplay concert details and artist's songs.</p>
          <div className="buttons">
            <a href="https://github.com/bjrshea/howl"><button>VISIT GITHUB</button></a>
            <a href="https://howl-concert-app.firebaseapp.com/"><button>SEE WEBSITE</button></a>
          </div>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/howl"><img src={howl} alt="Pictures of Howl"/></a>
        </div>
      </div>
      <div className="projects" id="project-2">
        <div className="images">
          <a href="https://github.com/bjrshea/squeeze-burger"><img src={squeeze} alt="Pictures of Squeeze Burger"/></a>
        </div>
        <div className="description">
          <h1 className="titles" >Squeeze Burger</h1>
          <p>A food truck locater for the Guy Fieri approved Squeeze Burger. This app was built in React-Redux to help the owners of Squeeze Burger let their customers know where the food truck will be on a given day. This app utilizes multiple API calls, Firebase OAuth, and EmailJS for client booking requests.</p>
          <div className="buttons">
            <a href="https://github.com/bjrshea/squeeze-burger"><button>VISIT GITHUB</button></a>
            <button className="TBA">COMING ONLINE SOON</button>
          </div>
        </div>
      </div>
      <div className="projects" id="project-3">
        <div className="description">
          <h1 className="titles" >The Remoter</h1>
          <p>An app for a pseudo co-working space that I built during my learning UX/UI in programming school. The Remoter takes you on a journey through the entire web design process — from the beginning stages of wireframing and prototyping all the way to development.</p>
          <div className="buttons">
            <a href="https://github.com/bjrshea/the-remoter"><button>VISIT GITHUB</button></a>
            <button className="TBA">COMING ONLINE SOON</button>
          </div>
        </div>
        <div className="images">
          <a href="https://github.com/bjrshea/the-remoter"><img src={remoter} alt="Pictures of The Remoter"/></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
