import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
          
import image from "./11.png"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <img className="image" src={image} alt=" " />
      <ul>  
      <li> <Link to="/"> Home </Link></li>   
      <li> <Link to="/men"> Men's </Link></li> 
      <li> <Link to="/women"> Women's </Link></li> 
      <li> <Link to="/contact"> Contact </Link></li> 
      <li> <Link to="/cart">
          <ShoppingCart size={32} />
        </Link></li> 
        </ul>
      </div>
    </div>
  );
};
