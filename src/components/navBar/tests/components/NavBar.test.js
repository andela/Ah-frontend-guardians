import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { MapStateToProps, NavBar } from '../../NavBar';

const mockedProps = {
    signin: {
        success: false
    },
    social:{
        isAuthenticated: false
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

    test('maps states to props', () => {
        const mockedState = {
            navBarReducer: { navBarReducer: { sigin: true } }
        }
        const state = MapStateToProps(mockedState);

        expect(state.navBarReducer).toEqual({ sigin: true });
    });
})
