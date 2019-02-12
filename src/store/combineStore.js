import { createStore } from 'redux';
import rootReducer from '../reducers/mainReducer.js';

const store = createStore(rootReducer);

export default store;
