import React, { useState } from "react";
import "./Gallery.css";
import image1 from "../assets/image-1.svg";
import image2 from "../assets/image-2.svg";
import image3 from "../assets/image-3.svg";
import image4 from "../assets/image-4.svg";
import image5 from "../assets/image-5.svg";
import image6 from "../assets/image-6.svg";

function Gallery() {
  const [selectedRoom, setSelectedRoom] = useState("king");

  const roomImages = {
    king: [image1, image2, image3, image4, image5, image6],
    queen: [image1, image2, image3, image4, image5],
    quad: [image3, image4, image5, image6],
  };

  const handleButtonClick = (roomType) => {
    setSelectedRoom(roomType);
  };

  return (
    <div className="Gallery">
      <div className="Gallery-container">
        <div className="gallery-contain-text">
          <p className="gallery-heading">Gallery</p>
          <p className="gallery-small-text">
            We offer modern (5-star) hotel facilities for your comfort.
          </p>
        </div>
        <div className="gallery-contain-button">
          <button
            onClick={() => handleButtonClick("king")}
            className={selectedRoom === "king" ? "gallery-Button active-btn-gallery" : "gallery-Button"}
          >
            King Room
          </button>
          <button
            onClick={() => handleButtonClick("queen")}
            className={selectedRoom === "queen" ? "gallery-Button active-btn-gallery" : "gallery-Button"}
          >
            Queen Room
          </button>
          <button
            onClick={() => handleButtonClick("quad")}
            className={selectedRoom === "quad" ? "gallery-Button active-btn-gallery" : "gallery-Button"}
          >
            Quad Room
          </button>
        </div>
        <div className="image-container">
          {roomImages[selectedRoom].map((image, index) => (
            <div key={index} className="image-box">
              <img src={image} className="gallery-img" alt={`img-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
