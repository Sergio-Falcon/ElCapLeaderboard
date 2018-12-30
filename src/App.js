import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import { render } from "react-dom";
//import { makeData, Logo, Tips } from "./Utils";

// Import Table

//import BasicTable from './scrolltable'
//import RTable from './RTable'
import Leaderboard from './Leaderboard'
//import ColumnAlignTable from './ColumnAlignTable'

class App extends Component {
  
  render() {
    return (
      <div className='App'> 
        <div className="header">
          <div className="firstHalf">
            <img src={logo} className="logo" alt="logo" />
            <span className="climbalytics">CLIMBALYTICS</span>
          </div>
          <div className="secondHalf">
            <span className="title">El Capitan Challenge</span>
            <span className="date">March 2019</span>
          </div>
          
        </div>
          <Leaderboard />
        </div>
    );
  }
}

export default App;
