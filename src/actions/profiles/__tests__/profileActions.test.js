import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import { getProfile, updateProfile } from '../profileActions';
import { UPDATE_PROFILE } from '../types';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Testing get profile', () => {
  it('dispatch action for getting a profile', () => {
    mockAxios.get('`http://localhost:8000/api/profiles/kayongo/`');
    
    store.dispatch(getProfile());
    expect(store.getActions()).toEqual([]);
  });
  it('dispatch action for editing a profile', () => {
    mockAxios.put(`http://localhost:8000/api/profiles/kayongo/edit/`, {first_name:"paul"}, {
      Authorization: 'accessToken'
    });
    store.dispatch(updateProfile({first_name:"paul"})).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining([
        {type: UPDATE_PROFILE,}
      ]));
    });
  });
});
