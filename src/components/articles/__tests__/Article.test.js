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
  let wrapper;

  const mockFetch = jest.fn();

  afterEach(() => {
    mockFetch.mock.calls = [];
  });
  it('should render without crushing', () => {
    const wrapper = shallow(<Article {...props}/>)

    expect(wrapper.find('h3').length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render without crashing', () => {
    const wrapper = shallow(<Article />)

    expect(wrapper).toMatchSnapshot()
  })
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
