import React from 'react';
import { shallow, mount } from 'enzyme';
import SocialAuthLogin from '../SocialAuthLogin';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

let wrapper = shallow(<SocialAuthLogin />);

const mockProps = {
  appId: '20009709833',
  fields: 'name,email',
  callback: {},
  textButton: '',
  render: {}
};

describe('Social Authentication', () => {
  it('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain div component', () => {
    const authComponents = wrapper.find('div');
    expect(authComponents.length).toBeGreaterThanOrEqual(1);
  });

  it('should contain span component', () => {
    expect(wrapper.find('ul').length).toBeGreaterThanOrEqual(1);
  });

});
