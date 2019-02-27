import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import { getRating, updateRating } from './ratingActions';
import { EDIT_RATING, VIEW_RATING } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Testing rate an article', () => {
  it('dispatch action for getting a profile', () => {
    mockAxios.get(
      'https://ah-backend-guardians-staging.herokuapp.com/api/articles/hacking-de9fca080396/rating/'
    );
    store.dispatch(getRating());
    console.log(store.dispatch(getRating()));
    expect(store.getActions()).toEqual([]);
  });
  it('will dispatch an action for editing a rating', () => {
    mockAxios.put(
      'https://ah-backend-guardians-staging.herokuapp.com/api/articles/hacking-de9fca080396/rating/',
      { score: '5' },
      {
        Authorization: 'accessToken'
      }
    );
    store.dispatch(updateRating({ score: '5' })).then(() => {
      expect(store.getActions()).toEqual(
        expect.objectContaining([{ type: EDIT_RATING }])
      );
    });
  });
  it('will dispatch an error', () => {
    mockAxios.put(
      'https://ah-backend-guardians-staging.herokuapp.com/api/articles/hacking-de9fca080396/rating/',
      { score: '5' },
      {
        Authorization: 'accessToken'
      }
    );
    store.dispatch(updateRating({ score: '9' })).then(() => {
      console.log(store.getActions());

      expect(store.getActions()).toEqual(
        expect.objectContaining([
          { type: EDIT_RATING_FAILURE, error: error.response }
        ])
      );
    });
  });
});
