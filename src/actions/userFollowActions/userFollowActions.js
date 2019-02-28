import actionTypes from '../actionTypes';
import axios from 'axios';

let token = window.localStorage.getItem('token');

export const followUser = username => dispatch => {
  return axios
    .put(
      'https://ah-backend-guardians-staging.herokuapp.com/api/profile/follow/',
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`
        },
        data: {
          username: `${username}`
        }
      }
    )
    .then(response => {
        console.log(response);
      if (following == false) {
        return dispatch({
          type: actionTypes.FOLLOW_USER,
          payload: response.profile
        });
      } else {
        return dispatch({
          type: actionTypes.UNFOLLOW_USER,
          payload: response.profile
        });
      }
    })
    .catch(err => err);
};