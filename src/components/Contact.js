import React, { useState,useRef } from "react";
import "./Contact.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../assets/locationmarker.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import emailjs from "@emailjs/browser";
import { message } from "antd";
function MapComponent() {
  const locations = [
    { position: [8.72479, 77.74452], name: "Thirunelveli" },
  ];
  const bounds = L.latLngBounds(locations.map((location) => location.position));
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  return (
    <MapContainer bounds={bounds} className="leaf-let-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={customIcon}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function Contact() {
  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xxrcgdm",
        "template_i6mrqnk",
        form.current,
        "MxDFTViY7UvoGCmS3"
      )
      .then(
        (result) => {
          console.log(result.text);
          messageApi.open({
            type: "success",
            content: "Message send",
            style: {
              marginTop: "20vh",
            },
          });
        },
        (error) => {
          console.log(error.text);
          messageApi.open({
            type: "error",
            content: "Message not send please sent again",
            style: {
              marginTop: "20vh",
            },
          });
        }
      );
  };
 
  return (
    <div className="Contact">
    <div className="Contact-contain-text">
    <p className="Contact-heading">Contact Us</p>
    <p className="contact-small-text">We offer modern (5 star) hotel facilities for your comfort.</p>
    </div>
      <div className="Contact-res computer-view">
        <div className="Contact-container-1">

          <form className="Contact-inputs"
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          >
            <input
              className="text-input"
              placeholder="Name"
              type="text"
              required="required"
              name="from_name"
            ></input>
            <input
              className="text-input"
              placeholder="Email"
              type="email"
              required="required"
              name="email_id"
            ></input>
            <textarea
              className="input-textarea"
              placeholder="Enter the Message"
              required="required"
              name="message"
            ></textarea>
            <button className="Send-btn" >SEND</button>
          </form>
          <div className="call-get">
            <a href="tel:+91 7010573022">
              <button className="call-get-btn">Call Now!</button>
            </a>
            <a>
              <button className="call-get-btn" >
                Get directions
              </button>
            </a>
          </div>
        </div>
        <div className="Contact-container-2">
          <div className="map">
            <MapComponent className="leaf-let-map" data-aos="fade-up"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
