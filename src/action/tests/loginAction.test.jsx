import { LOGIN_FAIL, LOGIN_SUCCESS } from '../actionType/loginType/loginType'
import * as actions from "../actionCreator/login/loginCreator";
import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Login actions", () => {
  it("should handle USER_LOGGED_IN", () => {
    const signUpData = {
      user: {
        password: "Nabulo@2018",
        username: "nabulo",
      },
    };
        
    const expectedAction = {
      type: "LOGIN_SUCCESS",
      payload: signUpData,
    };
    
    actions.type = "LOGIN_SUCCESS";
    
    expect(
      actions.fetchLoginSuccess({
        user: { password: "Nabulo@2018", username: "nabulo" },
      })
    ).toEqual(expectedAction);
  });
});

describe('create signin failure', () => {
  it('should create an unsuccessful create user login action', () => {
      const error = { error: 'username doesnot exist' };
      const expectedAction = {
          type: LOGIN_FAIL,
          error: error,
      };
      
      expect(actions.fetchLoginFailure(error)).toEqual(expectedAction)
  })
})

describe("login thunk actions", () => {
  let mockAdapter = new MockAdapter(axios);
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  const store = mockStore({ data: {} });

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should LOGIN_SUCCESFULLY", () => {
    moxios.stubRequest('https://ah-backend-guardians-staging.herokuapp.com/api/users/login/', {
      status: 200,
      responseText: {
        user: {
          token: "123456trgeqgaf",
        },
      },
    });

    const expectedActions = [
      {
        type: LOGIN_SUCCESS,
        signUpData: {
          user: {
            token: "123456trgeqgaf",
          },
        },
      },
    ];

    store
      .dispatch(
        actions.signinAction(
          {
            username: "nabulo",
            password: "password",
            email: "nabulo@gmail.com",  
          },
          'https://ah-backend-guardians-staging.herokuapp.com/api/users/login/'
        )
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("should handle LOGIN_FAILURE", () => {
    moxios.stubRequest('https://ah-backend-guardians-staging.herokuapp.com/api/users/login/', {
      status: 400,
      responseText: {
        error: {
          token: "123456trgeqgaf",
        },
      },
    });

    const expectedActions = [
      {
        type: LOGIN_FAIL,
        payload: {
          user: {
            token: "123456trgeqgaf"
          }
        }
      }
    ];
    store
      .dispatch(
        actions.signinAction(
          {
            username: "nabulo",
            password: "password",
            email: "nabulodoreen@gmail.com",
          },
          'https://ah-backend-guardians-staging.herokuapp.com/api/users/login/'
        )
      ).then(() => {      
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
