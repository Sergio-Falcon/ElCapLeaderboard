import React, { Component } from 'react';
//import logo from './logo.svg';
import './Leaderboard.css';
//import axios from 'axios';
//import Table from 'react-bootstrap/lib/Table';
import ChallengeColumn from './ChallengeColumn';
import { makeData, splitData } from "./Utils";

class Leaderboard extends Component {

  state = {
    users: makeData()
  }
/*
  getData(url, stateName) {
    axios.get(url)
      .then(({ data} ) => {
        this.setState({ [stateName]: data });
        console.log(this.state.users);
      })
  }

  componentDidMount() {
    this.getData('https://my-json-server.typicode.com/Sergio-Falcon/fakeData/users', 'users');
  }
  */

  render() {
    const {users} = this.state;
    const buttress = splitData(users, 1);
    const dolt = splitData(users, 2);
    const roof = splitData(users, 3);
    const nose = splitData(users, 4);

    const title = ["S.E. BUTTRESS+", "DOLT TOWER+", "GREAT ROOF+", "THE NOSE"]
    const style = ["buttress", "dolt", "roof", "nose"]

/*    console.log("Leaderboard buttress: ", buttress)
    console.log("Leaderboard dolt: ", dolt)
    console.log("Leaderboard roof: ", roof)
    console.log("Leaderboard nose: ", nose)*/

    /*buttress.sort(function(a,b) {
      return a.height-b.height;
    })*/

    //console.log("After Sort: ", buttress)

    return (
      <div className="leaderboard">
          <ChallengeColumn title={title[0]} style={style[0]} data={buttress} />
          <ChallengeColumn title={title[1]} style={style[1]} data={dolt} />
          <ChallengeColumn title={title[2]} style={style[2]} data={roof} />
          <ChallengeColumn title={title[3]} style={style[3]} data={nose} />
      </div>
    );
  }
}

export default Leaderboard;
