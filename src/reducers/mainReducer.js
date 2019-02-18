import { combineReducers } from 'redux';
import navBarReducer from './navBarReducer';

const InitialState = {
  start: false,
};

function startReducer(state = InitialState) {
  return state;
}

const mainReducer = combineReducers({
  start: startReducer,
  navBarReducer
});

export default mainReducer;
