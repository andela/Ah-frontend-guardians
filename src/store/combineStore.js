import { applyMiddleware, createStore } from 'redux';
import mainReducer from '../reducers/mainReducer.js';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const initialState = {};

// const store = createStore(
//     mainReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware)),
//     );

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;