import React from "react";
import firstSlide from "./firstSlide.jpg";
import secondSlide from "./secondSlide.jpg";
import thirdSlide from "./thirdSlide.jpg";

const ContactUsSlides = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide mb-5 border"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img src={thirdSlide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={secondSlide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img src={firstSlide} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ContactUsSlides;
