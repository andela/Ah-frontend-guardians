import {
  GET_ALL_ARTICLES,
  CREATE_ARTICLE,
  GET_ARTICLE
} from '../actions/ArticleActionCreator';

const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return Object.assign({}, state, {
        articles: [...state.articles, action.articles],
        article: action.article.articles
      });
    case GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.articles
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: action.article
      };
    default:
      return state;
  }
};
export default articleReducer;
