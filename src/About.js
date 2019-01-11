import React from 'react';
import about from './assets/images/about.png'

function About() {
  return(
    <div id="about-box">
      <style>{`
        #about-box {
          margin-top: 3%;
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
        #briefcase {
          display: block;
          margin-left: auto;
        	margin-right: auto;
          height: auto;
          width: 20%;
        }
      `}</style>
      <div id="about-page-box">
        <h1 id="about-header">About</h1>
        <img id="briefcase" src={about} alt="Picture of briefcase"/>
      </div>
      <br/>
      <p>I'm passionate about building applications that are minimal and have value for its users. I believe in the notion that less is more, and I think it’s a developer’s duty to make programs that are clear and effortless to use.</p>
      <br/>
      <p>JavaScript and React-Redux are my bread and butter, but I'm eager to take on projects that have me expanding my toolkit. I also love design and using CSS/Sass, responsive design, and animations to really make an app pop.</p>
      <br/>
      <p>In my spare time, I enjoy any activity that gets me in the mountains. Much of my inspiration comes from there.</p>
    </div>
  );
}

export default About;
