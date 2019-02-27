import axios from 'axios';
import { BASE_URL, token } from '..';
import { toast } from 'react-toastify';
import {
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS,
  ARTICLE_LIKE_STATUS,
  ARTICLE_DISLIKE_STATUS,
  ARTICLE_LIKE_COUNT
} from './types';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

export const likeArticle = slug => (dispatch) => {
  axios
    .put(`${BASE_URL}articles/${slug}/like/`, {}, { headers })
    .then((res) => {
      dispatch({
        type: LIKE_ARTICLE_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      if (err.response.status === 403) {
        toast.error('You need to be logged in');
      }
    });
};

export const dislikeArticle = slug => (dispatch) => {
  axios
    .put(`${BASE_URL}articles/${slug}/dislike/`, {}, { headers })
    .then((res) => {
      dispatch({
        type: DISLIKE_ARTICLE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getLikeStatus = slug => (dispatch) => {
  axios
    .get(`${BASE_URL}articles/${slug}/get_article_like/`, { headers })
    .then((res) => {
      dispatch({
        type: ARTICLE_LIKE_STATUS,
        payload: res.data.article_status.article_like
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDislikeStatus = slug => (dispatch) => {
  axios
    .get(`${BASE_URL}articles/${slug}/get_article_dislike/`, { headers })
    .then((res) => {
      dispatch({
        type: ARTICLE_DISLIKE_STATUS,
        payload: res.data.article_status.article_dislike
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLikeCount = slug => (dispatch) => {
  axios.get(`${BASE_URL}articles/${slug}/`, { headers })
  .then((res) => {
    dispatch({
      type: ARTICLE_LIKE_COUNT,
      likeCount: res.data.article.likes_count,
      dislikeCount: res.data.article.dislikes_count
    });
  })
  .catch((err) => {
    console.log(err);
    
  });
}
