import React, { useState, useEffect } from "react";

function SimpleCounter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerOn) {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
          if (minutes === 59) {
            setMinutes(0);
            setSeconds(0);
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="container bg-info bg-gradient text-center text-white  border border-primary border-2 rounded-4 mb-2 w-25">
      <div>
        <h1>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={() => setTimerOn(false)}
        >
          Stop
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={() => setTimerOn(true)}
        >
          Resume
        </button>
        <button type="button" className="btn btn-primary m-1" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={() => setTimerOn(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default SimpleCounter;
