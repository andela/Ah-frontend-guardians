import configureMockStore from "redux-mock-store";
import * as type from "./types";
import {
 dislikeArticle, getDislikeStatus, getLikeStatus, likeArticle, getLikeCount
} from "./likeArticleAction";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";

jest.mock('axios')

describe("Asynchronous like an article", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  it("should dispatch success action to like article", async () => {
    const message = "liked"

    mockAxios.put.mockImplementationOnce(() => Promise.resolve({ data: message }));

    await store.dispatch(likeArticle('code'));

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });
  it("should dispatch ERROR action to like article", async () => {
    const message = { status: 403 };

    mockAxios.put.mockImplementationOnce(() => Promise.reject({ response: message }));

    await store.dispatch(likeArticle('code'));

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });
});

describe("Asynchronous dislike an article", () => {
  it("should dispatch success action to unlike article", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const message = "unliked"

    mockAxios.put.mockImplementationOnce(() => Promise.resolve({ data: message }));

    const expectedActions = [
      { type: type.DISLIKE_ARTICLE_SUCCESS, payload: message }
    ];

    await store.dispatch(dislikeArticle());

    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });
  it("should dispatch ERROR action to dislike article", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const message = "liked"

    mockAxios.put.mockImplementationOnce(() => Promise.reject({ response: message }));

    await store.dispatch(dislikeArticle());

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });
});

describe("Like Article Action", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();
  const message = { article_status: { article_like: true } }

  it("should get the like status of an article", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: message }));

    await store.dispatch(getLikeStatus('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should get the dislike status of an article", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: message }));

    await store.dispatch(getDislikeStatus('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should reject the like status of an article", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject({ response: message }));

    await store.dispatch(getLikeStatus('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should reject the dislike status of an article", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ response: message }));

    await store.dispatch(getDislikeStatus('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

describe("Asynchronous like and dislike article count", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  it("should dispatch the count of likes and dislikes of ana article", async () => {
    const data = {
      likeCount: 2,
      dislikeCount: 3
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: data }));

    await store.dispatch(getLikeCount('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
  it("should dispatch ERROR action to like article count", async () => {
    const message = { status: 403 };

    mockAxios.get.mockImplementationOnce(() => Promise.reject({ response: message }));

    await store.dispatch(getLikeCount('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
