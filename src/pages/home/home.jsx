import React from "react";
import "./style.css";
 
export const Home =()=>{
    return(
   <div className="homemain">
    
    <h1 className="main-head-of-color-gold">     </h1>
        <center><hr/></center> 
    <div className="merlin-grids1">
      <a href="/"><img src="https://i.imgur.com/nDLbTPZ.jpg" alt=""/></a>
     
    </div>
    <br></br>

      <span className="c1">
        <figure><img className="images1" src="https://i.imgur.com/CuN6KMU.jpg" alt="" srcset=""/><a href="/women">  <p class="btn  ">Women's</p></a> 
   </figure> 
   </span>
   <span className="c2">
        <figure>
        <a href=" "><img className="images2" src="https://i.imgur.com/riU4NA3.jpg" alt="" srcset=""/></a>
        
        <a href="/men"><p class="btn">Men's</p></a>
        </figure>
      </span> 
        
        </div>
         
     

  
    );
}