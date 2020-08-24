import React from "react";
import './button.css';
import { connect } from 'react-redux'
import {updateFilter} from '../../../store/actions'

 const button=(props)=>{
    var id = props.filterType+'-'+props.value;

    function onClickHandler(e){
      props.updateFilter(props.state,props.value,props.filterType);
      handleSelectButtonColor(e);
    }
    function handleSelectButtonColor(e){
      e.target.classList.toggle('is-active'); 
      var prevStateId;
      if(e.target.dataset.filterItems==='year'&& props.state.yearFilter!=='none' && props.state.yearFilter!==undefined){
        prevStateId = document.getElementById(`year-${props.state.yearFilter}`);
        prevStateId.classList.remove('is-active');
      }else if(e.target.dataset.filterItems==='successful-launch'&& props.state.launchFilter!=='none' && props.state.launchFilter!==undefined){
        prevStateId = document.getElementById(`successful-launch-${props.state.launchFilter}`);
        prevStateId.classList.remove('is-active');
      }else if(e.target.dataset.filterItems==='successful-landing'&& props.state.landFilter!=='none' && props.state.landFilter!==undefined){
        prevStateId = document.getElementById(`successful-landing-${props.state.landFilter}`);
        prevStateId.classList.remove('is-active');
      }
      
    }
    return (
      <>
         <button data-filter-items={props.filterType} className="button" id={id} onClick={onClickHandler}>{props.value}</button>
      </>
    );
  }

const mapStateToProps = state =>{
    return {
        state:state
    }
}  

export default connect(mapStateToProps,{updateFilter})(button);