import actionTypes from '../actionTypes';
import axios from 'axios';
import { BASE_URL, token } from "../index";

export const getFollowing = () => dispatch => {
    return axios.get(`${BASE_URL}/profile/following/`, {
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
  