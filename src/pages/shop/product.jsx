import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css"
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="out">
    <div className="product">
      <img src={productImage} />
      
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn btn btn-outline-dark"  onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
    </div>
   
  );





};
