import React from "react";
import './cardview.css';
import Image from '../../atoms/image/image';

const cardview=(props)=>{
    console.log(props.miss);
    const missionName = props.mission_name +' #'+props.flight_number
    const missionIds = props.mission_id;
    return (
      <div className='card'>
        <div className='card-image'>
          <Image url={props.mission_icon}></Image>
        </div>
        <div className="card-body">
          <div> {missionName} </div>
          <div>
            Mission Ids:
            <ul>
              {missionIds.map((missionIds) =>(
                <li>
                  {missionIds}
                </li>
              ))}
            </ul>
          </div>
          <div>Launch Year : {props.launch_year} </div>
          <div>Sucessful Launch : false </div>
          <div>Sucessful Landing : {props.launch_success} </div>
        </div>
      </div>
    );
  }

export default cardview;