import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getDataThunk } from '../../actions/ArticleActionCreator';
import * as Actions from '../../actions/ArticleActionCreator';
import default_image from '../../images/default_image.jpeg';
import '../../css/articlestyle.scss';
import {
  createArticle,
  getAllArticles,
} from '../../actions/ArticleActionCreator';
import Home from '../../components/dashboard/HomeComponent';
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/Footer/Footer'

export class HomeView extends Component {
  state = {
    goToArticles: false,
    viewArticle: false,
    keyword: '',
    author: '',
    loader: { success: false, loading: false },
  };

  singleArticlePage = (timeout, bool) => {
    setTimeout(() => {
      this.setState({ viewArticle: bool });
      this.isLoading(false);
    }, timeout);
  };

  changeToCreateArticle = bool => (e) => {
    e.preventDefault();
    this.setState({
      goToArticles: bool,
    });
    this.singleArticlePage(0, false);
  };

  getArticle = (slug) => {
    const { actions } = this.props;

    actions.getOneArticle(slug);
    actions.getSingleDataThunk(`articles/${slug}/`, getOneArticle(slug));
    this.singleArticlePage(0, true);
    this.setState({ goToArticles: true });
  };

  getArticlesPage = (url) => {
    const {
      actions: { getDataThunk },
    } = this.props;

    getDataThunk(url, getAllArticles);
  };

  render() {
    const { viewArticle, goToArticles, loader } = this.state;
    const { articles, actions, error } = this.props;
    const homeProps = {
      getArticle: this.getArticle,
      articles,
      getArticlesPage: this.getArticlesPage,
      error,
    };
    const articlesProps = {
      viewArticle,
      isLoading: this.isLoading,
      backToHome: this.changeToCreateArticle(false),
      singleArticlePage: this.singleArticlePage,

      ...actions,
    };

    return (
      <div>
      <NavBar/>
        <section
          className="showbiz"
          style={{ backgroundImage: `url(${default_image})`, height: 271 }}
        >
          <ul id="textOverlay">
            <li align="left">
              <strong>Author's Haven </strong>
              <br />
              Home to Authors and readers alike <br />
              Are you a Author ? Write what you think <br /> Are you a Reader?
              Read what yopu like
            </li>
            <li align="right">
              <Link type="button" to="/articles/">
                Create an article
              </Link>
            </li>
          </ul>
        </section>
        <div>
          {goToArticles ? (
            <ArticleView {...articlesProps} />
          ) : (
            <Home {...homeProps} />
          )}
        </div>
        <Footer/>

      </div>
    );
  }
}

export const mapStateToProps = state => ({
    articlesState: state.ArticleReducer,
  });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...Actions,
      getAllArticles,
      createArticle,
      getDataThunk,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
