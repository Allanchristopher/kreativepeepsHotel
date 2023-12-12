import React, { useState, useEffect } from "react";
import "./Home.css";
import Homeimg from "../assets/Homeimg.svg";
function Home() {
  return (
    <div className="Home">

      <div className="Home-container">

      <div className="background-ball-2"></div>
        <div className="home-container-1">
          <p className="home-gradient-text">Yaway Luxury Guesthouse</p>
          <p className="home-big-text">
            Hotel for Every Moment Rich in Emotion
          </p>
          <p className="home-small-text">Every moment feels like the first time
          in paradise view</p>
          <button className="home-button"> Book now</button>
        </div>
        <div className="home-container-2">
        <div className="background-ball-1"></div>
        <img src={Homeimg} alt="image" className="home-img"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
