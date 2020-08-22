import axios from 'axios';

export const APPLIED_FILTER = 'APPLIED_FILTER' 
export const ApiCalled='ApiCalled'


export const fetchRemoteData = (endpoint) => (dispatch, getState) => {
    return axios.get('https://api.spacexdata.com/v3/launches?limit=14').then(
       response =>
          dispatch({
             type: 'FETCH_REMOTE_DATA_SUCCESS',
             endpoint,
             response
          })
       )
 } 

 export function getCustomers() {
    return {
      type: 'GET_CUSTOMERS',
      payload: axios.get('https://api.spacexdata.com/v3/launches?limit=14')
        .then(res => {
            console.log("call api from redux");
          if (!res.ok) throw new Error('An error occurred.');
          return res;
        })
        .then(res => res.json())
        .catch(err => console.warn(err))
    };
  }