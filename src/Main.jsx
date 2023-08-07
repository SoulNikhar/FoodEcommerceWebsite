import React from "react";
import "./components/Main.css";




import Header from './Header';
import SideFilter from "./SideFilter";
import Items from './Items';
const Main = () => {
  return (
    <div className="main-body">
      <div className="header"><Header/></div>
      <div className="items"><Items/></div>
    </div>
  );
};

export default Main;
