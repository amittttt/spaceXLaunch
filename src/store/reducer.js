import * as actionType from './actions';

const intialState = {
    spacexData:[],
    yearFilter:'none',
    launchFilter:'none',
    landFilter:'none',
    loading:true
}

const redcer=( state = intialState, action)=>{
    switch(action.type){
        case actionType.ApiCalled :  
            return {
                ...state,
                spacexData:action.payload.data,
                loading:false
            };
        case actionType.APPLIED_YEAR_FILTER :
            return {
                ...state,
                spacexData:action.payload.data,
                yearFilter:action.yearFilter
            };
        case actionType.APPLIED_LAUNCH_FILTER :
            return {
                ...state,
                spacexData:action.payload.data,
                launchFilter:action.launchFilter
            };
        case actionType.APPLIED_LAND_FILTER :
            console.log("Land filter udpate.."+state.landFilter);
            return {
                ...state,
                spacexData:action.payload.data,
                landFilter:action.landFilter
            };
        default :
            return state;
            
    }
}

export default redcer;