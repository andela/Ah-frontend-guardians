import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Article from './ArticleComponent';
import { connect } from 'react-redux';
import { getDataThunk } from '../../actions/ArticleActionCreator';


export class Home extends React.Component {
  render() {
    const { articleReducer, getArticle, error } = this.props;
    const articleList = articleReducer.articles || [];
    const articles = articleList.map((article, key) => (
      <Article getArticle={getArticle} article={article} key={key} />
    ));
    return (
      <div>
        <div>
          {error ? (
            <div>
              {error.articles && error.articles.detail}
              <small>...</small>
            </div>
          ) : (
            <Fragment>
              <div id="allArticles">{articles}</div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      body: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      author: PropTypes.object
    })
  ),
  getArticle: PropTypes.func.isRequired,
  error: PropTypes.string
};
Home.defaultProps = {
  articles: [],
  error: ''
};
export const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Home);
