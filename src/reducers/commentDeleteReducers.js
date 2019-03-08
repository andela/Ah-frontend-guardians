import  COMMENTS  from '../action/actionType/commentType';

const initialState = {
  comments: [],
  success: false,
  data: {},
  errors: {},
};

const deleteComment = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS.DELETE_COMMENT:
      return {
        ...state,
        success: true,
        data: action.comments,
        errors: null,
      };
    default:
      return state;
  }
};

export default deleteComment;