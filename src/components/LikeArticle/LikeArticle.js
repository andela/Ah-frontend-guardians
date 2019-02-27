import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  dislikeArticle,
  getDislikeStatus,
  getLikeStatus,
  getLikeCount,
  likeArticle
} from '../../actions/likeArticle/likeArticleAction';
import './style.css';

export class LikeArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleLike: false,
      articleDislike: false,
    };
  }

  componentWillMount() {
    this.props.getLikeCount(this.props.slug);
    this.props.getLikeStatus(this.props.slug);
    this.props.getDislikeStatus(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        articleLike: this.props.articleLike,
        articleDislike: this.props.articleDislike,
      });
    }
  }

  handleLike(e) {
    e.preventDefault();
    this.props.likeArticle(this.props.slug);
  }

  handleDislike(e) {
    e.preventDefault();
    this.props.dislikeArticle(this.props.slug);
  }

  render() {
    return <div id="likeArticleDiv">
        {this.props.articleLike === true
        ? (<i id="thumbs-up"
            className="fas fa-thumbs-up margin-1 green"
            onClick={this.handleLike.bind(this)} />)
            : (<i id="thumbs-up"
            className="far fa-thumbs-up margin-1"
            onClick={this.handleLike.bind(this)}
          />)}
        <a>{this.props.articleLikeCount}</a>
        {this.props.articleDislike === true
        ? (<i id="thumbs-down"
            className="fas fa-thumbs-down margin-1 red"
            onClick={this.handleDislike.bind(this)}
          />)
          : (<i id="thumbs-down"
            className="far fa-thumbs-down margin-1"
            onClick={this.handleDislike.bind(this)}
          />)}
        <a>{this.props.articleDislikeCount}</a>
      </div>
  }
}

export const mapStateToProps = state => ({
  articleLike: state.likeArticleReducer.articleLike,
  articleDislike: state.likeArticleReducer.articleDislike,
  articleLikeCount: state.likeArticleReducer.articleLikeCount,
  articleDislikeCount: state.likeArticleReducer.articleDislikeCount
});

export default withRouter(connect(
  mapStateToProps,
  {
    likeArticle,
    dislikeArticle,
    getLikeStatus,
    getDislikeStatus,
    getLikeCount
  }
)(LikeArticle));
