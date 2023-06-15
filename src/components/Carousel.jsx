// https://source.unsplash.com/random/30×30/?burger
// https://source.unsplash.com/random/30×30/?chowmein
// https://source.unsplash.com/random/30×30/?pasta

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <style>
        {`
          
          
          .search-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
          }
          
          .search-overlay .input-group {
            max-width: 300px;
          }
          
          .search-overlay .form-control {
            border-radius: 20px 0 0 20px;
          }
          
          .search-overlay .btn {
            background-color: grey; 
            color: black;
            border-radius: 0 20px 20px 0;
          }
          
          .carousel-item img {
            max-height: 500px;
            object-fit: cover;
          }
        `}
      </style>
      <div className="search-overlay">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-button" />
          <button className="btn btn-primary" type="button" id="search-button">Search</button>
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/random/30×30/?burger" className="d-block w-100 blur-image" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/30×30/?chowmein" className="d-block w-100 blur-image" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/30×30/?pasta" className="d-block w-100 blur-image" alt="Image 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
