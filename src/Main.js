import React, { Component } from 'react';
import './Main.css';
import jQuery from "jquery";





class Main extends Component {
  render() {
    return (
      <div className="main">
        <section className="hero">
          <div className="profile">
            <img src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg" alt="profile pic"/>
            <h2>Lorem Ipsum </h2>
            <p>industry. Lorem Ipsum has been the industry's standard dummy </p>
          </div>
          <div class="skill_bar">
            <div>Skill Bar here</div>
              <h1>My Skills</h1>
              <p>HTML</p>
              <div class="container">
                <div class="skills html">90%</div>
              </div>
              
              <p>CSS</p>
              <div class="container">
                <div class="skills css">80%</div>
              </div>
              
              <p>JavaScript</p>
              <div class="container">
                <div class="skills js">65%</div>
              </div>
              
              <p>PHP</p>
              <div class="container">
                <div class="skills php">60%</div>
              </div>
          </div>
          
        </section>
        <section class="about_me">
            <h2>About Me</h2>
            <blockquote>ndustry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</blockquote>
        </section>
        <section class="projects">
             <h2>Projects Done</h2>
        </section>
        <section class="resume">
            <h2>Resume</h2>
           <div className="resume_profile">
              <img src=""/>
              <h3>Name</h3>
              <p>title</p>
            </div>
            <div>
              <h3>Briefings</h3>
              <p>make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised</p>
            </div>
            <div>
                <h3>Professional Experience</h3>
                <div>
                  <h4>Company Name</h4>
                  <span>Job title</span>
                  <span>Date to Present</span>
                  <h4>Description</h4>
                  <h4>Responsibility</h4>
                  <ul>
                    <li>job experiences listed here</li>
                  </ul>
                  <h4>Environments</h4>
                </div>
                
            </div>
        </section>
         <section class="contact">
               <h2>Contact</h2>
        </section>
      </div>
    );
  }
}
export default Main;
