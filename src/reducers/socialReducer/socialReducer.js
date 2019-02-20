import actionTypes from '../../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  facebookLogin: false,
  googleLogin: false,
  payload: '',
  token: ''
};

const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        googleLogin: true,
        token: action.payload.user.token,
        payload: action.payload
      };
    case actionTypes.GOOGLE_FAIL:
      return {
        ...state,
        payload: action.payload
      };
    case actionTypes.FACEBOOK_FAIL:
      return {
        ...state,
        payload: action.payload
      };
    case actionTypes.FACEBOOK_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        facebookLogin: true,
        token: action.payload.user.token,
        payload: action.payload
      };
    default:
      return state;
  }
};

export default socialReducer;
