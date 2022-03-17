import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="background">
      <div className="overlay">
        <Navbar />
        <div className="container">
          <div className="container1">
            <form className="home-form">
              <li class="nav-item dropdown ">
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul
                  class="dropdown-menu dropdown-box"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      User Login
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Admin Login
                    </a>
                  </li>
                </ul>
              </li>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
