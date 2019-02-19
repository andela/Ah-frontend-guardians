import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
import navBarReducer from './navBarReducer';
import signupReducer from './signup/signUpReducer'
import articleReducer from "./ArticleReducer";
import errorReducer from "./ErrorReducer";
import comments from './commentsReducer'
import getcomments from './commentGetReducers'

const mainReducer = combineReducers({
  signin: loginReducer,
  commentarticle: comments,
  getarticlecomments: getcomments,
  navBarReducer,
  signup: signupReducer,
  articleReducer,
  errorReducer,
});

export default mainReducer;
