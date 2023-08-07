import React, { useState } from "react";
import "./components/Cart.css";
import { useCartContext } from "./CartContext";
const Cart = () => {
  const { cartItems } = useCartContext();
  const [cartData, setCartData] = useState(cartItems);

  // This is for increment purpose for the product quantity
  const increaseQuantity = (itemId) => {
    {console.log(itemId)}
    setCartData((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //  This is for decrement purpose the product quantity
  const decreaseQuantity = (itemId) => {
    setCartData((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  //  This is removing purpose
  const removeItem = (itemId) => {
    console.log(itemId);
    setCartData((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, value) => {
    setCartData((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + value } : item
      )
    );
  };

  const handleCartlyCoupon = () => {
    // Cartly coupon logic
  };

  const handleKitchenInstructionChange = (e) => {
    // Handle kitchen instruction change
  };

  const handleCheckout = () => {
    // Handle checkout logic
  };

  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const getTotalItems = () => {
    const totalItems = cartData.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return totalItems === 1 ? `${totalItems} item` : `${totalItems} items`;
  };

  const getTotalPrice = () => {
    const totalPrice = cartData.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return totalPrice.toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">YOUR CART</h2>
        <div className="cart-counting-box">
          <span className="cart-count">{cartData.length}</span>
        </div>
      </div>

      <div className="restaurant-section">
        <img
          className="restaurant-image"
          src="restaurant-image.jpg"
          alt="Restaurant"
        />
        <div className="restaurant-details">
          <h3 className="restaurant-name">Restaurant Name</h3>
          <p className="restaurant-address">Restaurant Address</p>
          <p className="restaurant-info">Restaurant Details</p>
        </div>
      </div>

      <div className="cart-billing">
        <div className="itemsList">
          {cartData.length === 0 ? (
            <div className="empty-cart-message">Your cart is empty.</div>
          ) : (
            cartData.map((item) => (
              <div className="cart-items" key={item.id}>
                <div className="item-photo">
                  <img src={require("./photo/Meat-meal.png")} alt="find" />
                </div>
                <div className="item-details">
                  <div className="detail">
                    <i
                      className="fa fa-xmark-circle"
                      onClick={() => removeItem(item.id)}
                    ></i>
                    <h4>
                      {item.name}
                      <i className="fa fa-circle"></i>
                    </h4>
                    <p>Ref no : {item.RefNo}</p>
                    <p>
                      <i className="fa fa-check"></i>
                      <span>Click and Collect</span>
                    </p>
                    <p>
                      <i className="fa fa-check"></i>
                      <span>Home Delivery</span>
                    </p>
                  </div>
                  <div className="quantity-price">
                    <p className="item-quantity">
                      <em>Qty:</em>
                      <button
                        className="quantity-btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </p>
                    <p>
                      Price: <span>{item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="billing-info">
          <div className="section-title">PAYMENT DETAILS</div>
          <div className="total-detail">
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter Your Coupon Here"
                className="coupon-input"
              />
              <button className="coupon-btn" onClick={handleCartlyCoupon}>
                Apply Coupon
              </button>
            </div>
            <div className="billing-row">
              <span>Total Items:</span>
              <span>{getTotalItems()}</span>
            </div>

            <div className="billing-row delivery-charge">
              <span>Delivery Charge (Rs):</span>
              <span>79</span>
            </div>
            <div className="billing-row gst">
              <span>GST (18%):</span>
              <span>{(calculateTotal() * 0.18).toFixed(2)}</span>
            </div>
            <div className="billing-row sub-total">
              <span>SubTotal Price (Rs):</span>
              <span>{getTotalPrice()}</span>
            </div>
            <div className="billing-row discount">
              <span>Discount (Coupon Applied):</span>
              <span>{(calculateTotal() * 0.3).toFixed(2)}</span>
            </div>
            <div className="to-pay-section">
              <div className="section-title">To Pay</div>
              <div className="to-pay-amount">
                Rs {getTotalPrice() - (calculateTotal() * 0.3).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kitchen-instruction">
        <div className="section-title">Add Kitchen Instruction</div>
        <textarea
          className="instruction-textarea"
          placeholder="Enter your instruction"
          onChange={handleKitchenInstructionChange}
        ></textarea>
      </div>
      <div className="checkout-btn">
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
