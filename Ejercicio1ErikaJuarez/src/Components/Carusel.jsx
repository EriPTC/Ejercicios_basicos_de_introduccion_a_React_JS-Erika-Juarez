import React from "react";

const Carousel = ({ img1, img2, img3 }) => {
  return (
    <div id="carouselExample" className="carousel slide">

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="img1" />
        </div>

        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="img2" />
        </div>

        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="img3" />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
};

export default Carousel;