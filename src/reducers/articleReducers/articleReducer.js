import {
  DELETE_ARTICLE_SUCCESS,
  MY_ARTICLES_SUCCESS,
  EDIT_ARTICLE_SUCCESS
} from "../../actions/articleActions/types";

const initialState = {
  my_articles: [],
  delete_article: {},
  edit_article: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MY_ARTICLES_SUCCESS:
      return {
        ...state,
        my_articles: action.payload.articles.results
      };
    case DELETE_ARTICLE_SUCCESS:
      const new_articles = state.my_articles.filter(article => {
        return article.slug !== action.slug;
      });
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
    default:
      return state;
  }
}
