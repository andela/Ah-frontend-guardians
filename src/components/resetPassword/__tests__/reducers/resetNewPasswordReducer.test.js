import { resetPasswordReducer } from '../../../../reducers/resetPasswordReducer';
import { PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAILURE } from '../../../../actions/resetPassword/actionTypes';
import rootReducer from '../../../../reducers/mainReducer';

const INITIAL_STATE = {
    reset: false,
    payload: ''
};

describe('Test reset email reducer', () => {
    test('it returns false by default', () => {
        expect(resetPasswordReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('test for success', () => {
        expect(resetPasswordReducer(INITIAL_STATE, {type: PASSWORD_CHANGE_SUCCESS})).toEqual({
            reset: true
        });
    });

    test('test for failure', () => {
        expect(resetPasswordReducer(INITIAL_STATE, {type: PASSWORD_CHANGE_FAILURE})).toEqual({
            reset: false
        });
    });
});
