import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h2 className="primary-heading">
          Grow Your Favorite Plants with Ease
          </h2>
          <p className="primary-text">
          Our garden supplies shop provides everything you need, from high-quality seeds and soil to tools and fertilizers, so you can create and maintain a lush, vibrant garden.
          </p>
          <button className="secondary-button" style={{marginTop: '5px'}}>
            View More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
