import configureMockStore from "redux-mock-store";
import * as type from "./types";
import { getReadingStats } from "./readingStats";
import "babel-polyfill";
import thunk from "redux-thunk";
import mockAxios from "axios";

jest.mock('axios')

describe("Asynchronous get reading stats", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore();

  it("should dispatch success action get reading stats", async () => {
    const payload = { reading_stats: 'mine' };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: payload }));

    await store.dispatch(getReadingStats('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should dispatch error action to get reading stats", async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject({ response: '' }));

    await store.dispatch(getReadingStats('code'));

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

});
