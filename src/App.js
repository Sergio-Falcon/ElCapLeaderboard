import React, { Component } from 'react';
import logo from './climbalytics.svg';
import './App.css';
import Leaderboard from './Leaderboard'

class App extends Component {

  componentDidMount() {
      // Set the date we're counting down to
      const countDownDate = new Date("Mar 1, 2019 00:00:00").getTime();
      const endEvent = new Date("Apr 1, 2019 00:00:00").getTime();

      // Update the count down every 1 second
      setInterval(() => {
        // Get todays date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = hours.toString().length === 1 ? ("0" + hours) : hours;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        minutes = minutes.toString().length === 1 ? ("0" + minutes) : minutes;
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        seconds = seconds.toString().length === 1 ? ("0" + seconds) : seconds;
        
        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = /*"Event Begins in..." + */days + " days " + hours + ":" + minutes + ":" + seconds;

        // If the count down is finished, write some text 
        if (distance < 0) {
          let timeLeft = endEvent - now;

          days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          hours = hours.toString().length === 1 ? ("0" + hours) : hours;
          minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          minutes = minutes.toString().length === 1 ? ("0" + minutes) : minutes;
          seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
          seconds = seconds.toString().length === 1 ? ("0" + seconds) : seconds;

          document.getElementById("countdown").innerHTML = days + " days " + hours + ":" + minutes + ":" + seconds +" left";
        }
      }, 1000);
  }

  render() {
    return (
      <div className='App'> 
        <div className="header">
          <div className="title">
            <strong className="challenge-title">THE EL CAP CHALLENGE</strong>
            <img src={logo} className="logo" alt="logo"/>
            <span className="title-presented">PRESENTED BY CLIMBALYTICS</span>
          </div>
          
          <div className="countdown-box">
            <p id="countdown"></p>
          </div>
        </div>
        <Leaderboard />
      </div>
    );
  }
}

export default App;
