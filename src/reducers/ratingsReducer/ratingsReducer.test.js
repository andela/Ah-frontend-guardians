import ratingsReducer from './ratingsReducer';
const initialState = {
  rating: {}
};

describe(`rate an article`, () => {
  it('should be able to rate an article', () => {
    const rating = {};

    const action = {
      type: 'EDIT_RATING',
      payload: {}
    };
    const newState = ratingsReducer(initialState, action);
    expect(newState.rating).toEqual(rating);
  });
  it('should be able to edit a rating', () => {
    const rating = {};
    const action = {
      type: 'VIEW_RATING',
      payload: {}
    };
    const newState = ratingsReducer(initialState, action);
    expect(newState.rating).toEqual(rating);
  });
  it('should fail to rate an article', () => {
    const rating = {};
    const action = {
      type: 'EDIT_RATING_FAILURE',
      payload: {}
    };
    const newState = ratingsReducer(initialState, action);
    expect(newState.rating).toEqual(rating);
  });
  it('should return the default state', () => {
    const newState = ratingsReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
