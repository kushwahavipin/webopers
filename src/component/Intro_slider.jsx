import React from "react";

function Intro_slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/purchasing-shop-buying-selling-teade_53876-134043.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/women-taking-selfie-shop_23-2147786850.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/crop-hand-with-paper-bags-credit-card_23-2147786759.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Intro_slider;
