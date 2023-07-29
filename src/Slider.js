import React from "react";
import "./components/Slider.css";
const Slider = () => {
  return (
    <div className="categories-body">
      <div className="slider slider-show">
        {/* <img src={require("./photo/sldr3.png")} alt="find" /> */}
        {/* Add more img for slider  */}
      </div>
      <div className="categories">
        <p className="header-name">BROWSER ALL CATEGORIES</p>
        <span>
          Do something meaninful each day, Keep Smiling and Keep Growing{" "}
        </span>
        <div className="types">
          <div className="cname cname1 ">
            <img src={require("./photo/vegitable.png")} alt="find" />
            <p className="name">vegitables</p>
            <p className="quantity">300 Items</p>
          </div>
          <div className="cname cname2 ">
            <img src={require("./photo/Meat-meal.png")} alt="find" />
            <p className="name">Meat Meal</p>
            <p className="quantity">900 Items</p>
          </div>
          <div className="cname cname3 ">
            <img src={require("./photo/fruit-jucies.png")} alt="find" />
            <p className="name">Fruit Jucies</p>
            <p className="quantity">150 Items</p>
          </div>
          <div className="cname cname4 ">
            <img src={require("./photo/milk-product.png")} alt="find" />
            <p className="name">Milk Products</p>
            <p className="quantity">20 Items</p>
          </div>
          <div className="cname cname5 ">
            <img src={require("./photo/fruits.png")} alt="find" />
            <p className="name">Fruits</p>
            <p className="quantity">120 Items</p>
          </div>
        </div>
      </div>
      <div className="poster">
        {/* <img src={require("./photo/sldr2.png")} alt="find" /> */}
      </div>
    </div>
  );
};

export default Slider;
