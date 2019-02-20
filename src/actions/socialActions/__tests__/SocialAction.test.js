import configureMockStore from 'redux-mock-store';
import React from 'react';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import facebookLoginAction from '../facebookAction';
import googleLoginAction from '../googleAction';
import "babel-polyfill";
import { shallow } from 'enzyme';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
let postFunc = (myfunction) => {
  mockAxios.post('MockURL', { access_token: 'accessToken' });
  store.dispatch(myfunction({ access_token: 'accessToken' }));
  expect(store.getActions()).toEqual([]);
};

describe('Social Actions', () => {
  afterEach = () => {
    mockAxios.reset();
  };

  it('dispatch actions for facebook login', () => {
    postFunc(facebookLoginAction)
  });

  it('dispatch actions for google login', () => {
    postFunc(googleLoginAction)
  });

  it('dispatch actions for google login', () => {
    let wrapper = shallow(<facebookLoginAction />);
    expect(wrapper).toMatchSnapshot();
  });

  it('dispatch actions for google login', () => {
    let wrapper = shallow(<googleLoginAction />);
    expect(wrapper).toMatchSnapshot();
  });

});
