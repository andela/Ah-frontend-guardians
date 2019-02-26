import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps } from './ProfileView';

describe("ProfileBanner View", () => {
    it("should render the component", () => {
        const wrapper = shallow(<Profile />);

        expect(wrapper.find('#profile').length).toEqual(1);
    });

    it("should map states to props", () => {
        const mockedState = {
            signin: true
        }
        const state = mapStateToProps(mockedState);

        expect(state.signin).toEqual(true);
    });
});
