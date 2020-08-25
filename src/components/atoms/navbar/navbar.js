import React from "react";
import './navbar.css';

const navbar=(props)=>{
    return (
        <nav className="nav-heading">
           {props.navHeading}
        </nav>
    );
  }

export default navbar;