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
              {/* content should be here */}
              <h1 className="text-white my-5">This is our input</h1>
              <button className="btn my-btn mx-auto text-white">check</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
