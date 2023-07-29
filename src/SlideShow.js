import React, { useState, useEffect } from "react";
import "./components/SlideShow.css";
const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";

    setSlideIndex(n);
  };

  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        {/* <div className="numbertext">1 / 3</div> */}
        <img src={require("./photo/sldr2.png")} alt="Slide 1" />
        {/* <div className="text">Caption Text</div> */}
      </div>
      <div className="mySlides fade">
        {/* <div className="numbertext">2 / 3</div> */}
        <img src={require("./photo/sldr3.png")} alt="Slide 2" />
        {/* <div className="text">Caption Two</div> */}
      </div>
      <div className="mySlides fade">
        {/* <div className="numbertext">3 / 3</div> */}
        <img src={require("./photo/sldr4.png")} alt="Slide 3" />
        {/* <div className="text">Caption Three</div> */}
      </div>
      <div className="mySlides fade">
        {/* <div className="numbertext">3 / 3</div> */}
        <img src={require("./photo/sldr5.png")} alt="Slide 3" />
        {/* <div className="text">Caption Three</div> */}
      </div>
      <div className="mySlides fade">
        {/* <div className="numbertext">3 / 3</div> */}
        <img src={require("./photo/sldr.jpg")} alt="Slide 3" />
        {/* <div className="text">Caption Three</div> */}
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div className="dots" style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
      </div>
    </div>
  );
};

export default SlideShow;
