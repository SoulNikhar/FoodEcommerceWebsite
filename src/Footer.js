import React from "react";
import "./components/Footer.css";
const Footer = () => {
  const imgUrl = "https://i.ibb.co/QDy827D/ak-logo.png";
  return (
    <div>
      <div className="footer-section">
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
            <div class="footer-content pt-5 pb-5">
              <div class="row lower">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img src={imgUrl} class="img-fluid" alt="find" />{" "}
                    </a>
                  </div>
                  <div class="footer-text"></div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>

                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>

                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="container">
              <div class="row">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <a href="https://codepen.io/anupkumar92/">Anup</a>
                  </p>
                </div>
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
