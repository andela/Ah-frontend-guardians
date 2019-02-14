import { LOGIN_FAIL, LOGIN_SUCCESS } from '../../actionType/loginType/loginType';
import axios from 'axios'

var headers = {
  'Content-Type': 'application/json',
}

export const fetchLoginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const fetchLoginFailure = error => ({
  type: LOGIN_FAIL,
  error,
});

export const signinAction = userData => (dispatch) => {
  return (axios.post('https://ah-backend-guardians-staging.herokuapp.com/api/users/login/', userData, { headers:headers })
      .then((response) => {  
        dispatch(fetchLoginSuccess(response.data))
        window.localStorage.setItem('token', response.data.user['token'])        
      })
      .catch((error) => {
          dispatch(fetchLoginFailure(error.response))
      }))
    }

export default signinAction;
