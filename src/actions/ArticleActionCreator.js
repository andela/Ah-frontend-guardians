import axios from 'axios';
export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const ERROR_OCCURRED = 'ERROR_OCCURRED';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const GET_ARTICLE = 'GET_ARTICLE';

const getDataThunk = () => dispatch => {
  axios
    .get(
      'https://ah-backend-guardians-staging.herokuapp.com/api/articles/?limit=6'
    )
    .then(res => {
      dispatch({
        type: GET_ALL_ARTICLES,
        articles: res.data.articles.results
      });
    })
    .catch(error => {
      dispatch(errorOccurred(error));
    });
};
const getSingleDataThunk = slug => dispatch => {
  axios
    .get(
      'https://ah-backend-guardians-staging.herokuapp.com/api/articles/' + slug
    )
    .then(response => {
      console.log('action creator', response.data.article);
      dispatch({
        type: GET_ARTICLE,
        article: response.data.article
      });
    })
    .catch(error => {
      dispatch(errorOccurred(error));
    });
};

const createArticle = ({ articles }) => ({ type: CREATE_ARTICLE, articles });
const getAllArticles = ({ articles }) => ({ type: GET_ALL_ARTICLES, articles });
const errorOccurred = errMsg => ({ type: ERROR_OCCURRED, errMsg });
const doNothing = msg => ({ type: DO_NOTHING, msg });
const getOneArticle = slug => ({ type: GET_ARTICLE, slug });
export {
  createArticle,
  getAllArticles,
  errorOccurred,
  doNothing,
  getDataThunk,
  getSingleDataThunk
};
