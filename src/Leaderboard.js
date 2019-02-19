import React, { Component } from 'react';
import './Leaderboard.css';
import axios from 'axios';
import ChallengeColumn from './ChallengeColumn';
import { makeData, splitData } from "./Utils";

class Leaderboard extends Component {

  state = {
    users: [] // if you want to create fake data use makeData()
  }

  getData(url, stateName) {
    axios.get(url)
      .then(({ data} ) => {
        this.setState({ [stateName]: data });
      })
  }

  componentDidMount() {
    //this.getData('https://my-json-server.typicode.com/Sergio-Falcon/fakeData/users', 'users');
    this.getData('http://api.climbalytics.com/v1/event/1/leaderboard', 'users');
  }

  render() {
    const {users} = this.state;
    const buttress = splitData(users, 1);
    const dolt = splitData(users, 2);
    const roof = splitData(users, 3);
    const nose = splitData(users, 4);

    const title = ["S.E. BUTTRESS +", "DOLT TOWER +", "GREAT ROOF +", "SUMMIT"]
    const style = ["buttress", "dolt", "roof", "nose"]
    
/*    
    console.log("Leaderboard buttress: ", buttress)
    console.log("Leaderboard dolt: ", dolt)
    console.log("Leaderboard roof: ", roof)
    console.log("Leaderboard nose: ", nose)
    console.log("After Sort: ", buttress)
*/
    return (
      <div className="leaderboard">
          <ChallengeColumn title={title[0]} style={style[0]} data={buttress} className="buttress" />
          <ChallengeColumn title={title[1]} style={style[1]} data={dolt} className="dolt"/>
          <ChallengeColumn title={title[2]} style={style[2]} data={roof} className="roof" />
          <ChallengeColumn title={title[3]} style={style[3]} data={nose} className="summit" />
      </div>
    );
  }
}

export default Leaderboard;
