import configureMockStore from "redux-mock-store";
import { PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAILURE } from "./actionTypes";
import fetchResetPassword from "./resetNewPasswordAction";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";

jest.mock('axios');

describe('test reset email actions', () => {
    test('it should dispatch a sucess action', async () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore();
        const mockData = {password: 'Barna123', confirm_password: 'Barna123'}
        const payload = {data: 'Password changed successfully!'}

        mockAxios.put.mockImplementationOnce(() => Promise.resolve({data: payload}))

        const expectedActions = [{
            type: PASSWORD_CHANGE_SUCCESS,
            payload: payload
        }]

        await store.dispatch(fetchResetPassword(mockData));
        

        expect(store.getActions()).toEqual(expectedActions);
    });
});
