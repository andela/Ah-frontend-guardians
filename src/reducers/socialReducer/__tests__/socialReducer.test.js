import socialReducer from '../socialReducer';
import actionTypes from '../../../actions/actionTypes';
import { startReducer } from '../../mainReducer';

const initialState = {
  isAuthenticated: false,
  facebookLogin: false,
  googleLogin: false,
  payload: '',
  token: ''
};

describe('Social Authentication Reducer', () => {
  it('should return the initial state', () => {
    expect(socialReducer(undefined, {})).toEqual(initialState);
  });

  it('In case of Google Login Success', () => {
    expect(
      socialReducer(initialState, {
        type: actionTypes.GOOGLE_SUCCESS,
        payload: { user: { token: 'token' } }
      })
    ).toEqual({
      isAuthenticated: true,
      facebookLogin: false,
      googleLogin: true,
      payload: { user: { token: 'token' } },
      token: 'token'
    });
  });

  it('In case of Facebook Login Success', () => {
    expect(
      socialReducer(initialState, {
        type: actionTypes.FACEBOOK_SUCCESS,
        payload: { user: { token: 'token' } }
      })
    ).toEqual({
      isAuthenticated: true,
      facebookLogin: true,
      googleLogin: false,
      payload: { user: { token: 'token' } },
      token: 'token'
    });
  });

  it('should update state in case GOOGLE FAILS', () => {
    expect(
      socialReducer([], { type: actionTypes.GOOGLE_FAIL, payload: '' })
    ).toEqual({
      payload: ''
    });
  });

  it('should update state in case FACEBOOK FAILS', () => {
    expect(
      socialReducer([], { type: actionTypes.FACEBOOK_FAIL, payload: '' })
    ).toEqual({
      payload: ''
    });
  });
});
