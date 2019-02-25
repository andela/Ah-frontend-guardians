
import * as type from '../../actions/signup/actionTypes';


const initialState = {
    success: null,
    error: null,
    message: null
};

export default function signupReducer(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_SIGNUP_SUCCESS:
            return {
                ...state,
                message: action.message,
                success: true,
                error: ''
            };
        case type.FETCH_SIGNUP_FAILURE:
            return {
                ...state,
                error: action.error,
                success: false,
                message: null,
            };

        default:
            return state;
    }
}