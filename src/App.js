import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import './App.css';
import Sidebar from "./Sidebar"; 
import Main from "./Main"; 
import jQuery from "jquery";





ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <Main/>
      </div>
    );
  }
}

export default App;
