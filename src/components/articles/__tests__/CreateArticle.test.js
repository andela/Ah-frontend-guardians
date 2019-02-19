import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticle } from '../CreateArticle';
import { mapStateToProps } from '../Article';

// eslint-disable-next-line max-lines-per-function
describe('Create Article', () => {
  let wrapper;
  const historyMock = { push: jest.fn() };
  const mockCreate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CreateArticle createArticleAction={mockCreate} history={historyMock} />,
    );
  });
  afterEach(() => {
    mockCreate.mock.calls = [];
  });
  describe('When form is submitted', () => {
    it('should mock a create article function', () => {
      wrapper.find('#title').simulate('change', {
        target: { name: 'title', value: 'How are you' },
      });
      wrapper.find('#body').simulate('change', {
        target: { name: 'body', value: 'why are asking me?' },
      });
      wrapper.find('#description').simulate('change', {
        target: { name: 'description', value: 'Any way let me answer you' },
      });
      wrapper.find('form').simulate('submit', { preventDefault() {} });
      expect(mockCreate.mock.calls[0][0]).toEqual({
        body: { target: { name: 'body', value: 'why are asking me?' } },
        tags: [],
        description: 'Any way let me answer you',
        title: 'How are you',
      });
    });
    it('mapStateToProps should return the right value', () => {
      const mockedState = {
        title: 'fahad',
      };
      const state = mapStateToProps(mockedState);

      expect(state).toEqual({ "title": "fahad" });
    });
     it('should will recieve props', () => {
      wrapper.setProps({ title: 'your welcome' });
      expect(wrapper.state('title')).toEqual('your welcome');
    });
    it('should will recieve props', () => {
      wrapper
        .find('#body')
        .simulate('change', { target: { name: 'body', value: 'mill' } });
      wrapper.find('form').simulate('submit', { preventDefault() {} });
      expect(mockCreate.mock.calls[0][0]).toEqual({
        body: { target: { name: 'body', value: 'mill' } },
        description: '',
        tags: [],
        title: '',
      });
    });
  });
});
