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
      dispatch({
        type: actionTypes.FACEBOOK_SUCCESS,
        payload: res.data,
        token: res.data.user.token
      });
    })
};

export default facebookLoginAction;
