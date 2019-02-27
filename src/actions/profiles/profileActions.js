import { VIEW_PROFILE, UPDATE_PROFILE } from './types';
import axios from 'axios';

const username = localStorage.getItem('username');
const token = localStorage.getItem('token');
const stagingurl = `https://ah-backend-guardians-staging.herokuapp.com/`;

export const getProfile = () => dispatch => {
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  };
  return axios
    .get(stagingurl + `api/profiles/${username}`, { headers: headers })
    .then(response => {
      dispatch({
        type: VIEW_PROFILE,
        payload: response.data.profile
      });
    });
};

export const updateProfile = updProfile => dispatch => {
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  };

  return axios
    .put(stagingurl + `api/profiles/${username}/edit/`, updProfile, {
      headers: headers
    })

    .then(response => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data.profile
      });
    });
};
