import React, { useEffect } from "react";
import "./components/PriceRanger.css";

const PriceRanger = () => {
  useEffect(() => {
    const handlePriceInputChange = (e) => {
      const minPrice = parseInt(priceInput[0].value);
      const maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    };

    const handleRangeInputChange = (e) => {
      const minVal = parseInt(rangeInput[0].value);
      const maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    };

    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInput = document.querySelectorAll(".price-input input");
    const range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", handlePriceInputChange);
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", handleRangeInputChange);
    });
  }, []);

  return (
    <div className="wrapper price-range-box">
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input type="number" className="input-min" defaultValue="2500" />
        </div>
        <div className="separator">|</div>
        <div className="field">
          <span>Max</span>
          <input type="number" className="input-max" defaultValue="7500" />
        </div>
      </div>
      <div className="slider">
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="10000"
          defaultValue="2500"
          step="100"
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="10000"
          defaultValue="7500"
          step="100"
        />
      </div>
    </div>
  );
};

export default PriceRanger;
