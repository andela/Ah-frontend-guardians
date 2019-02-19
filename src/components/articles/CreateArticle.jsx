import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
const token = localStorage.getItem('user');
import { CREATE_ARTICLE } from '../../actions/ArticleActionCreator';
import ReactQuill from 'react-quill'; // ES6
import TagsInput from 'react-tagsinput';

var headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};
export const createArticleAction = data => dispatch => {
  return axios
    .post(
      'https://ah-backend-guardians-staging.herokuapp.com/api/articles/',
      data,
      { headers: headers }
    )
    .then(res => {
      if (res.status === 201) {
        dispatch({
          type: CREATE_ARTICLE,
          article: res.data
        });
      }
    })
    .catch(error => {
      dispatch(errorOccurred(error));
    });
};

export class CreateArticle extends React.PureComponent {
  state = {
    title: '',
    body: '',
    description: '',
    tags: []
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.articleReducer) {
      this.props.history.push('/');
    }
  }

  handleCreate = e => {
    e.preventDefault();
    const data = {};
    this.props.createArticleAction(this.state);
  };
  handleChangeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleChange = value => {
    this.setState({
      body: value
    });
  };
  handleChangeTag = value => {
    this.setState({
      tags: value
    });
  };
  render() {
    return (
      <div id="articleform">
        <form onSubmit={this.handleCreate}>
          <div>
            <input
              name="title"
              type="text"
              id="title"
              onChange={this.handleChangeValue}
              required
              placeholder="Title..."
            />
          </div>
          <div>
            <input
              name="description"
              type="text"
              id="description"
              onChange={this.handleChangeValue}
              required
              placeholder="Description..."
            />
          </div>
          <div>
            <ReactQuill
              id="body"
              value={this.state.body}
              name="body"
              placeholder="Body..."
              onChange={this.handleChange}
            />
          </div>

          <div>
            <TagsInput
              value={this.state.tags}
              name="tag"
              onChange={this.handleChangeTag}
            />
          </div>
          <button type="submit" id="post">
            Publish
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}
CreateArticle.propTypes = {
  handleChangeValue: PropTypes.func,
  handleCreate: PropTypes.func
};
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { createArticleAction }
)(CreateArticle);
