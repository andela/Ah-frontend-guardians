import LoginReducer from '../loginReducer';
import { createStore } from 'redux';
import {LOGIN_FAIL, LOGIN_SUCCESS} from '../../action/actionType/loginType/loginType';
import rootReducer from '../mainReducer'

const initialState = {
  data: {},
  errors: {},
  success: false,
};

describe('Testing reducer', () => {
  it('Test empty reducer', () => {
    expect(LoginReducer(undefined, {})).toEqual(initialState);
  });

  it('Test success reducer', () => {
    const response = LoginReducer(initialState, {
      type: LOGIN_SUCCESS,
      payload: {
        user: {
          email: 'vivian.nabulo@gmail.com',
          username: 'nabulo',
        },
      },
    });

    expect(response).toEqual({
      data: {
        user: {
          email: 'vivian.nabulo@gmail.com',
          username: 'nabulo',
        },
      },
      errors: null,
      success: true,
    });
  });

  it('Test failure reducer', () => {
    const response = LoginReducer(initialState, {
      type: LOGIN_FAIL,
      payload: {
        user: {
          email: '',
          username: '',
        },
      },
    });

    expect(response).toEqual({
      data: null,
        errors: undefined,
        success: false,
    });
  });

it('Test main reducer', () => {
  let store = createStore(rootReducer)
expect(store.getState().signin.data).toEqual({})
})
});
