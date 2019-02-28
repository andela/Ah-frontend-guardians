import React from 'react';
import { shallow, mount } from 'enzyme';
import { ResetPassword } from '../../resetPassword';
import { mapStateToProps } from '../../resetPassword';
import { ResetEmail } from '../../resetEmail';

describe('Reset Email Test', () => {
    const wrapper = shallow(<ResetPassword />)
    
    const mockfetchResetPasswordfn = jest.fn()

    const props ={
        fetchResetPassword: mockfetchResetPasswordfn,
        message: 'Password Reset',
        match:{params:{slug: ''}},
        newPassword:{value:''}
    }

    test('renders the component without crashing', () => {

        expect(wrapper).toMatchSnapshot()
    });

    test("should map states to props", () => {
        const mockedState = {
            resetPasswordReducer: {sent: false, payload: ''}
        }
        const state = mapStateToProps(mockedState);
        expect(state).toEqual({sent: false, payload: ''});
    });

    test('should render without crashing', () => {
        const component = mount(<ResetPassword/>)
        expect(component.find('.reset-email').length).toEqual(1);
    });

    test('It should sunmit', () =>{
        const component = shallow(<ResetPassword {...props} />)
        component.setState({
            reset: false,
            payload: ''
        })
        component.instance().onSubmit({preventDefault() {} })
        expect(component.state()).toEqual({"payload": "", "reset": false});
    });

    test('should call onChange', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { name: 'new_password', value: 'barnabastb2@gmail.com' }
        };
        const component = shallow(<ResetPassword onChange={onChangeMock} />);
        component.instance().onChange(event)
        expect(component.state('new_password')).toEqual('barnabastb2@gmail.com');
    });

    test('should call onChange2', () => {
        const onChangeMock = jest.fn();
        const event = {
          target: { name: 'confirm_password', value: 'barnabastb2@gmail.com' }
        };
        const component = shallow(<ResetPassword onChange={onChangeMock} />);
        component.instance().onChange(event)
        expect(component.state('confirm_password')).toEqual('barnabastb2@gmail.com');
    });
});
