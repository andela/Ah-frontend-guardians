import signupReducer from './signUpReducer';

const initialState = {
    success: null,
    error: null,
    message: null
};

describe('create signup success', () => {
    it('should create a success rsponse message when  passed FETCH_SIGNUP_SUCCESS', () => {
        const successMessage = 'Go to email to verify account';
        const action = {
            type: "FETCH_SIGNUP_SUCCESS",
            message: "Go to email to verify account",
        };
        const newState = signupReducer(initialState, action)
        expect(newState.message).toEqual(successMessage)
    })
    it('should return error when  passed FETCH_SIGNUP_FAILURE', () => {
        const errorMessage = { error: 'user name already exists' };
        const action = {
            type: "FETCH_SIGNUP_FAILURE",
            error: "user name already exists",
        };
        const newState = signupReducer(initialState, action)
        expect(newState.error).toEqual(errorMessage.error)
        expect(newState.success).toBe(false)
    })
    it('should remain intial state if no action is passed', () => {
        expect(signupReducer(undefined, {})).toEqual(initialState)
    })

})
