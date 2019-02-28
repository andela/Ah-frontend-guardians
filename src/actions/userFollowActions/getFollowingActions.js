import actionTypes from '../actionTypes';
import axios from 'axios';

let token = window.localStorage.getItem('token');

export const getFollowing = () => dispatch => {
    return axios.get('https://ah-backend-guardians-staging.herokuapp.com/api/profile/following/', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
          console.log(response);
        dispatch({
          type: actionTypes.GET_FOLLOWING,
          payload: response.profile.following
        });
      })
      .catch(err => err);
  };
  