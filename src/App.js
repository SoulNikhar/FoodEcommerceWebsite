import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FrontPage from "./FrontPage";
import Main from "./Main";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import { CartProvider } from "./CartContext.js";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
