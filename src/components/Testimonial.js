import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rating from "../assets/rating.jpg";
import first from "../assets/first.svg";
import second from "../assets/second.svg";
function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
   
  };
  // responsive: [
  //   {
  //     breakpoint: 1000,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 700,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
  return (
    <div className="Testimonial">
      <div className="Testimonial-container">
        <div className="Testimonial-contain-text">
          <p className="Testimonial-heading">Testimonials</p>
          <p className="Testimonial-small-text">
            We offer modern (5-star) hotel facilities for your comfort.
          </p>
        </div>
        <Slider {...settings}>
          <div className="testimonial-box">
            <div className="testimonial-box-first">
              <p className="testimonial-date">2 Mar. 2023</p>
              <img src={rating} alt="rating" className="testimonial-rating" />
            </div>
            <div className="testimonial-box-second">
              <div className="testimonial-box-second-1">
                <img src={first} className="first" alt="img" />
              </div>
              <p className="testimonial-message">
                The service at the Hotel Monteleone was exceptional. There was
                absolutely no issue that was not addressed timely and with
                satisfactory results.
              </p>
              <div className="testimonial-box-second-2">
                <img src={second} className="second" alt="img" />
              </div>
            </div>
            <div className="testimonial-box-third">
              <p className="testimonial-name">Anthony Bruff</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testimonial-box-first">
              <p className="testimonial-date">2 Mar. 2023</p>
              <img src={rating} alt="rating" className="testimonial-rating" />
            </div>
            <div className="testimonial-box-second">
              <div className="testimonial-box-second-1">
                <img src={first} className="first" alt="img" />
              </div>
              <p className="testimonial-message">
                The service at the Hotel Monteleone was exceptional. There was
                absolutely no issue that was not addressed timely and with
                satisfactory results.
              </p>
              <div className="testimonial-box-second-2">
                <img src={second} className="second" alt="img" />
              </div>
            </div>
            <div className="testimonial-box-third">
              <p className="testimonial-name">Anthony Bruff</p>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testimonial-box-first">
              <p className="testimonial-date">2 Mar. 2023</p>
              <img src={rating} alt="rating" className="testimonial-rating" />
            </div>
            <div className="testimonial-box-second">
              <div className="testimonial-box-second-1">
                <img src={first} className="first" alt="img" />
              </div>
              <p className="testimonial-message">
                The service at the Hotel Monteleone was exceptional. There was
                absolutely no issue that was not addressed timely and with
                satisfactory results.
              </p>
              <div className="testimonial-box-second-2">
                <img src={second} className="second" alt="img" />
              </div>
            </div>
            <div className="testimonial-box-third">
              <p className="testimonial-name">Anthony Bruff</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
