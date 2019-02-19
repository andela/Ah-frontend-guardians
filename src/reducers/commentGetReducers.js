import  COMMENTS  from '../action/actionType/commentsType';

const initialState = {
  comments: [],
  success: false,
  data: [],
  errors: {},

};

const getComments = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS.GET_COMMENT:
    // console.log('reeeeeeeeeducer')
      return {
        ...state,
        success: true,
        data: action.data,
        errors: null,
      };
    case COMMENTS.GET_COMMENTS_ERRORS:
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

export default getComments;
