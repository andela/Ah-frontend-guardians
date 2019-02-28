import actionTypes from '../actionTypes';
import axios from 'axios';

const googleLoginAction = (tokenId) =>{
  return (dispatch) => {
  axios
    .post(
      'https://ah-backend-guardians-staging.herokuapp.com/api/users/google/',
      {
        access_token: tokenId
      }
    ).then(res => {
      window.localStorage.setItem('token', res.data.user.token);
      window.localStorage.setItem('username', res.data.user.username)
      dispatch({
        type: actionTypes.GOOGLE_SUCCESS,
        payload: res.data,
        token: res.data.user.token
      });
    })
}
}

export default googleLoginAction;
