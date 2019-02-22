import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
import navBarReducer from './navBarReducer';

const InitialState = {
  start: false,
};

function startReducer(state = InitialState) {
  return state;
}

const mainReducer = combineReducers({
  start: startReducer,
  signin: loginReducer,
  navBarReducer
});

export default mainReducer;
