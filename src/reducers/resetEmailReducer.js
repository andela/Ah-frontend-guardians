import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from '../actions/resetPassword/actionTypes';

const INITIAL_STATE = {
    sent: false
}

export const resetEmailReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                sent: true
            }
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                sent: false
            }
        default:
            return state
    }
}
