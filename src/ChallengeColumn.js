import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';
import './ChallengeColumn.css';
import { getPitch } from "./Utils";

class ChallengeColumn extends Component {

  render() {
    const users = this.props.data;

    return (
        <Table className={this.props.style}>
            <thead>
              <tr>
                <th className="col-title" colSpan="2">{this.props.title}</th>
              </tr>
            </thead>
            <tbody>
            <div className="inner">
              {users.map((row, index) => (
                <tr key={row.username}>
                  <td>
                    {/*{index + 1}*/}
                    <div className="rowName">
                      <span className="username">{row.username}</span>
                    </div>
                  </td>
                  <td>
                    <div className="rowInfo">
                      Pitch: {getPitch(row.height)}
                    </div>
                    <div className="rowInfo2">
                      {row.height} ft
                    </div>
                  </td>
                </tr>
              ))}
            </div>
              
            </tbody>
          </Table>
      
    );
  }
}

export default ChallengeColumn;
