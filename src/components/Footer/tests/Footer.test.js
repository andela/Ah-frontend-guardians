import Footer from '../Footer';
import React from 'react';
import { shallow } from 'enzyme';

describe('Test the footer', () => {
    it('should render without crashing', () => {
        let wrapper = shallow(<Footer/>)
        expect(wrapper).toMatchSnapshot()
    })
})