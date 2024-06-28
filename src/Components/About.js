import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p className="primary-subheading">About</p>
        <h3 className="primary-heading">
        Discover the Joy of Gardening
        </h3>
        <p className="primary-text">
        At our gardening supplies shop, we're passionate 
        about helping you cultivate your perfect garden. 
        </p>
        <p className="primary-text">
        From colorful blooms to fresh vegetables, we provide 
        everything you need to nurture your green oasis. 
        Join us in celebrating the joy of gardening and watch your garden thrive!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
