import React, { useEffect } from "react";
import FilterView from '../../molecules/filterview/filterview';
import CardView from '../../molecules/cardview/cardview';
import Navbar from '../../atoms/navbar/navbar';
import Footer from '../../atoms/footer/footer';
import { connect } from 'react-redux'
import {fetchRemoteData} from '../../../store/actions'
import './Home.css';

const Home = (props) => {
    useEffect(() => {
        props.fetchRemoteData();
    }, [fetchRemoteData]);

    return (
        <section>
            <Navbar navHeading="SpacEX Launch Programs"/>
            <div className="filter-container">
                <FilterView></FilterView>
            </div>
            <div className="card-container">
                {props.spacexData.map(repo =>
                    (
                        <div key={repo.flight_number} className='column'>
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
            <div className="loading-data">{props.loading ? '🚀 Loading Data for you....' : ''}</div>
            <Footer></Footer>
        </section>
    );
}


const mapStateToProps = state =>{
    return {
        spacexData:state.spacexData,
        loading: state.loading
    }
}
export default connect(mapStateToProps,{fetchRemoteData})(Home);