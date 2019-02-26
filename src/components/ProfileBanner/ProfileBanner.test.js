import React from 'react';
import { shallow } from 'enzyme';
import { Banner } from './ProfileBanner';

const props = {
    article: true,
    bookmark: false,
    favourites: false
  };

describe("Profile Banner tests", () => {
    it("should render the element", () => {
        const wrapper = shallow(<Banner {...props} />);
        const component = wrapper.find('#parent');

        wrapper.find('#article').simulate('click', { target: { id: "article" } });
        expect(component.length).toEqual(1);
    });
});
