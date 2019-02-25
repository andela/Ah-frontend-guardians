import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import { shallow } from 'enzyme';
import { SignUpView } from './SignUpView';

const mockStore = configureMockStore();

describe('SignUpView', () => {
    it('should be rendered', () => {
        const store = mockStore({});
        const wrapper = shallow(
            <Provider store={store}><SignUpView store={store} /></Provider>,
        );

        expect(wrapper).not.toBe(null);
    });
});
