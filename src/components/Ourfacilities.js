import React from "react";
import "./Ourfacilities.css";
import swimming from "../assets/swimming.svg";
import wifi from "../assets/wifi.svg";
import breakfast from "../assets/breakfast.svg";
import gym from "../assets/gym.svg";
function Ourfacilities() {
  return (
    <div className="Ourfacilities">
    <div className="Ourfacilities-container">
    <div className="Ourfacilities-background-ball-1"></div>
    <div className="Ourfacilities-background-ball-2"></div>
      <div className="Ourfacilities-container">
        <div className="Ourfacilities-container-1">
          <p className="Ourfacilities-heading">Our Facilities</p>
          <p className="Ourfacilities-small-text">
            We offer modern (5 star) hotel facilities for your comfort.
          </p>
        </div>
        <div className="Ourfacilities-container-2">
        <div className="Ourfacilities-box">
        <img src={swimming} alt="swimming-icon" className="swimming"/>
        <p className="Ourfacilities-box-text">
        Swimming Pool
        </p>
        </div>
        <div className="Ourfacilities-box">
        <img src={wifi} alt="swimming-icon" className="wifi"/>
        <p className="Ourfacilities-box-text">
        Wifi
        </p>
        </div>
        <div className="Ourfacilities-box">
        <img src={breakfast} alt="swimming-icon" className="breakfast"/>
        <p className="Ourfacilities-box-text">
        Breakfast
        </p>
        </div>
        <div className="Ourfacilities-box">
        <img src={gym} alt="swimming-icon" className="gym"/>
        <p className="Ourfacilities-box-text">
        Gym
        </p>
        </div>
        </div>
      </div>
    </div>
   
    </div>
  );
}

export default Ourfacilities;
