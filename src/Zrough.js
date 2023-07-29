import React from "react";
import "./components/Zrough.css";
import Header from "./Header.js";
import SlideShow from "./SlideShow";
import Footer from "./Footer";
import Slider from "./Slider";

const Zrough = () => {
  
  return (
    
     <div>
      <div className="">
      {/* <Header /> */}
      <SlideShow />
      
      </div>
     
      <div className="front-page">
      <Slider/>
      <div className="front-body">
        <div className="boxes">
          <div className="box box-1">Choose Your Meal</div>
          <div className="box box-2">FAQs</div>
          <div className="box box-3">Meal Plans</div>
        </div>
        <div className="top-products">
          <p>Our Top Products</p>
          <div className="top-products-box">
            <div className="box box-1">
              <img src={require("./photo/milk-product.png")} alt="Not Available Now"/>
              <p className="product-name">
                Milk Product 
              </p>
              <button>Shop Now</button>
            </div>
            <div className="box box-2">
              <img src={require("./photo/milk-product.png")} alt="Not Available Now"/>
              <p className="product-name">
                Milk Product 
              </p>
              <button>Shop Now</button>
            </div>
            <div className="box box-3">
              <img src={require("./photo/milk-product.png")} alt="Not Available Now"/>
              <p className="product-name">
                Milk Product 
              </p>
              <button>Shop Now</button>
            </div>
            <div className="box box-4">
              <img src={require("./photo/milk-product.png")} alt="Not Available Now"/>
              <p className="product-name">
                Milk Product 
              </p>
              <button>Shop Now</button>
            </div>
            <div className="box box-5">
              <img src={require("./photo/milk-product.png")} alt="Not Available Now"/>
              <p className="product-name">
                Milk Product 
              </p>
              <button>Shop Now</button>
            </div>
            <div className="box box-6">
              <img src={require("./photo/milk-product.png")} alt="Not Available Now"/>
              <p className="product-name">
                Milk Product 
              </p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
       <Footer/>
       </div>
       
      </div>
     
      <div>
      
      </div>
      
    </div>
     
  );
};

export default Zrough;