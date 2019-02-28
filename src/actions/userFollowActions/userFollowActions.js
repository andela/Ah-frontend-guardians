import actionTypes from '../actionTypes';
import axios from 'axios';
import { BASE_URL, token } from "../index";

export const followUser = username => dispatch => {
  return axios
    .put(
      `${BASE_URL}/profile/follow/`,
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