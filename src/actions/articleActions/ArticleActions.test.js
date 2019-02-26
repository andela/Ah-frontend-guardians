import configureMockStore from "redux-mock-store";
import * as type from "./types";
import { deleteArticle, editArticle, myArticles } from "./ArticleActions";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";

jest.mock('axios')

describe("Asynchronous get my articles", () => {
  it("should dispatch success action", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const articles = { results: [{ title: "title 1" }, { titlt: "title 2" }] };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: articles }));

    const expectedActions = [
      { type: type.MY_ARTICLES_SUCCESS, payload: articles }
    ];

    await store.dispatch(myArticles());

    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should dispatch error action", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const message = { articles: { message: "my articles" } };

    mockAxios.get.mockImplementationOnce(() => Promise.reject({ response: message }));

    await store.dispatch(myArticles());
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

describe("Asynchronous delete my article", () => {
  it("should dispatch success action", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const message = { articles: { message: "Article is deleted" } };
    const slug = "code";

    mockAxios.delete.mockImplementationOnce(() => Promise.resolve({ data: message }));

    const expectedActions = [
      { type: type.DELETE_ARTICLE_SUCCESS, payload: message, slug }
    ];

    await store.dispatch(deleteArticle(slug));

    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  });

  it("should dispatch error action", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const message = { articles: { message: "Article is deleted" } };
    const slug = "code";

    mockAxios.delete.mockImplementationOnce(() => Promise.reject({ response: message }));

    await store.dispatch(deleteArticle(slug));
    expect(mockAxios.delete).toHaveBeenCalledTimes(1);
  });
});

describe("Asynchronous edit my article", () => {
  it("should dispatch success action", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const mockData = { article: { title: "title1" } };
    const article = { message: "Article is editted" };
    const slug = "code";

    mockAxios.put.mockImplementationOnce(() => Promise.resolve({ data: article }));

    const expectedActions = [
      { type: type.EDIT_ARTICLE_SUCCESS, payload: article, slug }
    ];

    await store.dispatch(editArticle(slug, mockData));

    expect(store.getActions()).toEqual(expectedActions);
    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });
});

describe("Asynchronous edit my article", () => {
  it("should dispatch error action", async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const mockData = { article: { title: "title1", descritpion: "Description" } };
    const response = { data: { errors: { description: "description", title: "title" } } };
    const slug = "code";

    mockAxios.put.mockImplementationOnce(() => Promise.reject({ response }));

    await store.dispatch(editArticle(slug, mockData));
    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });
});
