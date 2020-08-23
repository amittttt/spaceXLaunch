import React from "react";
import './image.css';

const image=(props)=>{
    return (
      <div className='img'>
          <img 
            width='150px'
            height='150px'
            src={props.url}
            alt='logo'
          />
      </div>
    );
  }

export default image;