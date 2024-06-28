import React from "react";
import ChooseMeals from "../Assets/pick-meals-image.png";
import PickMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Seeds",
      text: "Explore a wide selection of seeds  perfect for starting your garden from scratch.",
    },
    {
      image: ChooseMeals,
      title: "Plants",
      text: "Choose from a diverse range of healthy plants to add instant beauty to your garden.",
    },
    {
      image: DeliveryMeals,
      title: "Fertilizer",
      text: "Enhance growth and vitality with our nutrient-rich fertilizers and promote robust blooms and harvests.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Buy</p>
        <h1 className="primary-heading">What can you get?</h1>
        <p className="primary-text" style={{ marginBottom: '10px' }}>
        Explore a variety of high-quality seeds, nutrient-rich soils, 
        durable gardening tools, and exquisite planters at our shop.
        Let us help you bring your gardening dreams to life!
        </p>
      </div>
      <div className="work-section-bottom" style={{ marginTop: '20px' }}>
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} style={{ marginBottom: '20px' }}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
