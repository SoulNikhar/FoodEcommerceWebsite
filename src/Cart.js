import React from "react";
import "./components/Cart.css";
//import { useCartContext } from "./CartContext";
//import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();

  const increaseQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: itemId });
  };

  const decreaseQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: itemId });
  };

  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const calculateTotal = () => {
    let total = 0;
    basket.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const getTotalItems = () => {
    const totalItems = basket.reduce((total, item) => total + item.quantity, 0);
    return totalItems === 1 ? `${totalItems} item` : `${totalItems} items`;
  };

  const getTotalPrice = () => {
    const totalPrice = calculateTotal();
    const deliveryCharge = 79;
    const gstRate = 0.18;
    const discount = totalPrice * 0.3;
    const totalWithGST = totalPrice + totalPrice * gstRate;
    const totalToPay = totalWithGST - discount + deliveryCharge;
    return {
      totalPrice: totalPrice.toFixed(2),
      deliveryCharge,
      gstAmount: (totalPrice * gstRate).toFixed(2),
      discount: discount.toFixed(2),
      totalToPay: totalToPay.toFixed(2),
    };
  };

  const { totalPrice, deliveryCharge, gstAmount, discount, totalToPay } = getTotalPrice();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">YOUR CART</h2>
        <div className="cart-counting-box">
          <span className="cart-count">{getTotalItems()}</span>
        </div>
      </div>

      <div className="cart-billing">
        <div className="itemsList">
          {basket.length === 0 ? (
            <div className="empty-cart-message">Your cart is empty.</div>
          ) : (
            basket.map((item) => (
              <div className="cart-items" key={item.id}>
                <div className="item-photo">
                  <img src={require(`./photo/${item.image}`)} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="detail">
                    <i
                      className="fa fa-times-circle"
                      onClick={() => removeItem(item.id)}
                    ></i>
                    <h4>
                      {item.name}
                      <i className="fa fa-circle"></i>
                    </h4>
                    <p>Ref no : {item.RefNo}</p>
                    {item.isVeg ? (
                      <p>
                        <i className="fa fa-check"></i>
                        <span>Veg</span>
                      </p>
                    ) : (
                      <p>
                        <i className="fa fa-times"></i>
                        <span>Non-Veg</span>
                      </p>
                    )}
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
              {/* <button className="coupon-btn" onClick={handleCartlyCoupon}>
                Apply Coupon
              </button> */}
            </div>
            <div className="billing-row">
              <span>Total Items:</span>
              <span>{getTotalItems()}</span>
            </div>

            <div className="billing-row delivery-charge">
              <span>Delivery Charge (Rs):</span>
              <span>{deliveryCharge}</span>
            </div>
            <div className="billing-row gst">
              <span>GST (18%):</span>
              <span>{gstAmount}</span>
            </div>
            <div className="billing-row sub-total">
              <span>SubTotal Price (Rs):</span>
              <span>{totalPrice}</span>
            </div>
            <div className="billing-row discount">
              <span>Discount (Coupon Applied):</span>
              <span>{discount}</span>
            </div>
            <div className="to-pay-section">
              <div className="section-title">To Pay</div>
              <div className="to-pay-amount">
                Rs {totalToPay}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kitchen-instruction">
        <div className="section-title">Add Kitchen Instruction</div>
        {/* <textarea
          className="instruction-textarea"
          placeholder="Enter your instruction"
          onChange={handleKitchenInstructionChange}
        ></textarea> */}
      </div>
      <div className="checkout-btn">
        {/* <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button> */}
      </div>
    </div>
  );
};

export default Cart;