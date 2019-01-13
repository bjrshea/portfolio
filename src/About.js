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
        #picture {
          display: block;
          margin-left: auto;
        	margin-right: auto;
          height: auto;
          width: 20%;
        }
        #summary {
          width: 50%;
        }
        p {
          font-family: 'Lato', serif;
        }
      `}</style>
      <div id="about-page-box">
        <h1 id="about-header">About Me</h1>
        <img id="picture" src={about} alt="Picture of briefcase"/>
      </div>
      <div id="summary">
        <p>We're in an age where over 55% of world's population has access to the internet (woah!). That 55% can range from your average teenager, your parents, your parent's parents, people with disabilities, etc. For that reason, I think that it's a developers duty to make websites that are easy to understand and effortless to use. I believe in a minimalistic approach not only asthetically, but also informatively.</p>
        <br/>
        <p>I have exposure to manyReact-Redux is my go-to tool. With that said, I'm eager to take on projects that have me expanding my toolkit. I also love design and using CSS/Sass, responsive design, and animations to really make an app pop.</p>
        <br/>
        <p>In my spare time, I enjoy any activity that gets me in the mountains. Much of my inspiration comes from there.</p>
      </div>
    </div>
  );
}

export default About;
