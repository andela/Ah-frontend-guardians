import React from 'react';
import { shallow } from 'enzyme';
import { LikeArticle } from './LikeArticle';


const getLikeStatus = jest.fn();
const getDislikeStatus = jest.fn();
const likeArticle = jest.fn();
const dislikeArticle = jest.fn();
const getLikeCount = jest.fn();

const props = {
    getLikeStatus,
    getDislikeStatus,
    likeArticle,
    dislikeArticle,
    getLikeCount,
    articleLike: true,
    articleDislike: false
}

describe('My Like Article tests', () => {
  it('should render the element without crashing', () => {
    const wrapper = shallow(<LikeArticle {...props} />);
    const component = wrapper.find('#likeArticleDiv');

    expect(component.length).toEqual(1);
  });


  it('should change state after receiveing props', () => {
    const wrapper = shallow(<LikeArticle {...props} />);

    wrapper.setProps({ articleLike: true, articleDislike: true })
    expect(wrapper.state('articleLike')).toEqual(true)
  });

  it('should change state change after clicking the like button', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<LikeArticle handleLike={mockClick} {...props} />);

    wrapper.find('#thumbs-up').simulate('click', { preventDefault() {} });
    wrapper.find('#thumbs-down').simulate('click', { preventDefault() {} });
    expect(mockClick.mock.calls.length).toEqual(0);
  });
});
