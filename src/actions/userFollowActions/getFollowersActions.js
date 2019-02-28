import actionTypes from '../actionTypes';
import axios from 'axios';
import { BASE_URL, token } from "../index";

export const getFollowers = () => dispatch => {
    return axios.get(`${BASE_URL}profile/followers`, {
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
  