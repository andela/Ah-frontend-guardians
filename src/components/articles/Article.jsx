import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleDataThunk } from '../../actions/ArticleActionCreator';
import { NavBar } from '../navBar/NavBar';
import Footer from '../Footer/Footer';
import renderHTML from 'react-render-html';
import PostComent from '../../components/views/commentsView/postComent'
import Bookmark from '../Bookmark/Bookmark'
import GetComments from '../views/commentsView/CommentGetView'
export class Article extends Component {
  componentDidMount() {
    if (this.props.match) {
      const slug = this.props.match.params.slug;

      this.props.getSingleDataThunk(slug);
      const {
        article: { body }
      } = this.props;
    }
  }

  render() {
    console.log(this.props.match.params.slug, "PROPSSSSSSS");
    console.log(this.props, "props Articles");
    
    if (this.props.articleReducer.article === undefined) return <div />;
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
        image_url
      }
    } = this.props.articleReducer;

    return (
      <div>
        <NavBar {...this.props} />
        <div id="singleArticle">
          <div id="authorColor">{author && author.username}</div>

          <div id="articleReadTime">{read_time + ' mins read'}</div>
          <div id="contentA">
            <div>
              <h2></h2>
            </div>
            <div>
              <h5>{description}</h5>
            </div>
            <div id="bodycolor">{renderHTML(body)}</div> <br />
          </div><br />
          <div><PostComent slug={this.props.match.params.slug}/></div>
         <div> <GetComments slug={this.props.match.params.slug} /></div>

          <div className="middle"><div id="tagstyle" className="btn btn-primary">{tags}</div><Bookmark slug={slug} /></div>        </div>
          
          {/* <Footer /> */}
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
      email: PropTypes.string
    })
  })
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
    author: { username: '', email: '' }
  }
};
export const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getSingleDataThunk }
)(Article);
