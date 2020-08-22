import React from "react";
import './underlineheading.css';
const underlineheading=(props)=>{
    return (
        <nav className="underline-heading">
           {props.heading}   
        </nav>
    );
  }

export default underlineheading;