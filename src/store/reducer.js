import * as actionType from './actions';
import axios from 'axios';

const intialState = {
    spacexData:[],
    count: 2
}

const redcer=( state = intialState, action)=>{
    switch(action.type){
        case actionType.ApiCalled :
            console.log("Apicalled");
                const fetchData = async () => {
                const response = await axios.get('https://api.spacexdata.com/v3/launches?limit=14');
                console.log(response.data);
                state.spacexData= response.data;
                state.count=4;
            }   
            fetchData();
            return state;
            
    }
    return state;
}

export default redcer;