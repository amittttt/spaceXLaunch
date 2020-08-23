import React from "react";
import './underlineheading.css';
const underlineheading=(props)=>{
    return (
        <nav className="underline-heading">
           <span className="underline-text">{props.heading}  </span> 
        </nav>
    );
  }

export default underlineheading;