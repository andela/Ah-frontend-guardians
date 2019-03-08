import { applyMiddleware, createStore } from 'redux';
import mainReducer from '../reducers/mainReducer.js';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getDataThunk } from '../actions/ArticleActionCreator';
import { getAllArticles } from '../actions/ArticleActionCreator';

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(getDataThunk('articles', getAllArticles));

export default store;
