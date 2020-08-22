import React from "react";
import './subtitle.css';
const subtitle=(props)=>{
    return (
        <nav className="sub-heading">
           {props.subHeading}
        </nav>
    );
  }

export default subtitle;