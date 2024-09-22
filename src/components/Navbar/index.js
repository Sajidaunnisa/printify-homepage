import React from "react";
import "./Navbar.css";
import image from "./image/printify-logo.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm fixed-top top-navbar">
        <div className="container-fluid">
          <a className="navbar-brand p-3 " href="#">
            <img src={image} alt="logo" width={130} height={37}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Catalog
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  How it works
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      How Printify Works
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Print On Demand
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Printify Quality Promise
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      What to Sell?
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Printify Studio
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Printify Express Delivery
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Transfer Products
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Order In Bulk
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Experts Program
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Use-cases
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Merch for Fans
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Merch for eCommerce
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Merch for Enterprises Need help? Help Center Contacts My
                      Requests
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Grow your Store
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Need help?
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contacts
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      My Requests
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Grow your Store
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="ms-2">
              <button type="button" class="btn  login-btn ms-5 ps-3 pe-3">
                Log in
              </button>
              <button type="button" class="btn  signup-btn ms-4 ps-3 pe-3">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
