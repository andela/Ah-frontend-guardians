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
import readingStatsReducer from './readingStatsReducer/readingStatsReducer';
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
  likeArticleReducer,
  ratingsReducer,
  readingStatsReducer,
  commentsReducer:commentsReducer,
  updatecomments:updatecomments,
  commentDeleteReducers:commentDeleteReducers,
});
export default mainReducer;
