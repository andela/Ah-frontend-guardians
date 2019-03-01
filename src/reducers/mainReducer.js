import { combineReducers } from 'redux';
import articleReducer from './articleReducers/articleReducer';
import loginReducer from './loginReducer';
import { bookmarkReducer, createBookmarkReducer } from './bookmark/bookmarkReducer'
import navBarReducer from './navBarReducer';
import signupReducer from './signup/signUpReducer'
import socialReducer from './socialReducer/socialReducer';
import profileReducer from './profileReducer/profileReducer'
import errorReducer from "./ErrorReducer";
import { resetEmailReducer } from './resetEmailReducer';
import { resetPasswordReducer } from './resetPasswordReducer';
import commentsReducer from './commentsReducer'
import getcomments from './commentGetReducers'
import updatecomments from '../reducers/commentsUpdateReducers'
import commentDeleteReducers from '../reducers/commentDeleteReducers'

const mainReducer = combineReducers({
  signin: loginReducer,
  navBarReducer,
  signup: signupReducer,
  articleReducer,
  getarticlecomments: getcomments,
  social: socialReducer,
  profileReducer,
  errorReducer,
  resetEmailReducer,
  resetPasswordReducer,
  bookmark: bookmarkReducer,
  bookmarks: createBookmarkReducer,
  commentsReducer:commentsReducer,
  updatecomments:updatecomments,
  commentDeleteReducers:commentDeleteReducers
});

export default mainReducer;
