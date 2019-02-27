import React from 'react';
import { EditRatingsView } from './EditRatingsView';
import { shallow, mount } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe('EditRatingsView', () => {
  let wrapper;
  const mockEditRatingfn = jest.fn();
  const mockgetRatingfn = jest.fn();
  const historyMock = { push: jest.fn() };

  afterEach(() => {
    mockEditRatingfn.mock.calls = [];
  });
  describe('When form is submitted', () => {
    wrapper = shallow(
      <EditRatingsView
        updateRating={mockEditRatingfn}
        getRating={mockgetRatingfn}
        history={historyMock}
      />
    );
    it('Should change the score', () => {
      wrapper.find('#star-rating').simulate('onStarClick', {
        target: { score: '5' }
      });
      expect(mockEditRatingfn.mock.calls.length).toBe(0);
    });
  });
});
