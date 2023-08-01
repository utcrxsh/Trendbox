import React from "react";
import { PRODUCTS } from "../../products";
import {PRODUCTSF } from "../../productss";
import { Product } from "./product";
import "./shop.css";

export const Shop1 = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Mens</h1>
      </div> 

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export const Shop2 = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Womens</h1>
      </div> 

      <div className="products">
        {PRODUCTSF.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
