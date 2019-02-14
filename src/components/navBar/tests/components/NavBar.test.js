import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { NavBar} from '../../NavBar';

const mockedProps = {
    signin:{
        success: false
    }
}

describe('Navbar Test', () => {

    const wrapper = shallow(<NavBar {...mockedProps}/>)

    test('renders the component without crashing', () => {
        expect(wrapper).toMatchSnapshot()
    });


    test('renders the component', () => {
        expect(wrapper).toBeTruthy()
    })
})
