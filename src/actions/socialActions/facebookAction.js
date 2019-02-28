import actionTypes from '../actionTypes';
import axios from 'axios';

const facebookLoginAction = accessToken => dispatch => {
  axios
    .post(
      'https://ah-backend-guardians-staging.herokuapp.com/api/users/facebook/',
      {
        access_token: accessToken
      }
    )
    .then(res => {
      window.localStorage.setItem('token', res.data.user.token);
      window.localStorage.setItem('username', res.data.user.username)
      dispatch({
        type: actionTypes.FACEBOOK_SUCCESS,
        payload: res.data,
        token: res.data.user.token
      });
    })
};

export default facebookLoginAction;
