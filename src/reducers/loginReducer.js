import { LOGIN_FAIL, LOGIN_SUCCESS } from '../action/actionType/loginType/loginType';

const initState = {
  success: false,
  data: {},
  errors: {},
};

function loginReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
        errors: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errors: action.error,
        success: false,
        data: null,
      };
    default:
      return state;
  }
}

export default loginReducer;
