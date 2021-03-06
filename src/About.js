import React from 'react';
import about from './assets/images/about.png'
import collage from './assets/images/collage.png'

function About() {
  return(
    <div id="about-box">
      <style>{`
        #about-box {
          margin-top: 3%;
          margin-bottom: 3%;
        }
        #about-page-box {
          height: 70vh;
          background-color: #E2EFF0;
        }
        #about-header {
          font-family: 'Satisfy', cursive;
          color: #293448;
          text-align: center;
          margin-bottom: 5%;
          font-size: 3.5em;
        }
        #picture {
          display: block;
          margin-left: auto;
        	margin-right: auto;
          height: auto;
          width: 20%;
        }
        #about-section {
          display: flex;
          justify-content: space-between;
        }
        #summary {
          width: 50%;
          margin: auto;
          padding: 10px;
        }
        #collage-box {
          width: 50%;
          margin-right: 2.5%;
        }
        p {
          font-family: 'Lato', serif;
          font-size: 1rem;
          margin-left: 5%;
          margin-right: 8%;
          line-height: 1.6;
        }
        #collage {
          display: block;
          width: 100%;
          height: auto;
        }
        #drop-line {
          font-weight: bold;
          color: #E3753D;
        }
      `}</style>
      <div>
      </div>
      <div id="about-page-box">
        <h1 id="about-header">About Me</h1>
        <img id="picture" src={about} alt="Picture of briefcase"/>
      </div>
      <div id="about-section">
        <div id="summary">
          <p>We're in an age where over 55% of world's population has access to the internet (woah!). That 55% can range from your average teenager, your parents, your parent's parents, people with disabilities, etc. For that reason, I think it's a developer's duty to make websites that are easy to understand and effortless to use. I believe in a minimalistic approach not only asthetically, but also informatively.</p>
          <br/>
          <p>When it comes to programming, React-Redux is my go-to tool. That said, I'm eager to take on projects that have me expanding my toolkit. I also love design and using CSS/Sass, responsive design, and animations to really make a website pop.</p>
          <br/>
          <p>In my spare time, I love to ski, hike, camp, and do anything else that includes my dogs. I live in the Pacific Northwest, and I'm convinced that it's the most beautiful place in the world. Not to mention, it's a great place to find inspiration.</p>
          <br/>
          <p>If you're interested in collaborating on a project, talking about code, or anything else, feel free to <a href="https://www.linkedin.com/in/brendanjshea/"><span id="drop-line">drop me a line</span></a>!</p>
        </div>
        <div id="collage-box">
          <img id="collage" src={collage} alt="Collage of photos of me and my dog"/>
        </div>
      </div>
    </div>
  );
}

export default About;
