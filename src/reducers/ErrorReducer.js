import { ERROR_OCCURRED } from '../actions/ArticleActionCreator';

const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_OCCURRED:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
export default errorReducer;
