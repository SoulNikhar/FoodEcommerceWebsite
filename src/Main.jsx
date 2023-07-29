import React from "react";
import "./components/Main.css";




import Header from './Header';
import SideFilter from "./SideFilter";
import Items from './Items';
//import Zrough from "./Zrough";
const Main = () => {
  return (
    <div className="main-body">
      <div className="header"><Header/></div>
     {/* <div className="sidefilter"><SideFilter/></div> */}
      <div className="items"><Items/></div>
      {/* <Zrough/> */}
    </div>
  );
};

export default Main;
