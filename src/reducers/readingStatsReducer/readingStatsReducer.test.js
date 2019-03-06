import * as types from '../../actions/readingStats/types';
import readingStatsReducer from './readingStatsReducer';

describe("reading stats reducer", () => {
    it("should return reading stats success action", () => {
      const action = {
        type: types.GET_READING_STATS_SUCCESS,
        payload: true
      };
      const newState = readingStatsReducer({}, action);

      expect(newState.readingStats).toEqual(true);
    });
});
