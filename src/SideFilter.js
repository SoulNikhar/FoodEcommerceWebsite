import React, { useEffect } from "react";
import "./components/SideFilter.css";

const SideFilter = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    // const sidebar = document.querySelector(".sidebar");
    const submenuItems = document.querySelectorAll(".submenu_item");
    const sidebarClose = document.querySelector(".collapse_sidebar");
    const sidebarExpand = document.querySelector(".expand_sidebar");

    // sidebarClose.addEventListener("click", () => {
    //   sidebar.classList.add("close", "hoverable");
    // });

    // sidebarExpand.addEventListener("click", () => {
    //   sidebar.classList.remove("close", "hoverable");
    // });

    // sidebar.addEventListener("mouseenter", () => {
    //   if (sidebar.classList.contains("hoverable")) {
    //     sidebar.classList.remove("close");
    //   }
    // });

    // sidebar.addEventListener("mouseleave", () => {
    //   if (sidebar.classList.contains("hoverable")) {
    //     sidebar.classList.add("close");
    //   }
    // });
    // if (item.classList.contains('show_submenu')) {
    //   item.classList.remove("show_submenu");
    // } else {
    //   item.classList.add("show_submenu");
    // }
    submenuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        // console.log(item.classList.contains('show_submenu'));
        item.classList.add("show_submenu");
        // console.log(item.classList.contains('show_submenu'));
        submenuItems.forEach((item2, index2) => {
          if (index !== index2) {
            console.log(index, index2);
            item2.classList.remove("show_submenu");
          }
        });
      });
    });

    // if (window.innerWidth < 768) {
    //   sidebar.classList.add("close");
    // } else {
    //   sidebar.classList.remove("close");
    // }

    //  this is for price ranger ---------------------

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
    <div>
      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>
            <li className="item">
              <div href="#" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <i className="fa fa-home-alt"></i>
                </span>
                <span className="navlink">Home</span>
                <i className="fa fa-chevron-right arrow-left"></i>
              </div>

              <ul className="menu_items submenu">
                <a href="#" className="nav_link sublink">
                  Nav Sub Link
                </a>
                <a href="#" className="nav_link sublink">
                  Nav Sub Link
                </a>
                <a href="#" className="nav_link sublink">
                  Nav Sub Link
                </a>
                <a href="#" className="nav_link sublink">
                  Nav Sub Link
                </a>
              </ul>
            </li>
            <li className="item">
              <a href="#" className="nav_link submenu_item">
                <span className="navlink_icon">
                  <i className="fa fa-filter"></i>
                </span>
                <span className="navlink">Filter</span>
                <i className="fa fa-chevron-right arrow-left"></i>
              </a>
              <ul className="menu_items submenu">
                <div className="calories-filter sub-filter">
                  <a className="nav_link sublink">Calories</a>
                  <div className="wrapper price-range-box">
                    <div className="price-input">
                      <div className="field">
                        <span>Min</span>
                        <input
                          type="number"
                          className="input-min"
                          defaultValue="2500"
                        />
                      </div>
                      <div className="separator">|</div>
                      <div className="field">
                        <span>Max</span>
                        <input
                          type="number"
                          className="input-max"
                          defaultValue="7500"
                        />
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
                </div>
                <div className="food-type-filter sub-filter">
                  <a className="nav_link sublink"> Food Type</a>
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>Veg</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Non Veg</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Jain</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Fruits</span>
                    </li>
                  </ul>
                </div>
                <div className="health-filter sub-filter">
                  <a className="nav_link sublink"> Health Condition</a>
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>Diabeties</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>PCOS</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>HBP</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>LBP</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Cholera</span>
                    </li>
                  </ul>
                </div>
                <div className="nutrition-filter sub-filter">
                  <a className="nav_link sublink">Nutrition</a>
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>High Protein</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Low Carbos</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>High Fiber</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>High Fat</span>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
          </ul>

          <ul className="menu_items">
            <div className="menu_title menu_setting"></div>
            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="fa fa-gift"></i>
                </span>
                <span className="navlink">Your Offers</span>
              </a>
            </li>

            <li className="item">
              <a href="#" className="nav_link">
                <span className="navlink_icon">
                  <i className="fa fa-cog"></i>
                </span>
                <span className="navlink">Setting</span>
              </a>
            </li>
          </ul>

          <div className="bottom_content">
            <div className="bottom expand_sidebar">
              <span>Expand</span>
              {/* <i className='fa fa-log-in'></i> */}
              <i className="fa fa-right-to-bracket"></i>
            </div>
            <div className="bottom collapse_sidebar">
              <span>Collapse</span>
              <i className="fa fa-right-to-bracket fa-rotate-180"></i>
              {/* <i className='fa fa-log-out'></i> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideFilter;
