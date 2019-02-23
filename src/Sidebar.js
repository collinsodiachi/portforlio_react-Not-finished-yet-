import React, { Component } from 'react';
import logo from './logo.svg';
import './Sidebar.css';
import jQuery from "jquery";

jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({ width: jQuery(this).attr('data-percent') }, 3000);
    });
});

jQuery(document).ready(function(){
    let lastScrollTop = 800;
    jQuery(window).scroll(function(){
      let currentScrollPosition = jQuery(this).scrollTop();
      if(currentScrollPosition >= lastScrollTop){
          jQuery("#pro").addClass("sidebar_profile_reveal")
      }else{
          jQuery("#pro").removeClass("sidebar_profile_reveal")
      }
    })
})

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div id="pro" className="sidebar_profile">
          <img src="https://r.hswstatic.com/w_907/gif/tesla-cat.jpg"/>
          <h2>Heading2</h2>
          <p>Paragraph goes here</p>
        </div>
        <nav className="nav">
          <ul>
              <li><a id="home" href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="">Contact</a></li>
          </ul>
        </nav>
        <div className="skill_bar">
          <p className="wide">CSS 3</p>
            <div className="back skillbar clearfix" data-percent="55%">
              <div className="skill skillbar-bar">55%</div>
            </div>
            <p className="wide">CSS 3</p>
            <div className="back skillbar clearfix" data-percent="100%">
              <div className="skill skillbar-bar">100%</div>
            </div>
        </div>
    </div>
    );
  }
}

export default Sidebar;
