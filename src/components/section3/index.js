import React from "react";
import image1 from "./images/custom-products.webp";
import image2 from "./images/your-products.webp";
import image3 from "./images/fullfillment.webp";
import "./section3.css";

const Work = () => {
  return (
    <div className="container-mb p-5 services-container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card work-container">
            <img src={image1} class="card-img-top work-img" alt="..."></img>
            <div class="card-body">
              <p className="card-heading mt-2 mb-0">CREATE</p>
              <h3 class="title">custom products</h3>
              <p class="text">
                Easily add your designs to a wide range of products using our
                free tools
              </p>
            </div>
          </div>{" "}
        </div>
        <div class="col">
          <div class="card work-container">
            <img src={image2} class="card-img-top work-img" alt="..."></img>
            <div class="card-body">
              <p className="card-heading mt-2 mb-0">SELL</p>
              <h3 class="title">on your terms</h3>
              <p class="text">
                you choose the products, sale price, and where to sell
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card work-container">
            <img src={image3} class="card-img-top work-img" alt="..."></img>
            <div class="card-body">
              <p className="card-heading mt-2 mb-0">WE HANDLE</p>
              <h3 class="title">fulfillment</h3>
              <p class="text">
                Once an order is placed, we automatically handle all the
                printing and delivery logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
