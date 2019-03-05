import {
  DELETE_ARTICLE_SUCCESS,
  EDIT_ARTICLE_SUCCESS,
  MY_ARTICLES_SUCCESS,
  SEARCH_ARTICLE
} from '../../actions/articleActions/types';
import { CREATE_ARTICLE, GET_ALL_ARTICLES, GET_ARTICLE } from '../../actions/ArticleActionCreator';

const initialState = {
  my_articles: [],
  delete_article: {},
  edit_article: {},
  searchArticles:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MY_ARTICLES_SUCCESS:
      return {
        ...state,
        my_articles: action.payload.articles.results
      };
    case DELETE_ARTICLE_SUCCESS:
      const new_articles = state.my_articles.filter(article => article.slug !== action.slug);

      return {
        ...state,
        my_articles: new_articles,
        delete_article: action.payload
      };
    case EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        edit_article: action.payload
      };
    case CREATE_ARTICLE:
      return Object.assign({}, state, {
        articles: [...state.articles, action.articles],
        article: action.article.articles
      });

    case GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.articles.results,
        previous: action.articles.previous,
        next: action.articles.next,
      };
      case SEARCH_ARTICLE:
      return {
        ...state,
        searchArticles: action.payload
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: action.article
      };
    default:
      return state;
  }
}
