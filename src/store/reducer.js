import * as actionType from './actions';

const intialState = {
    spacexData:[],
    yearFilter:'none',
    launchFilter:'none',
    landFilter:'none'
    // Future : filter: "city=Antwerp&firstName=Dax&lastName=Bosch&postalCode=2600"
}

const redcer=( state = intialState, action)=>{
    switch(action.type){
        case actionType.ApiCalled :  
            return {
                ...state,
                spacexData:action.payload.data
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