import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/update_article.css";
import ReactQuill from "react-quill";
import TagsInput from "react-tagsinput";
import { editArticle } from "../../actions/articleActions/ArticleActions";
import { NavBar } from "../navBar/NavBar";
import Footer from "../Footer/Footer";

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      body: "",
      image: "",
      slug: "",
      tags: [],
      edit_article: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.edit_article) {
      this.props.history.push("/profile");
    }
  }

  componentWillMount() {
    const slug = this.props.match.params.slug;

    const article = this.props.article.filter(article => article.slug === slug);

    this.setState({
      title: article[0].title,
      description: article[0].description,
      image: article[0].image,
      body: article[0].body,
      slug: article[0].slug,
      tags: article[0].tags
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = { article: this.state };

    this.props.editArticle(this.state.slug, payload);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleQuilChange(value) {
    this.setState({
      body: value
    });
  }

  handleTagsChange(tags) {
    this.setState({
      tags
    });
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <div className="container py-2 editparent">
          <form id="editForm" className="form" onSubmit={this.handleSubmit}>
            <p className="form-elements">Title:</p>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <p className="form-elements">Description:</p>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <ReactQuill
              id="body"
              className="body"
              name="body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleQuilChange.bind(this)}
            />
            <span>
              <TagsInput
                id="tags"
                value={this.state.tags}
                onChange={this.handleTagsChange}
              />
              <input
                className="save-changes-btn btn"
                type="submit"
                name="submit"
                value="Save Changes"
              />
            </span>
          </form>
        </div>
        <Footer className="foot" />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  edit_article: state.articleReducer.edit_article,
  article: state.articleReducer.my_articles,
  signin: state.signin
});

export default connect(
  mapStateToProps,
  { editArticle }
)(Articles);
