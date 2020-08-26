import axios from 'axios';
import { BASE_API } from '../constant';

export const APPLIED_YEAR_FILTER = 'APPLIED_YEAR_FILTER'
export const APPLIED_LAUNCH_FILTER = 'APPLIED_LAUNCH_FILTER'
export const APPLIED_LAND_FILTER = 'APPLIED_LAND_FILTER'
export const ApiCalled = 'ApiCalled'
var filter;

export const fetchRemoteData = () => dispatch => {
   axios.get(BASE_API).then(
      response =>
         dispatch({
            type: 'ApiCalled',
            payload: response
         })
   )
}

export const updateFilterFromParam = () => dispatch => {
   console.log("Hello");
   axios.get(BASE_API).then(
      response =>
         dispatch({
            type: 'ApiCalled',
            payload: response
         })
   )
}

const makeFilterValue = (state, filterValue, filterType) => {
   var yearFilter = state.yearFilter === "none" || state.yearFilter === undefined ? '' : '&launch_year=' + state.yearFilter;
   var launchFilter = state.launchFilter === "none" || state.launchFilter === undefined ? '' : '&launch_success=' + state.launchFilter;
   var landFilter = state.landFilter === "none" || state.landFilter === undefined ? '' : '&land_success=' + state.landFilter;
   if (filterType === 'year') {
      if (state.yearFilter === filterValue) {
         filter = launchFilter + landFilter;
         filterValue = 'none';
      }
      else {
         filter = '&launch_year=' + filterValue + launchFilter + landFilter;
      }
   }
   else if (filterType === 'successful-launch') {
      if (state.launchFilter === filterValue) {
         filter = yearFilter + landFilter;
         filterValue = 'none';
      }
      else {
         filter = '&launch_success=' + filterValue + yearFilter + landFilter;
      }

   }
   else if (filterType === 'successful-landing') {
      if (state.landFilter === filterValue) {
         filter = launchFilter + yearFilter
         filterValue = 'none';
      }
      else
         filter = '&land_success=' + filterValue + launchFilter + yearFilter
   }
}

export const updateFilter = (state, filterValue, filterType) => dispatch => {
   makeFilterValue(state, filterValue, filterType);
   console.log(BASE_API + filter);
   var type;
   if (filterType === 'year') {
      type = 'APPLIED_YEAR_FILTER';
   } else if (filterType === 'successful-launch') {
      type = 'APPLIED_LAUNCH_FILTER'
   }
   else if (filterType === 'successful-landing') {
      type = 'APPLIED_LAND_FILTER'
   }
   axios.get(BASE_API + filter).then(
      response =>
         dispatch({
            type: type,
            payload: response,
            yearFilter: filterValue,
            loading: false
         })
   )
}
