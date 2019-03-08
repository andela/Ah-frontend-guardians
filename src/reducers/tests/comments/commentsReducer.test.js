import commentReducer from '../../commentsReducer'
import COMMENTS from '../../../action/actionType/commentType';

const initialState = {
  errors: {},
  success: false,
  comments: [],
};

describe('Testing reducer', () => {
  it('Test success reducer', () => {
    const commentssuccess = COMMENTS.POST_COMMENT
    const action = {
      type: commentssuccess,
      data: { message: 'comment message', errors: '' },
    }
    const response = commentReducer(initialState, action);

    expect(response.success).toEqual(true);
  })

  it('Test failure reducer', () => {
    const commentsfailure = COMMENTS.COMMENTS_ERRORS
    const action = {
      type: commentsfailure,
      data: { message: 'comment message', errors: '' },
    }
    const response = commentReducer(initialState, action);

    expect(response.success).toEqual(false);
  })
});