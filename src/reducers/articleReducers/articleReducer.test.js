import articleReducer from './articleReducer';
import * as types from '../../actions/articleActions/types';

const initialState = {
  my_articles: [
    {
      slug: 'slug'
    },
    {
      slug: 'slug2'
    }
  ],
  delete_article: {},
  edit_article: {}
};

describe('create myarticles success', () => {
  it('should return all articles for a specific user', () => {
    const articles = [{ slug: 'slug2' }];
    const payload = { articles: { results: [{ slug: 'slug2' }] } };
    const action = {
      type: types.MY_ARTICLES_SUCCESS,
      payload
    };
    const newState = articleReducer(initialState, action);

    expect(newState.my_articles).toEqual(articles);
  });

  it('should delete an article from all articles', () => {
    const delete_article = {
      slug: 'slug2'
    };
    const action = {
      type: types.DELETE_ARTICLE_SUCCESS,
      payload: {
        slug: 'slug2'
      }
    };
    const newState = articleReducer(initialState, action);

    expect(newState.delete_article).toEqual(delete_article);
  });

  it('should edit an article', () => {
    const edit_article = {
      title: 'title',
      slug: 'slug3'
    };
    const action = {
      type: types.EDIT_ARTICLE_SUCCESS,
      payload: {
        title: 'title',
        slug: 'slug3'
      }
    };
    const newState = articleReducer(initialState, action);

    expect(newState.edit_article).toEqual(edit_article);
  });

  it('should return the default state', () => {
    const newState = articleReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });
  it('should return all articles on invokation of the GET_ALL_ARTICLES action type', () => {
    const state = { articles: [{ title: 'title 1' }] };

    const action = {
      type: 'GET_ALL_ARTICLES',
      articles: [
        {
          title: 'title 1'
        }
      ]
    };

    const newState = articleReducer(state, action);

    expect(newState.articles).toEqual(state.articles);
  });
});
