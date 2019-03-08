import  COMMENTS  from '../action/actionType/commentType';

const initialState = {
  comments: [],
  success: false,
  data: {},
  errors: {},

};

const updatecomments = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS.UPDATE_COMMENT:
      return {
        ...state,
        success: true,
        data: action.comments,
        errors: null,
      };
    case COMMENTS.UPDATE_COMMENTS_ERRORS:
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

export default updatecomments;