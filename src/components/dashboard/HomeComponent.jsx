import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './ArticleComponent';

export class Home extends React.Component {
  render() {
    const {
      articleReducer,
      getArticle,
      error,
      nextPage,
      prevPage,
      currentPage,
      getArticlesPage
    } = this.props;
    const articleList = articleReducer.articles || [];
    const articles = articleList.map((article, key) => (
      <Article getArticle={getArticle} article={article} key={key} />
    ));

    return (
      <div>
        {error ? (
          <div>
            {error.articles && error.articles.detail}
            <small>...</small>
          </div>
        ) : (
          <Fragment>
            <div id="allArticles">{articles}</div>
            <div className=" align-middle" id="pagnation">
              <div className="page">
                <button
                  type="button"
                  disabled={!prevPage}
                  id="prevPage"
                  className="btn btn-outline-primary"
                  onClick={() => getArticlesPage(prevPage)}
                >
                  {' '}
                  Prev{' '}
                </button>{' '}
                &nbsp; &nbsp; &nbsp;
                <button
                  type="button"
                  disabled={!nextPage}
                  id="nextPage"
                  className="btn btn-outline-primary"
                  onClick={() => getArticlesPage(nextPage)}
                >
                  Next{' '}
                </button>
              </div>
            </div>
          </Fragment>
        )}
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
      nextPage: PropTypes.string,
      prevPage: PropTypes.string,
      currentPage: PropTypes.number,
      getArticlesPage: PropTypes.func.isRequired,
      author: PropTypes.object
    })
  ),
  error: PropTypes.string
};
Home.defaultProps = {
  articles: [],
  error: ''
};
export const mapStateToProps = state => state;
export default connect(mapStateToProps)(Home);
