import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table';

class App extends Component {

  state = {
    buttress: []
  }

  getData(url, stateName) {
    axios.get(url)
      .then(({ data} ) => {
        this.setState({ [stateName]: data });
        //console.log(this.state.buttress);
      })
  }

  componentDidMount() {
    this.getData('https://my-json-server.typicode.com/Sergio-Falcon/fakeData/users', 'buttress');
  }
  

  render() {
    let getPitch = (challenge, feetClimbed) => {
    let pitch = '';
    switch(challenge) {
      case 'buttress':
        pitch = feetClimbed / 5;
        break;
      case 'dolt':
        pitch = feetClimbed / 10;
        break;
      case 'greatroof':
        pitch = feetClimbed / 15;
        break;
      case 'nose':
        pitch = feetClimbed / 31;
        break;
      default:
        pitch = 0;
      }
      return pitch;
    }
    
    //{index + 1}
    //console.log("Butt", buttress[2])
    
    const {buttress} = this.state;
    return (

      <div className="App">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="climbalytics">CLIMBALYTICS</span>
          <span className="title">El Capitan Challenge</span>
          <span className="date">March 2019</span>
        </div>
        <div className="Body">
          <Table className="leaderboard">
            <thead>
              <tr>
                <th className="buttress" colSpan="2">S.E.BUTTRESS+</th>
                <th colSpan="2">DOLT TOWER+</th>
                <th colSpan="2">GREAT ROOF+</th>
                <th colSpan="2">THE NOSE</th>
              </tr>
            </thead>
            <tbody>
              {buttress.map((row, index) => (
                <tr key={row.username}>
                  <td>
                    {/*{index + 1}*/}
                    <div className="rowName">
                      <span className="username">{row.username}</span>
                    </div>
                  </td>
                  <td>
                    <div className="rowInfo">
                      {getPitch(row.challenge, row.feetClimbed)}
                    </div>
                    <div className="rowInfo2">
                      {row.feetClimbed}
                    </div>
                  </td>
                  <td>
                    <div className="rowName">
                      <span className="username">{row.username}</span>
                    </div>
                  </td>
                  <td>
                    <div className="rowInfo">
                      {getPitch(row.challenge, row.feetClimbed)}
                    </div>
                    <div className="rowInfo2">
                      {row.feetClimbed}
                    </div>
                  </td>
                  <td>
                    
                    <div className="rowName">
                      <span className="username">{row.username}</span>
                    </div>
                  </td>
                  <td>
                    <div className="rowInfo">
                      {getPitch(row.challenge, row.feetClimbed)}
                    </div>
                    <div className="rowInfo2">
                      {row.feetClimbed}
                    </div>
                  </td>
                  <td>
                    {/*{index + 1}*/}
                    <div className="rowName">
                      <span className="username">{row.username}</span>
                    </div>
                  </td>
                  <td>
                    <div className="rowInfo">
                      {getPitch(row.challenge, row.feetClimbed)}
                    </div>
                    <div className="rowInfo2">
                      {row.feetClimbed}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
