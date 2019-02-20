import React from 'react';
import { shallow } from 'enzyme';
import { SocialAuthView, mapStateToProps } from '../SocialLoginView';

const push = jest.fn();

let mockProps = {
  googleLoginAction: jest.fn(),
  facebookLoginAction: jest.fn(),
  payload: {
    token: 'usertoken',
    errors: {
      errors: 'Something went wrong'
    }
  },
  socialAuthState: {
    isAuthenticated: false,
    facebookLogin: false,
    googleLogin: false,
    payload: '',
    token: ''
  },
  social: {
    isAuthenticated: false
  },
  history: { push }
};

let wrapper;

describe('<SocialAuthView />', () => {
  beforeEach(() => {
    wrapper = shallow(<SocialAuthView {...mockProps} />);
  });

  it('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.length).toEqual(1);
  });

  it('should call handle google login action', () => {
    wrapper.instance().handleGoogleFailure({
      token: 'access_token'
    });
    expect(wrapper.instance().props.googleLoginAction).toBeCalled();
  });

  it('should call handle google login successfully', () => {
    wrapper.setProps({
      response: {
        tokenId: 'token from google'
      }
    });
    let response = wrapper.instance().props.response;
    wrapper.instance().handleGoogleSuccess(response);
    expect(response).toEqual({ tokenId: 'token from google' });
  });

  it('should call facebook login action', () => {
    wrapper.setProps({
      response: {
        accessToken: 'token from facebook'
      }
    });
    wrapper.instance().handleFacebookReponse(wrapper.instance().props.response);
    expect(wrapper.instance().props.facebookLoginAction).toBeCalled();
  });

});
