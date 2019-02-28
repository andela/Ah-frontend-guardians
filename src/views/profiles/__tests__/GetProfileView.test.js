import React from 'react';
import { GetProfileView } from '../GetProfileView';
import { shallow } from 'enzyme';

describe('GetProfileView', () => {
  let wrapper;
  const getProfile = jest.fn();

  describe('When profile is viewed', () => {
    it('Should display a username at the minimum', () => {
      const prof = {
        first_name: 'paul',
        last_name: 'dog',
        bio: 'sss',
        image: ''
      };
      wrapper = shallow(
        <GetProfileView getProfile={getProfile} profile={prof} />
      );

      wrapper
        .find('GetProfile')
        .dive()
        .find('#username');
      expect(getProfile.mock.calls.length).toBe(1);
    });
  });
});
