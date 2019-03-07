import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/ArticleActionCreator';
import defaultImage from '../../images/default_image.jpeg';
import '../../css/articlestyle.scss';
import { getAllArticles } from '../../actions/ArticleActionCreator';
import Home from '../../components/dashboard/HomeComponent';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';

export class HomeView extends Component {
  state = {
    goToArticles: false
  };

  handleClick(e) {
    e.preventDefault();
    if (this.props.signin) {
      this.props.signin.success
        ? this.props.history.push('/articles')
        : this.props.history.push('/login');
    }
  }
  getArticlesPage = url => {
    const {
      actions: { getPages }
    } = this.props;
    getPages(url);
  };
  render() {
    const { goToArticles } = this.state;
    const {
      articles,
      nextPage,
      prevPage,
      currentPage,
      actions,
      error
    } = this.props;
    const homeProps = {
      articles,
      nextPage,
      prevPage,
      currentPage,
      actions,
      error,
      getArticlesPage: this.getArticlesPage
    };
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <section
          className="showbiz"
          style={{
            backgroundPosition: 'inherit',
            backgroundImage: `url(${defaultImage})`,
            height: 271
          }}
        >
          <div id="textOverlay">
            <div>
              <h2 id="welcome_header">Author's Haven </h2>
              <br /> Home to Authors and readers alike <br />
              Are you a Author ? Write what you think <br /> Are you a Reader?
              Read what yopu like
            </div>
            <div>
              <p>
                {' '}
                <button
                  className="btn btn-primary float-right mt-5"
                  type="button"
                  id="createArticleButton"
                  onClick={this.handleClick.bind(this)}
                >
                  {' '}
                  Create an article{' '}
                </button>{' '}
              </p>
            </div>
          </div>
        </section>
        <div>
          {goToArticles ? (
            <ArticleView {...articlesProps} />
          ) : (
            <Home {...homeProps} />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  articlesState: state.ArticleReducer,
  signin: state.signin,
  nextPage: state.articleReducer.next,
  prevPage: state.articleReducer.previous
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...Actions,
      getAllArticles
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
