import commentReducer from '../../commentDeleteReducers'
import COMMENTS from '../../../action/actionType/commentType';

const initialState = {
  errors: {},
  success: false,
  comments: [],
};

describe('Testing reducer', () => {
  it('Test success reducer', () => {
    const commentssuccess = COMMENTS.DELETE_COMMENT
    const action = {
      type: commentssuccess,
      data: { message: 'comment message', errors: '' },
    }
    const response = commentReducer(initialState, action);

    expect(response.success).toEqual(true);
  })
});