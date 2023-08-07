// import React from "react";
// import "./components/Items.css";
// import JsonItem from './food.json';
// const Items = () => {
//   console.log(JsonItem);
//   return (
//     <div className="product-body">
//       <div className="productList">        
//         {JsonItem.map((item)=>(
//           <div className="product item-1">
//           <img src={require("./photo/vegitable.png")} alt="find" />
//           <div className="product-options">
//             <div className="favawesome"><i class="fa fa-heart"></i></div>
//             <div className="favawesome"><i class="fa fa-link"></i></div>
//             <div className="favawesome"><i class="fa fa-eye"></i></div>
//           </div>
//           <div className="product-details">
//             <p>{item.name}</p>
//             <p>
//               <span>${item.price * 1.5}</span>
//               <span>${item.price}</span>
//             </p>
//             <p>
//               <span>
//                 <i class="fa fa-star"></i>
//                 <i class="fa fa-star"></i>
//                 <i class="fa fa-star"></i>
//                 <i class="fa fa-star"></i>
//                 <i class="fa fa-star-half"></i>
//               </span>
//               <span>(5.2k Reviews)</span>
//             </p>
//             <p>
//               Food Type : <span>{item.food_type}</span>
//             </p>
//             <button>Shop Now</button>
//           </div>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Items;


//  This is css file for without flip

/*------------------  This is for without flip -------------------- */
/*------------------  This is for without flip -------------------- */
/*------------------  This is for without flip -------------------- */

// .product-body{
//   position: relative;
//   top: 0px;
// }
// .productList .product-body {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// .productList {
//   background-color: whitesmoke;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: start;
// }
// .productList .product {
//   position: relative;
//   width: 250px;
//   height: 270px;
//   border-radius: 9px;
//   background-color: rgb(112, 109, 109);
//   margin: 5px;
  
//   background-image: linear-gradient(
//     to top right,
//     rgb(255, 255, 255),
//     rgba(240, 233, 233, 0.999)
//   );
//   margin-right: 30px;
//   margin-bottom: 20px;
//   box-shadow: 0px 4px 6px rgb(109, 106, 106, 0.6);
// }

// .productList .product img {
//   position: absolute;
//   box-shadow: 3px 3px 5px rgb(17, 16, 16,0.3);
//   border-bottom-right-radius: 20px;
//   border-bottom-left-radius: 10px;
//   border-top-right-radius: 10px;
//   top: 10px;
//   left: 49px;
//   width: 140px;
//   height: 140px;
// }

// .productList .product .product-options {
//   position: absolute;
//   right: 7px;
//   top: 10px;
//   height: 70px;
//   width: 29px;
//   background-color: transparent;
// }
// .productList .product .product-options{
//   display: flex;
//   flex-direction: column;
//   font-size: 14px;
// }
// .productList .product .product-options i{
//   padding: 7px 7.5px 7px 7px;
//   margin-top: 5px;
//   width: 15px;
//   height: 15px;
//   border-radius: 50%;
//   box-shadow: 1px  1px  3px rgb(56, 53, 53,0.7);
// }
// .productList .product .product-options i:hover{
//   color: rgb(255, 255, 255);
//   background-color: black;
//   cursor: pointer;
// }
// .productList .product .product-details {
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 105px;
//   border-top: 1px solid rgb(15, 13, 13,0.1);
//   text-align: center;
// }

// .productList .product .product-details p {
//   font-size: 11.5px;
//   margin: 3px;
//   padding: 0px;
//   font-family: 'Courier New', Courier, monospace;
// }

// .productList .product .product-details p:nth-child(1) {
//   font-size: 15px;
//   font-weight: 800;
//   font-family: 'Courier New', Courier, monospace;
// }
// .productList .product .product-details p:nth-child(2) span {
//   font-weight: 600;
//   color: #766d6d;
// }
// .productList .product .product-details p:nth-child(2) span:nth-child(1) {
//   margin: 12px;
//   text-decoration: line-through #383434 0.5px;
// }
// .productList .product .product-details p:nth-child(2) span:nth-child(2) {
//   color: rgb(250, 4, 4);
// }
// .productList .product .product-details p:nth-child(3) span i{
//   color: rgb(241, 12, 12);
// }
// .productList .product .product-details p:nth-child(3) span{
//   color: #433838;
// }
// /* -------------This is for shop now button---------------- */

// .productList .product .product-details button{
//   position: absolute;
//   bottom: 2px;
//   right: 30%;
//   width: 90px;
//   height: 31px;
//   font-size: 15px;
//   color: white;
//   background-color: orange;
//   border: none;
//   border-radius: 5px;
// }

// .productList .product .product-details button:hover{
//   background-color: rgba(255, 166, 0, 0.813);

// }








// --------------------- THIS IS FOR FLIP ONE ----------------------------------



import React, { useState } from "react";
import "./components/Items.css";
import JsonItem from "./food.json";
import Slider from "./Slider";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import { useCartContext } from './CartContext';


const Items = () => {

//  This is for Add products to Cart Section

const { addToCart } = useCartContext();


  const [{ basket }, dispatch] = useStateValue();
  const [flippedItems, setFlippedItems] = useState([]);

  const handleFlip = (item) => {
    if (flippedItems.includes(item)) {
      setFlippedItems(flippedItems.filter((flippedItem) => flippedItem !== item));
    } else {
      setFlippedItems([...flippedItems, item]);
    }
  };

  // const addToCart = (item) => {
  //   dispatch({ type: "ADD_TO_CART", payload: item });
  // };

  return (
    <div className="product-body">
      <Slider />
      <div className="productList">
        {JsonItem.map((item) => (
          <div className={`product ${item.attribute}`} key={item.id}>
            <img src={require("./photo/vegitable.png")} alt="find" />
            <div className="product-options">
              <i className="fa fa-heart"></i>
              <i className="fa fa-link"></i>
              <i className="fa fa-light fa-cart-plus"></i>
              <i className={`fa fa-light fa-repeat ${flippedItems.includes(item) ? "flipped" : ""}`} onClick={() => handleFlip(item)}></i>
            </div>
            <div className="product-details">
              <p>{item.name}</p>
              <p>
                <span>{item.price * 1.5}</span>
                <span>{item.price}</span>
              </p>
              <p>
                <span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </span>
                <span>(5.2k Reviews)</span>
              </p>
              <p>
                Food Type: <span>{item.food_type}</span>
              </p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
            <div className={`product-back ${flippedItems.includes(item) ? "flipped" : ""}`}>
              <i className={`fa fa-light fa-repeat ${flippedItems.includes(item) ? "flipped" : ""}`} onClick={() => handleFlip(item)}></i>
              <div className="food-details">
                <p>
                  <span>Food Type :</span> {item.type}
                </p>
                <p>
                  <span>Benefits :</span> {item.benefits}
                </p>
                <p>
                  <span>Vitamins :</span>
                  {item.vitamins}
                </p>
                <p>
                  <span>Proteins : </span>
                  {item.proteins}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Items;