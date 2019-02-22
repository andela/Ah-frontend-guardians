import EditProfile from '../EditProfile';
import { shallow } from 'enzyme';
import React from 'react';

describe('Edit Profile ', () => {
  let wrapper;
  const props = {
    firstName: '',
    lastName:'',
    bio:'',
    image:''
  };
  const lastName = 'paul';

  it('should render a form', () => {
      wrapper = shallow(<EditProfile {...props} lastName={lastName} />)
      expect(wrapper.find('form').length).toEqual(1);
  })

});

