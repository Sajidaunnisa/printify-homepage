import React from "react";
import "./section2.css";
import image from "./images/printify-image2.jpg";

const Overview = () => {
  return (
    <div className="container-mb overview mt-5 pt-5">
      <div class="card  overview-container mt-5 ms-5 p-5">
        <div class="row g-0">
          <div class="col-md-5 ">
            <img src={image} class="img-fluid" alt="..."></img>
          </div>
          <div class="col-md-7">
            <div class="card-body bg-light m-5 p-5">
              <h2 class="card-title">
                Easily add your design to a wide range of products
              </h2>
              <p class="card-text">
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>
              <p class="card-text">
                <a href="#" className="products">
                  All products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right-short ms-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
