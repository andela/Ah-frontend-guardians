import React from 'react';
import Profile from './ProfileBannerView';
import { shallow } from 'enzyme';

describe("Profile View", () => {
    it("should render the component", () => {
        const wrapper = shallow(<Profile />)
        expect(wrapper.find('div').length).toEqual(1);
    });
});
