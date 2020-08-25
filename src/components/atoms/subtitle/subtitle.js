import React from "react";
import './subtitle.css';
const subtitle=(props)=>{
    return (
        <div className="sub-heading">
           {props.subHeading}
        </div>
    );
  }

export default subtitle;