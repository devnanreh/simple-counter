import React from "react";
import CountDown from "./CountDown.jsx";
import SimleCounter from "./SecondsCounter.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="container vh-90">
      <SimleCounter />
      <CountDown />
    </div>
  );
};

export default Home;
