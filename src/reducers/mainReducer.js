import { combineReducers } from 'redux';
import articleReducer from './articleReducers/articleReducer';
import loginReducer from "./loginReducer";
import navBarReducer from './navBarReducer';
import signupReducer from './signup/signUpReducer'
import socialReducer from './socialReducer/socialReducer';

const InitialState = {
  start: false
};

export function startReducer (state = InitialState) {

  return state;

}

const mainReducer = combineReducers({
  signin: loginReducer,
  navBarReducer,
  signup: signupReducer,
  articleReducer,
  social: socialReducer
});

export default mainReducer;
