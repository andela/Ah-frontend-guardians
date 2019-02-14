import React from 'react';
import { shallow, mount } from 'enzyme';
import SocialLink from '../social_media_links'

describe(`Login`, () => {
    let wrapper;

    describe('Login', () => {
        beforeEach(() => wrapper = shallow(<SocialLink />));
        it('should render social links', () => {
            expect(wrapper.find('p').length).toEqual(3);
        })
    })
    });
