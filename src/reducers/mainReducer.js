import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
import navBarReducer from './navBarReducer';
import signupReducer from './signup/signUpReducer'

const mainReducer = combineReducers({
  signin: loginReducer,
  navBarReducer,
  signup: signupReducer,
});

export default mainReducer;
