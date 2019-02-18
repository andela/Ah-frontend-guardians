import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Routes from '../routes/index';

describe('App', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<Index />', () => {
    it('renders the routes without crashing', () => {
        const wrapper = shallow(<Routes/>)
        expect(wrapper).toHaveLength(1)
    })
})
