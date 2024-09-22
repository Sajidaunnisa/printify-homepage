import React from "react";
import "./section1.css";
import image from "./images/best-selection.svg";
import image2 from "./images/higher-profits.svg";
import image3 from "./images/robust-scaling.svg";

const Features = () => {
  return (
    <div className="container-lg mt-5">
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div class="card feature-container">
            <img
              src={image2}
              class="card-img-top img-feature mb-4"
              alt="img"
            ></img>
            <div class="card-body">
              <h4 class="card-title mb-4">Higher Profits</h4>
              <p class="card-text description">
                We offer some of the lowest prices in the industry because print
                providers continuously compete to win your business.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card feature-container">
            <img
              src={image3}
              class="card-img-top img-feature mb-4"
              alt="img"
            ></img>
            <div class="card-body">
              <h4 class="card-title mb-4">Robust Scaling</h4>
              <p class="card-text description">
                Easily handle peak holiday seasons, with our wide network of
                partners and automatic routing functionality.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card feature-container">
            <img
              src={image}
              class="card-img-top img-feature mb-4"
              alt="img"
            ></img>
            <div class="card-body">
              <h4 class="card-title mb-4">Best Selection</h4>
              <p class="card-text description">
                With 900+ products and top quality brands, you can choose the
                best products for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
