import React, { Component } from 'react';
import { shallow } from 'enzyme';
import ArticleComponent, { Article } from '../Article';
import { mapStateToProps } from '../Article'

const props = {
  articleReducer: {
    article: {},
  },
}

describe('Fetch Article', () => {
  const mockFetch = jest.fn();

  afterEach(() => {
    mockFetch.mock.calls = [];
  });
  it('should return article state', () => {
    const wrapper = shallow(
      <Article {...props}
        articleReducer={{}}
        match={{ params: { slug: 'asdfghjkl' } }}
        getSingleDataThunk={jest.fn()}
      />,
    );

    wrapper.setProps({
      articleReducer: {
        article: {
          body: "body",
        },
      },
    })
    expect(wrapper.instance().props.articleReducer).toEqual({
        article: {
          body: "body",
        },
    })
  });
  it('mapStateToProps should return the right value', () => {
    const mockedState = {
          title: "fahad",
    };
    const state = mapStateToProps(mockedState);

    expect(state.title).toEqual('fahad');
});
});
