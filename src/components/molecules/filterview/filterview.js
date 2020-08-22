import React from "react";
import SubTitle from '../../atoms/subtitle/subtitle';
import UnderLineHeading from '../../atoms/underlineheading/underlineheading';
import Button from '../../atoms/button/button';
import './filterview.css';

const filterview=()=>{
    return (
      <div className='card'>
        <SubTitle subHeading="Filters"></SubTitle>
        <UnderLineHeading heading="Launch Year"></UnderLineHeading>
        <div className="filter-row">
            <div className="filter-column">
              <Button filterType="year" value="2006"></Button>
            </div>
            <div className="filter-column">
              <Button filterType="year" value="2007"></Button>
            </div>
            
        </div>
        <div className="filter-row">
            <div className="filter-column">
              <Button filterType="year" value="2008"></Button>
            </div>
            <div className="filter-column">
              <Button filterType="year" value="2009"></Button>
            </div>
        </div>
        <div className="filter-row">
            <div className="filter-column">
              <Button filterType="year" value="2010"></Button>
            </div>
            <div className="filter-column">
              <Button filterType="year" value="2014"></Button>
            </div>
        </div>
        <UnderLineHeading heading="Sucessful Launch"></UnderLineHeading>
        <div className="filter-row">
            <div className="filter-column">
              <Button filterType="sucessful-launch" value="true"></Button>
            </div>
            <div className="filter-column">
              <Button filterType="sucessful-launch" value="false"></Button>
            </div>
        </div>
        <UnderLineHeading heading="Sucessful Landing"></UnderLineHeading>
        <div className="filter-row">
            <div className="filter-column">
              <Button filterType="sucessful-landing" value="true"></Button>
            </div>
            <div className="filter-column">
              <Button filterType="sucessful-landing" value="false"></Button>
            </div>
        </div>
      </div>
    );
  }

export default filterview;