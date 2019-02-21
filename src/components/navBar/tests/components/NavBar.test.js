import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { NavBar} from '../../NavBar';
import avatar  from '../../src/images/avatar.png';

describe('Navbar Test', () => {

    const wrapper = shallow(<NavBar />)

    test('renders the component without crashing', () => {
        expect(wrapper).toMatchSnapshot()
    });


    test('renders the component', () => {
        expect(wrapper).toBeTruthy()
    })
})
