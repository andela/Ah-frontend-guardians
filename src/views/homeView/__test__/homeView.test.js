import React from 'react';
import { shallow } from 'enzyme';
import { HomeView, mapDispatchToProps, mapStateToProps } from '../homeView';

let wrapper;

const historyMock = {
  push: jest.fn()
};

const history = {
    push: jest.fn()
  };
const handleClick = jest.fn();
const props = {
  handleClick,
  historyMock,
  signin: {
      success: true
  },
  history
};

describe('HomeView', () => {
  it('should render without crashing', () => {
    wrapper = shallow(<HomeView />);
    expect(wrapper.find('#textOverlay').length).toEqual(1);
  });
  it('should push on click', () => {
    wrapper = shallow(<HomeView {...props} />);
    wrapper.find('#createArticleButton').simulate('click', { preventDefault() {} });
    expect(handleClick).toHaveBeenCalled;
  });
  it('should map states to props', () => {
    const mockedState = {
        articlesState: {},
        signin: true
    }
    const state = mapStateToProps(mockedState);

    expect(state.signin).toEqual(true);
  });
});
