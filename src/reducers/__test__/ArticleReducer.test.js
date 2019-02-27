import react from 'react';
import articleReducer from '../articleReducers/articleReducer';
import { shallow } from 'enzyme';
import {
  CREATE_ARTICLE,
  GET_ARTICLE
} from '../../actions/ArticleActionCreator';
import Article from '../../components/dashboard/ArticleComponent';

const initState = {};

describe('Article Reducer', () => {
  it('should be able to get an article', () => {
    const action = {
      type: 'GET_ARTICLE',
      article: {}
    };
    
    const newState = articleReducer(initState, action);
    expect(newState).toEqual({ article: {} });
  });
  it('should return the default state',()=>{
      const newState= articleReducer(initState, {});
      expect(newState).toEqual(initState);
  })
});
