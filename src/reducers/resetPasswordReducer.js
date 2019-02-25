import { PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAILURE } from '../actions/resetPassword/actionTypes';

const INITIAL_STATE = {
    reset: false,
    payload: ''
}

export const resetPasswordReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case PASSWORD_CHANGE_SUCCESS:
            return {
                ...state,
                reset: true,
                payload: action.payload
            }
        case PASSWORD_CHANGE_FAILURE:
            return {
                ...state,
                reset: false,
                payload: action.payload
            }
        default:
            return state
    }
}