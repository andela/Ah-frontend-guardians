import * as type from './actionTypes';
import configureMockStore from 'redux-mock-store'
import mockAxios from 'axios'
import thunk from 'redux-thunk'
import { fetchSignUp } from './signUpAction';
import 'babel-polyfill';

jest.mock('axios')
describe('Asynchronous Sign Up function', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const mockData = { username: 'makawe', password: 'Masderf34e5', email: 'liom@qwert.com' }
        const message = { 'message': "Go to your email to verify " }


        mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: message.message }))

        const expectedActions = [
            { type: type.FETCH_SIGNUP_SUCCESS, message: message.message },
        ]

        await store.dispatch(fetchSignUp(mockData))

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()
        const mockData = { username: '', password: 'Masderf34e5', email: 'liom@qwert.com' }
        const error = { 'errors': "Username exists" }

        mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: "Username exists" }))

        const expectedActions = [
            { type: type.FETCH_SIGNUP_FAILURE, error: error.errors },
        ]

        await store.dispatch(fetchSignUp(mockData))

        expect(store.getActions()).toEqual(expectedActions)
    })
})
