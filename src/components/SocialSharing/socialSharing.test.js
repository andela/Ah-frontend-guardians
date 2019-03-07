import React from 'react';
import { shallow } from 'enzyme';
import SocialShare from './socialSharing';

describe('Social Sharing tests', () => {
    const wrapper = shallow(<SocialShare/>);

    test('renders the component without crashing', () => {
        expect(wrapper).toMatchSnapshot()
    });
});
