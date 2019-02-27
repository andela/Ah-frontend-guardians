import {
  ARTICLE_DISLIKE_STATUS,
  ARTICLE_LIKE_STATUS,
  DISLIKE_ARTICLE_SUCCESS,
  LIKE_ARTICLE_SUCCESS,
  ARTICLE_LIKE_COUNT
} from '../../actions/likeArticle/types';

export default function(state = {}, action) {
  switch (action.type) {
    case LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        articleLike: (state.articleLike === true) ? false: true,
        articleLikeCount: (state.articleLike === true) ? state.articleLikeCount -1: state.articleLikeCount + 1,
        articleDislikeCount: (state.articleDislike === true) ? state.articleDislikeCount -1: state.articleDislikeCount,         
        articleDislike: false
      };
    case DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        articleDislike: (state.articleDislike === true) ? false: true,
        articleDislikeCount: (state.articleDislike === true) ? state.articleDislikeCount -1: state.articleDislikeCount + 1,
        articleLikeCount: (state.articleLike === true) ? state.articleLikeCount -1: state.articleLikeCount,         
        articleLike: false
      };
    case ARTICLE_LIKE_STATUS:
      return {
        ...state,
        articleLike: action.payload
      };
    case ARTICLE_DISLIKE_STATUS:
      return {
        ...state,
        articleDislike: action.payload
      };
    case ARTICLE_LIKE_COUNT:
      return {
        ...state,
        articleDislikeCount: action.dislikeCount,
        articleLikeCount: action.likeCount,
      }
    default:
      return state;
  }
}
