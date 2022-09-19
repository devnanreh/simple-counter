import React, { useState, useEffect } from "react";

export const CountDown = () => {
  const [countOn, setCountOn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let intervalo = setInterval(() => {
      if (countOn === true) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalo);
            setCountOn(false);
            alert("TIEMPO...!!!");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalo);
  });

  const initCounter = () => {
    setCountOn(true);
  };

  return (
    <>
      <div className="container bg-info bg-gradient text-white text-center border border-primary border-2 rounded-4 w-25">
        <h1>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h1>
        <button
          type="button"
          className="btn btn-primary mb-1"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Set Timedown
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ width: "350px" }}>
            <div className="modal-content">
              <div className="modal-body d-flex justify-content-around">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    min="0"
                    max="60"
                    style={{ width: "150px" }}
                    onChange={(e) => setMinutes(e.target.value)}
                    value={minutes}
                  />
                  <label htmlFor="floatingInput">Minutes</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingSeconds"
                    placeholder="name@example.com"
                    min="0"
                    max="60"
                    style={{ width: "150px" }}
                    onChange={(e) => setSeconds(e.target.value)}
                    value={seconds}
                  />
                  <label htmlFor="floatingSeconds">Seconds</label>
                </div>
                {/* ACA va el tema del tiempo */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={initCounter}
                >
                  Set Time
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountDown;
