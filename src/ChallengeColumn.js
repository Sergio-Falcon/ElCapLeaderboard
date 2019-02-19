import React, { Component } from 'react';
import './ChallengeColumn.css';
import { getPitch, getHeight } from "./Utils";

class ChallengeColumn extends Component {

  constructor(props) {
    super(props);

      this.state = {
        topUserIndex: 0
      }
    }

  componentDidMount() {

    function convertRemToPixels(rem) {    
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    setInterval(() => {
      const {height} = this.refs.column.getBoundingClientRect();
      const userHeight = convertRemToPixels(2.75);
      const usersPerColumn = Math.floor(height / userHeight);
      const stopAt = this.props.data.length - usersPerColumn;
      let newPosition = this.state.topUserIndex + 1;

      if (newPosition > stopAt) {
        newPosition = 0;
      }
      this.setState({topUserIndex: newPosition})
    }, 2000);

    
  }

  render() {
    const users = this.props.data;
    const userMargin = (this.state.topUserIndex * -2.75) - .5;
    
    return (
      <div id="container" className="container">
        <div id="top" className="column-header">
          <strong className="column-title" >{this.props.title}</strong>
        </div>
        <div id="column" className="column" ref="column">
          <div className="slider" style={{ marginTop: userMargin + 'rem' }} ref="slider">
            {users.map((row, index) => (
              <div className="user" key={row.username}>
                <div className="name">
                  {row.username}
                </div>
                <div id="bottom" className="progress">
                  {getPitch(getHeight(row.height))} / {getHeight(row.height)} ft
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeColumn;
