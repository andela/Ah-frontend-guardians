import  COMMENTS  from '../action/actionType/commentsType';

const initialState = {
  comments: [],
  success: false,
  data: {},
  errors: {},

};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS.POST_COMMENT:
      return {
        ...state,
        success: true,
        data: action.comments,
        errors: null,
      };
    case COMMENTS.COMMENTS_ERRORS:
      return {
        ...state,
        errors: action.error,
        success: false,
        data: null,
      };
    default:
      return state;
  }
};

export default comments;
