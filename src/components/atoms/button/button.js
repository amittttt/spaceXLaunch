import React from "react";
import './button.css';

const button=(props)=>{

    function onClickHandler(e){
      console.log(props.value);
    }
    return (
      <>
         <button className="button" onClick={onClickHandler}>{props.value}</button>
      </>
    );
  }

export default button;