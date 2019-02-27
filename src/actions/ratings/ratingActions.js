import { EDIT_RATING, VIEW_RATING, EDIT_RATING_FAILURE } from './types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { token, BASE_URL } from '../index';

export const getRating = slug => dispatch => {
  const headers = {
    'Content-type': 'application/json'
  };
  return axios
    .get(`${BASE_URL}articles/${slug}/`, { headers: headers })
    .then(response => {
      dispatch({
        type: VIEW_RATING,
        payload: response.data
      });
    });
};

export const updateRating = (updRating, newSlug) => dispatch => {
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  };
  return axios
    .put(`${BASE_URL}articles/${newSlug}/rating/`, updRating, {
      headers: headers
    })

    .then(response => {
      dispatch({
        type: EDIT_RATING,
        payload: response.data
      });
      toast.success("You successfully rated this article");
    })
    .catch(error => {
      dispatch({
        type: EDIT_RATING_FAILURE,
        error: error.response
      });
      toast.error(error.response.data.error);
      if (error.response.data.detail) {
        toast.error('You have not signed in');
      }
    });
};
