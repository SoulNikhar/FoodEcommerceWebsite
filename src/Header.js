import React from "react";
import "./components/Header.css";
import { Link } from "react-router-dom";
import Login from "./Login";


class Header extends React.Component{
  state = {
     modalOpen: false
  }

  handleModalOpen = () => {
     this.setState((prevState) => {
        return{
           modalOpen: !prevState.modalOpen
        }
     })
  }

render() {
  return (
    <div className="header">
      <div className="main-headeru">
        <div className="logo-name">
          <div className="logo-img">
            <img src="url/...." alt="Logo"></img>
          </div>
        </div>
        <nav className="menu-option">
          <ul className="home">
            <li>
              <Link to = '/'>Home</Link>
            </li>
          </ul>
          <ul className="bestSeller">
          <li>
              <Link to = '/main'>Our Product</Link>
            </li>
          </ul>
          <div className="service">
            <button>Service</button>
          </div>
          {/* <li className="nav-item ml-5">
                        <a onClick={this.handleModalOpen} className="nav-link">
                            Log In
                        </a>
                    </li> */}
          <ul className="cart">
          <li>
              <Link to = '/cart'>Cart</Link>
            </li>
          </ul>
          <ul className="register">
          <li>
              <a onClick={this.handleModalOpen}>Register Now</a>
            </li>
          </ul>
          <Login
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
        
          
        </nav>
      </div>
      <div className="main-headerl">
        <div className="web-name">
          <i class="fas fa-bars"> </i>
          <em>Location </em>
          <i class="down fa fa-light fa-location-dot"></i>
        </div>
        <div className="search-phone">
          <div className="search">
            <div className="input">
              <input type="text" placeholder="Search..."></input>
            </div>
            <div className="span">
              <span class="fa-solid fa-magnifying-glass">
                <em>Search</em>
              </span>
            </div>
          </div>
          <div className="phone">
            <div>
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="phone-txt">
              Get a Call <br></br>
              <span>+91 8851434861</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
}
export default Header;
