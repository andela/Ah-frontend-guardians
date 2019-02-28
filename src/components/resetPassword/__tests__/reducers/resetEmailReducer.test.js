import { resetEmailReducer } from '../../../../reducers/resetEmailReducer';
import { RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE } from '../../../../actions/resetPassword/actionTypes';
import rootReducer from '../../../../reducers/mainReducer';

const INITIAL_STATE = {
    sent: false
};

describe('Test reset email reducer', () => {
    test('it returns false by default', () => {
        expect(resetEmailReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('test for success', () => {
        expect(resetEmailReducer(INITIAL_STATE, {type: RESET_PASSWORD_SUCCESS})).toEqual({
            sent: true
        });
    });

    test('test for failure', () => {
        expect(resetEmailReducer(INITIAL_STATE, {type: RESET_PASSWORD_FAILURE})).toEqual({
            sent: false
        });
    });
});
