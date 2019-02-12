import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from '../reducers/mainReducer.js';


export default () => {
  const store = createStore(combineReducers, applyMiddleware(thunk));

  return store;
};
