import React from "react";
import "./Rooms.css";
import kingroom from "../assets/kingroom.svg";
import kingroom1 from "../assets/kingroom1.svg";
import queenroom from "../assets/queenroom.svg";
function Rooms() {
  return (
    <div className="Rooms">
      <div className="Rooms-container">
        <div className="Rooms-container-1">
          <div className="Rooms-container-1-contain">
            <p className="Rooms-heading">Luxurious Rooms</p>
            <div className="Rooms-heading-underline"></div>
          </div>

          <p className="Rooms-small-text">
            All room are design for your comfort
          </p>
        </div>
        <div className="Rooms-container-2">
        <div className="Room-box">
        <img src={kingroom} alt="room-image" className="room-img"/>
        <button className="Room-btn">King Room</button>
        </div>
        <div className="Room-box">
        <img src={queenroom} alt="room-image" className="room-img"/>
        <button className="Room-btn">Oueen Room</button>
        </div>
        <div className="Room-box">
        <img src={kingroom1} alt="room-image" className="room-img"/>
        <button className="Room-btn">King Room</button>
        </div>
  
        </div>
      </div>
    </div>
  );
}

export default Rooms;
