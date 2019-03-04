import {
  EDIT_RATING,
  VIEW_RATING,
  EDIT_RATING_FAILURE
} from '../../actions/ratings/types';

const initialState = {
  rating: {},
  error: null
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_RATING:
      return {
        ...state,
        rating: action.payload,
        success: true
      };

    case EDIT_RATING:
      return {
        ...state,
        rating: action.payload,
        success: true
      };
    case EDIT_RATING_FAILURE:
      return {
        ...state,
        error: action.error,
        success: false
      };
    default:
      return state;
  }
};

export default ratingsReducer;
