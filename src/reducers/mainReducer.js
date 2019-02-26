import { combineReducers } from 'redux';
import articleReducer from './articleReducers/articleReducer';
import loginReducer from "./loginReducer";
import navBarReducer from './navBarReducer';
import signupReducer from './signup/signUpReducer';

const mainReducer = combineReducers({
  signin: loginReducer,
  navBarReducer,
  signup: signupReducer,
  articleReducer,
});

export default mainReducer;
