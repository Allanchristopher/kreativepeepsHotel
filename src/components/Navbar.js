import React, { useState } from "react";
import logo from "../assets/YawayLogo.svg";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const [activenavbar, setactivenavbar] = useState(false);
  const changebackground = () => {
    // console.log(window.screenY);
    if (window.scrollY >= 20) {
      setactivenavbar(true);
    } else {
      setactivenavbar(false);
    }
  };

  window.addEventListener("scroll", changebackground);
  return (
    <>
      <header className={activenavbar ? "header active-navbar" : "header"} >
        <Link
          activeClass="nav-a-active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <img className="navlogo" src={logo} alt="Logo" />
        </Link>
        <nav className={`nav-elements  ${showNavbar && "responsive_nav"}`}>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={handleShowNavbar}
            >
              Home
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Ourfacilities"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleShowNavbar}
            >
            Our Facilities
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="About"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleShowNavbar}
            >
            About
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Rooms"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleShowNavbar}
            >
            Rooms
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Gallery"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleShowNavbar}
            >
            Gallery
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Testimonial"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
            Testimonials
            </Link>
          </a>
          <a>
            <Link
              activeClass="nav-a-active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              onClick={handleShowNavbar}
            >
            Contact Us
            </Link>
          </a>
          <button className="nav-res-close-btn" onClick={handleShowNavbar}>
            <FaTimes />
          </button>
        </nav>
        <a href="tel:+91 7010573022">
          <button className="call-button"> Book now</button>
        </a>

        <button className="nav-res-btn" onClick={handleShowNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
