import React from "react";
import './image.css';
import {FallBack_IMAGE_URL} from '../../../constant';

const image=(props)=>{
    const imageUrl = props.url===null?FallBack_IMAGE_URL:props.url;
    return (
      <div className='img'>
          <img 
            className="img-dispaly"
            src={imageUrl}
            alt='logo'
          />
      </div>
    );
  }

export default image;