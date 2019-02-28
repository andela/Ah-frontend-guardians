import React from 'react';
import { shallow, mount } from 'enzyme';
import { ResetEmail, mapStateToProps } from '../../resetEmail';

describe('Reset Email Test', () => {
    const wrapper = shallow(<ResetEmail/>)

    const mockfetchResetPasswordfn = jest.fn()

    const props ={
        fetchResetEmail: mockfetchResetPasswordfn,
        message: 'Password Reset'
    }

    test('renders the component without crashing', () => {

        expect(wrapper).toMatchSnapshot()
    });

    test("should map states to props", () => {
        const mockedState = {
            resetEmailReducer: {sent: false}
        }
        const state = mapStateToProps(mockedState);
        expect(state).toEqual({sent: false});
    });

    test('should render without crashing', () => {
        const component = mount(<ResetEmail/>)
        expect(component.find('.reset-email').length).toEqual(1);
    });

    test('It should sunmit', () =>{
        const component = shallow(<ResetEmail {...props} />)
        component.setState({
            sent: false
        })
        component.instance().onSubmit({preventDefault() {} })
        expect(component.state()).toEqual({sent: false});
    });

    test('should call onChange', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { name: 'reset_email', value: 'barnabastb2@gmail.com' }
        };
        const component = shallow(<ResetEmail onChange={onChangeMock} />);
        component.instance().onChange(event)
        expect(component.state('reset_email')).toEqual('barnabastb2@gmail.com');
    });
});
