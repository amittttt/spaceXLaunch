import axios from 'axios';

export const APPLIED_YEAR_FILTER = 'APPLIED_YEAR_FILTER' 
export const APPLIED_LAUNCH_FILTER = 'APPLIED_LAUNCH_FILTER' 
export const APPLIED_LAND_FILTER = 'APPLIED_LAND_FILTER' 
export const ApiCalled='ApiCalled'


export const fetchRemoteData = () => dispatch => {
     axios.get('https://api.spacexdata.com/v3/launches?limit=100').then(
       response =>
          dispatch({
            type: 'ApiCalled',
            payload: response
          })
       )
 } 

 export const updateFilter=(state,filterValue,filterType)=>dispatch=>{
    // form the url :
    var yearFilter = state.yearFilter=="none" || state.yearFilter==undefined ?'': '&launch_year='+state.yearFilter;
    var launchFilter = state.launchFilter=="none" || state.launchFilter==undefined ?'':'&launch_success='+state.launchFilter;
    var landFilter=state.landFilter=="none" || state.landFilter==undefined ?'':'&land_success='+state.landFilter;

    if(filterType=='year'){
      var filter ;
      if(state.yearFilter==filterValue){
         filter = launchFilter+landFilter;
         filterValue='none';
      }
      else
         filter = '&launch_year='+filterValue+launchFilter+landFilter;
      var url = 'https://api.spacexdata.com/v3/launches?limit=100'+filter.toLowerCase();
      console.log(url);
      axios.get(url).then(
         response =>
            dispatch({
              type: 'APPLIED_YEAR_FILTER',
              payload: response,
              yearFilter:filterValue
            })
         )
    }else if(filterType=='sucessful-launch'){
      var filter ;
      if(state.launchFilter==filterValue){
         filter = yearFilter+landFilter;
         filterValue='none';
      }
      else
         filter = '&launch_success='+filterValue+yearFilter+landFilter;
      var url ='https://api.spacexdata.com/v3/launches?limit=100'+filter;
      console.log(url);
      axios.get(url).then(
         response =>
            dispatch({
              type: 'APPLIED_LAUNCH_FILTER',
              payload: response,
              launchFilter:filterValue
            })
         )
    }
    else if(filterType=='sucessful-landing'){
      var filter ;
      if(state.landFilter==filterValue){
         filter = launchFilter+yearFilter
         filterValue='none';
      }
      else
         filter = '&land_success='+filterValue+launchFilter+yearFilter
      var url = 'https://api.spacexdata.com/v3/launches?limit=100'+filter;
      console.log(url);
      axios.get(url).then(
         response =>
            dispatch({
              type: 'APPLIED_LAND_FILTER',
              payload: response,
              landFilter: filterValue
            })
         )
    }
    
 }
