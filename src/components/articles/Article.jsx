import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleDataThunk } from '../../actions/ArticleActionCreator';
import CommentsList from '../views/commentsView/CommentsListView';
import GetComments from "../views/commentsView/CommentGetView"
import { getcommentAction } from '../../action/actionCreator/getCommentAction'

export class Article extends Component {
  state = {
    commentstate: '',
  };

  // const vv = getcommentAction;
  componentDidMount() {
    console.log(this.props, "GETPROPS");

    const slug = this.props.match.params.slug;
    console.log("SLUG FOR THE COMMENT",this.props.match.params.slug);
    this.props.getSingleDataThunk(slug);
    this.props.getcommentAction(slug);
    const {
      article: { body },
    } = this.props;
  }


  render() {
    if (this.props.articleReducer.article === undefined) return <div />;
    // console.log(this.props.articleReducer.article);
    const {
      article: {
        author,
        title,
        body,
        description,
        read_time,
        slug,
        created_at,
        updated_at,
        tags,
        image_url,
      },
    } = this.props.articleReducer;

return (
      <div id="singleArticle">
        <div>Author: {author && author.username}</div>
        <div>Read Time: {read_time}</div>
        <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <h3>{description}</h3>
          </div>
          <div>{body}</div> <br />
          <div>Created At: {created_at}</div>
          <div>Updated At: {updated_at}</div>
          <div>Tags: {tags}</div>
          <div>
            <CommentsList slug={this.props.match.params.slug}/>
          </div>
          <div>
            <GetComments slug={this.props.match.params.slug} />
          </div>
        </div>
      </div>
    );
  }
}
Article.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    image_url: PropTypes.string,
    author: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
    }),
  }),
};
Article.defaultProps = {
  article: {
    slug: '',
    title: '',
    description: '',
    body: '',
    created_at: '',
    updated_at: '',
    image_url: null,
    author: { username: '', email: '' },
  },
};
export const mapStateToProps = state => state

export default connect(
  mapStateToProps,
  { getSingleDataThunk, getcommentAction },
)(Article);
