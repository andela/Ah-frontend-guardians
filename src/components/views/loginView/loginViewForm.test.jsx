import React from 'react';
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon';
import { shallow } from 'enzyme';
import {mapStateToProps, LoginView } from '../loginView/loginView';

let props = {
  errors: "",
  data: "",
  history: "",
  onChange: jest.fn(),
  onSubmit: jest.fn(),
};

describe(`LoginView`, () => {
  
  let wrapper;
  const mockLoginfn = jest.fn()
  const historyMock = { push: jest.fn() };

  beforeEach(() => {
      wrapper = shallow(<LoginView {...props} signinAction={mockLoginfn} history={historyMock} />)
  })
  it("Login form should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('When the form is submitted', () => {
      it('should call the mock sign up function', () => {
          wrapper.find('Form').dive().find('#login_form').simulate('submit',
              { preventDefault() { } }
          )
          expect(mockLoginfn.mock.calls.length).toBe(1);
      })
      it('should be called with the email and password in the state as arguments', () => {
          const simulator = (name, value) => (
              wrapper.find('Form').dive().find('#email').simulate(
                  'change',
                  {
                      target:
                          { name: name, value: value }
                  }
              )
          )

          simulator('email', 'guardians@gmail.com')
          simulator('password', 'vivian1234')
          wrapper.find('Form').dive().find('#login_form').simulate(
              'submit',
              { preventDefault() { } }
          )
          expect(mockLoginfn.mock.calls[0][0]).toEqual(
              {
                  email: 'guardians@gmail.com', password: 'vivian1234'
              },
          )
      })
    
      it('should will recieve error login props', () => {
        const newState = { errors: {data: "efgrt"}, data: "",value: ""} 
          wrapper.setProps(newState)
          
          expect(wrapper.state()).toEqual({"data": "","errors": "efgrt","value": "",})
      })

      it('should will recieve data login props', () => {
        const newState = { data: {data:"efgrt"}, "errors":"", "value":"",} 
          wrapper.setProps(newState)
          expect(wrapper.state()).toEqual({"errors": {},"data": {data: "efgrt"},"value": "",})
      })

      it( 'handles the state changes on the Login Form', () => {
        
        const emailField =  wrapper.find('Form').dive().find('#login_form')
        emailField.value = 'testuser@app.com';
        const event = { target: { name: 'testName', value: 'testValue' } };
        emailField.simulate( 'change', event );
        expect( emailField.value ).toEqual( 'testuser@app.com' );
      } );

  })
})

describe('tests for <LoginView> container', () => {
  it('call signup once', () => {
      const spy = sinon.spy(LoginView.prototype, 'componentWillReceiveProps');
      const wrapper = shallow(<LoginView error={{}} />);
      expect(spy).toHaveProperty('callCount', 0);
      wrapper.setProps({
          error:
          {
              error: {
                  username: "wrong id",
                  password: "",
                  email: "",
              }
          }
      });
      expect(spy).toHaveProperty('callCount', 1);
  })
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
        signin: {
        errors: {},
        data:'loggedIn'
      }
    };
    const state = mapStateToProps(mockedState);
    expect(state.data).toEqual('loggedIn');
  });
})
