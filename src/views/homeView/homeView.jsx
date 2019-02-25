import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDataThunk } from '../../actions/ArticleActionCreator';
import * as Actions from '../../actions/ArticleActionCreator';
import defaultImage from '../../images/default_image.jpeg';
import '../../css/articlestyle.scss';
import { getAllArticles } from '../../actions/ArticleActionCreator';
import Home from '../../components/dashboard/HomeComponent';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';

export class HomeView extends Component {
  state = {
    goToArticles: false,
  };

  handleClick(e) {
    e.preventDefault();
    if (this.props.signin) {
    this.props.signin.success
      ? this.props.history.push('/articles')
      : this.props.history.push('/login');
    }
  }

  render() {
    const { goToArticles } = this.state;
    const { articles, error } = this.props;
    const homeProps = {
      articles,
      error,
    };

    return (
      <div>
        <NavBar />
        <section
          className="showbiz"
          style={{ backgroundImage: `url(${defaultImage})`, height: 271 }}
        >
          <div id="textOverlay" className="container mt-10">
            <div className="row">
              <div className="col mt-5 welocme_msg">
                <h2 id="welcome_header">Author's Haven </h2>
                <br />
                Home to Authors and readers alike <br />
                Are you a Author ? Write what you think <br /> Are you a Reader? Read what yopu like
              </div>
              <div className="col">
                <button
                  className="btn btn-primary float-right mt-5"
                  type="button"
                  id="createArticleButton"
                  onClick={this.handleClick.bind(this)}
                >
                  {' '}
                  Create an article{' '}
                </button>
              </div>
            </div>
          </div>
        </section>
        <div>{goToArticles ? <ArticleView {...articlesProps} /> : <Home {...homeProps} />}</div>
        <Footer />
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  articlesState: state.ArticleReducer,
  signin: state.signin,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...Actions,
      getAllArticles,
      getDataThunk,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
