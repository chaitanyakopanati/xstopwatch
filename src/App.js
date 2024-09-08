import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
    } 
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevState => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(1, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="App">
     <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="time">Time: {formatTime()}</div>
      <div className="buttons">
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  );
};

export default App;
