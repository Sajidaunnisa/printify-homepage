import React from "react";
import "./home.css";
import image from "./images/img_5.png";

const Home = () => {
  return (
    <div className="container-lg p-5 mt-5 ms-0">
      <div class="row">
        <div class="col-md-6">
          <p class="">
            <span className="heading">Create and sell custom products</span>
          </p>
          <p>
            <div>
              <div className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-check2 icon me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                100% Free to use
              </div>
              <div className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-check2 icon me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                900+ High-Quality Products
              </div>
              <div className="list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-check2 icon me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                </svg>
                Largest global print network
              </div>
            </div>
          </p>
          <p>
            <div className="mt-5">
              <button className="btn-1 pt-2 pb-2 ps-4 pe-4">
                Start for Free
              </button>
              <button className="btn-2 pt-2 pb-2 ps-3 pe-4 ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-play-circle me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                </svg>
                How it works?
              </button>
              <p className="tag-line mt-3">
                Trusted by over 8M sellers around the world
              </p>
            </div>
          </p>
        </div>
        <div class="col-md-6 ps-5">
          <img
            src={image}
            className="img-fluid shirt-image col-9 ms-5 mt-4 shadow-sm ps-3 pe-3 pt-5 pb-5"
            alt="image"
          ></img>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn desgin-now-btn m-3 col-4">
              Design now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
