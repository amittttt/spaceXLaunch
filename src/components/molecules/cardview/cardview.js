import React from "react";
import './cardview.css';
import Image from '../../atoms/image/image';

const cardview=(props)=>{
    const missionName = props.mission_name +' #'+props.flight_number
    const missionIds = props.mission_id;
    return (
      <div className='card'>
        <div className='card-image'>
          <Image url={props.mission_icon}></Image>
        </div>
        <div className="card-body">
          <div className="missionName"> {missionName} </div>
          {/* <div>
            Mission Ids:
            <ul>
              {missionIds.map((missionIds) =>(
                <li key={missionIds}>
                  {missionIds}
                </li>
              ))}
            </ul>
          </div> */}
          <div> <span className="card-heading-key">Launch Year</span>: {props.launch_year} </div>
          <div><span className="card-heading-key">Successful Launch</span>: {` ${props.launch_success}`} </div>
          <div><span className="card-heading-key">Successful Landing</span>: {props.landing_success===null? 'N/A' : `${props.landing_success}`} </div>
        </div>
      </div>
    );
  }

export default cardview;