import React, { Component } from 'react';
import NavBar, { MapStateToProps } from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { filterArticle } from '../../actions/articleActions/ArticleActions';
import SearchForm from '../../components/search/SearchForm';
import SearchData from '../../components/search/SearchData';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

export class SearchArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: ''
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  hanleSubmit = e => {
    e.preventDefault();
    const param = this.state.searchParam;

    {
      param.length > 1
        ? this.props.filterArticle(param)
        : toast.error('Please search for an article');
    }
  };
  render() {
    const { searchParam } = this.state;
    const { searchArticle } = this.props;
    return (
      <div>
        <NavBar />
        <SearchForm
          searchParam={searchParam}
          onChange={this.onChange}
          onSubmit={this.hanleSubmit}
        />
        {searchArticle.length > 0 ? (
          searchArticle.map(article => (
            <SearchData
              key={article.id}
              title={article.title}
              username={article.author.username}
              readTime={article.read_time}
              rating={article.average_rating}
              slug={article.slug}
            />
          ))
        ) : (
          <div className="container" />
        )}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchArticle: state.articleReducer.searchArticles
});

export default connect(
  mapStateToProps,
  { filterArticle }
)(SearchArticleView);
