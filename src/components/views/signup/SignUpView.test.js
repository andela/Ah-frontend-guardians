import React from 'react';
import { shallow } from 'enzyme';
import { SignUpView } from './SignUpView';
import sinon from 'sinon';
import { mapStateToProps } from '../signup/SignUpView'

describe(`SignUpView`, () => {
    let wrapper;
    const mockSignUpfn = jest.fn()
    const historyMock = { push: jest.fn() };

    beforeEach(() => {
        wrapper = shallow(<SignUpView fetchSignUp={mockSignUpfn} history={historyMock} />)
    })
    afterEach(() => {
        mockSignUpfn.mock.calls = []
    })
    describe('When the form is submitted', () => {
        it('should be called with the email, username and password in the state as arguments', () => {
            const simulator = (name, value) => (
                wrapper.find('SignUpForm').dive().find('#email').simulate(
                    'change',
                    {
                        target:
                            { name, value },
                    },
                )
            );

            simulator('email', 'fahad@gmail.com')
            simulator('password', 'Maka1234')
            simulator('username', 'Maka1234')
            wrapper.find('SignUpForm').dive().find('#login_form').simulate(
                'submit',
                { preventDefault() { } },
            )
            expect(mockSignUpfn.mock.calls[0][0]).toEqual(
                {
                    email: 'fahad@gmail.com', password: 'Maka1234', username: 'Maka1234',
                },
            )
        });
        it('should will recieve signup props', () => {
            wrapper.setProps({ message: 'your welcome' })
            expect(wrapper.state('message')).toEqual('your welcome')
        });
    })
});

describe('tests for <SignUpView> container', () => {
    it('call signup once', () => {
        const spy = sinon.spy(SignUpView.prototype, 'componentWillReceiveProps');
        const wrapper = shallow(<SignUpView error={{
            error: {
                username: "",
                password: "",
                email: "",
            }
        }} />);
        expect(spy).toHaveProperty('callCount', 0);
        wrapper.setProps({
            error:
            {
                error: {
                    username: "wrong id",
                    password: "",
                    email: "",

                },
            },
        });
        expect(spy).toHaveProperty('callCount', 1);
    })
    it('mapStateToProps should return the right value', () => {
        const mockedState = {
            signup: {
                errors: {},
                message: 'loggedIn',
            },
        };
        const state = mapStateToProps(mockedState);
        expect(state.message).toEqual('loggedIn');
    });
})
