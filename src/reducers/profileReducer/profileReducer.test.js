import profileReducer from './profileReducer';
const initialState = {
  profile: {}
};

describe('get a profile success', () => {
  it('should be able to get an article', () => {
    const profile = {};

    const action = {
      type: 'VIEW_PROFILE',
      payload: {}
    };
    const newState = profileReducer(initialState, action);
    expect(newState.profile).toEqual(profile);
  });

  it('should be able to edit an article', () => {
    const profile = {};

    const action = {
      type: 'UPDATE_PROFILE',
      payload: {}
    };
    const newState = profileReducer(initialState, action);
    expect(newState.profile).toEqual(profile);
  });
  it('should return the default state', () => {
    const newState = profileReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
