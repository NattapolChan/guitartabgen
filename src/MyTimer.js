import { useTimer } from 'react-timer-hook';
import ReactDOM from 'react-dom';
import React from 'react';
import "./MyTimer.css";

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp });
  
    return (
      <div className = "timer">
        <div style={{fontSize: '50px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? 'Running' : 'Not running'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
      </div>
    );
  }

  export default MyTimer;