import configureMockStore from "redux-mock-store";
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from "./actionTypes";
import fetchResetEmail from "./resetPasswordAction";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";

jest.mock('axios');

describe('test reset email actions', () => {
    test('it should dispatch a sucess action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const mockData = {email: 'barnabastb2@gmail.com'}
        const message = {data: 'Email has been sent to this email address!'}

        mockAxios.post.mockImplementationOnce(() => Promise.resolve({data: message}))

        const expectedActions = [{
            type: RESET_PASSWORD_SUCCESS,
            message: message
        }]

        await store.dispatch(fetchResetEmail(mockData));
        

        expect(store.getActions()).toEqual(expectedActions);
    });

    test('it should dispatch a failure action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const message = { data: {errors: 'No user with this email address was found!'}}

        mockAxios.post.mockImplementationOnce(() => Promise.reject({response: message}))

        const expectedActions = [{
            type: RESET_PASSWORD_FAILURE,
            message: message
        }]

        await store.dispatch(fetchResetEmail());

        expect(store.getActions()).toEqual([]);
    });
});
