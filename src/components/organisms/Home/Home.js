import React, { useState, useEffect } from "react";
import FilterView from '../../molecules/filterview/filterview';
import CardView from '../../molecules/cardview/cardview';
import Navbar from '../../atoms/navbar/navbar';
import { connect } from 'react-redux'
import {fetchRemoteData} from '../../../store/actions'
import './Home.css';

const Home = (props) => {
    useEffect(() => {
        props.fetchRemoteData();
    }, [fetchRemoteData]);

    // Duplication code [Need to remove this]
    return (
        <section>
            {props.ctr}
            <Navbar navHeading="SpacEX Launch Programs"/>
            <div className="filter-container">
                <FilterView></FilterView>
            </div>
            <div className="card-container">
                {props.spacexData.map(repo =>
                    (
                        (repo.flight_number % 4) === 0
                        ?
                            <div className='row'>
                                <div className='column'>
                                    <CardView
                                        key={repo.flight_number}
                                        flight_number={repo.flight_number}
                                        mission_icon={repo.links.mission_patch_small}
                                        mission_name={repo.mission_name}
                                        mission_id={repo.mission_id}
                                        launch_year={repo.launch_year}
                                        launch_success={repo.launch_success}
                                        landing_success={repo.rocket.first_stage.cores[0].land_success}
                                        />
                                </div>
                            </div>
                        :
                            <div className='column'>
                            <CardView
                                key={repo.flight_number}
                                flight_number={repo.flight_number}
                                mission_icon={repo.links.mission_patch_small}
                                mission_name={repo.mission_name}
                                mission_id={repo.mission_id}
                                launch_year={repo.launch_year}
                                launch_success={repo.launch_success}
                                landing_success={repo.rocket.first_stage.cores[0].land_success}
                                />
                        </div>
                ))}
            </div>
        </section>
    );
}


const mapStateToProps = state =>{
    return {
        spacexData:state.spacexData
    }
}
export default connect(mapStateToProps,{fetchRemoteData})(Home);