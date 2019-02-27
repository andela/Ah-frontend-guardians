import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../index';

describe('Routes', () => {
  it('should render a <Router />', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });
});