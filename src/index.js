import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from './StateProvider';
import reducer, { initialState } from "./reducer";
//import Main from "./Main";
//import Footer from "./Footer";
 //import Zrough from './Zrough'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    

  </React.StrictMode>
);
