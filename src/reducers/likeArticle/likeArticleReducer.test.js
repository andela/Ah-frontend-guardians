import * as types from '../../actions/likeArticle/types';
import likeArticleReducer from './likeArticleReducer';

describe("create like and unlike articles success", () => {
    it("should return like success action", () => {
      const like = true;
      const action = {
        type: types.LIKE_ARTICLE_SUCCESS,
      };
      const newState = likeArticleReducer({}, action);

      expect(newState.articleLike).toEqual(like);
    });
});

describe("create dislike and undislike articles success", () => {
    it("should return dislike success action", () => {
      const dislike = true;
      const payload = { message: "disliked" };
      const action = {
        type: types.DISLIKE_ARTICLE_SUCCESS,
        payload
      };
      const newState = likeArticleReducer({}, action);

      expect(newState.articleDislike).toEqual(dislike);
    });
    it("should return dislike success action when formally liked", () => {
        const dislike = true;
        const state = { articleLike: true }
        const action = {
          type: types.DISLIKE_ARTICLE_SUCCESS,
        };
        const newState = likeArticleReducer(state, action);

        expect(newState.articleDislike).toEqual(dislike);
        expect(newState.articleLike).toEqual(false);
      });
});

describe("the like status of an article", () => {
    it("should change the state of the like status tot true", () => {
        const action = {
            type: types.ARTICLE_LIKE_STATUS,
            payload: true
        };
        const newState = likeArticleReducer({}, action);

        expect(newState.articleLike).toEqual(true);
    });

    it("should change the state of the dislike status to false", () => {
        const action = {
            type: types.ARTICLE_DISLIKE_STATUS,
            payload: true
        };
        const newState = likeArticleReducer({}, action);

        expect(newState.articleDislike).toEqual(true);
        });
    });

    it("shhould return the like and dislike count", () => {
      const action = {
        type: types.ARTICLE_LIKE_COUNT,
        likeCount: 3,
        dislikeCount: 1
      };
    const newState = likeArticleReducer({}, action);

    expect(newState.articleLikeCount).toEqual(3);
    expect(newState.articleDislikeCount).toEqual(1);
    });

it("should return the default state", () => {
    const newState = likeArticleReducer({}, {});

    expect(newState).toEqual({});
});
