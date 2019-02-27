import { combineReducers } from 'redux';
import articleReducer from './articleReducers/articleReducer';
import loginReducer from './loginReducer';
import { bookmarkReducer, createBookmarkReducer } from './bookmark/bookmarkReducer'
import likeArticleReducer from './likeArticle/likeArticleReducer';
import navBarReducer from './navBarReducer';
import signupReducer from './signup/signUpReducer'
import socialReducer from './socialReducer/socialReducer';
import profileReducer from './profileReducer/profileReducer'
import errorReducer from "./ErrorReducer";
import { resetEmailReducer } from './resetEmailReducer';
import { resetPasswordReducer } from './resetPasswordReducer';
import ratingsReducer from './ratingsReducer/ratingsReducer';



const mainReducer = combineReducers({
  signin: loginReducer,
  navBarReducer,
  signup: signupReducer,
  articleReducer,
  social: socialReducer,
  profileReducer,
  errorReducer,
  resetEmailReducer,
  resetPasswordReducer,
  bookmark: bookmarkReducer,
  bookmarks: createBookmarkReducer,
  likeArticleReducer,
  ratingsReducer
});
export default mainReducer;
