import React from 'react';
import { shallow } from 'enzyme';
import SocialLinks from './SocialLinks';

describe('SocialLinks', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<SocialLinks />));
    it('should render a div', () => {
        expect(wrapper.find('li').length).toEqual(2);
    })
})
