import actionTypes from '../actionTypes';
import axios from 'axios';

let token = window.localStorage.getItem('token');

export const getFollowers = () => dispatch => {
    return axios.get('https://ah-backend-guardians-staging.herokuapp.com/api/profile/followers', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
         console.log(response);
        dispatch({
          type: actionTypes.GET_FOLLOWERS,
          payload: response.profile.followers
        });
      })
      .catch(err => err);
  };
  