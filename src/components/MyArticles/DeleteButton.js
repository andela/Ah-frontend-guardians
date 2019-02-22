import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteArticle } from "../../actions/articleActions/ArticleActions";

export class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be to recover this article!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.props.deleteArticle(this.props.slug);
      }
    });
  }

  render() {
    return (
      <div>
        <form id="deleteButtonForm" onSubmit={this.handleSubmit}>
          <input
            type="submit"
            className="btn btn-delete"
            value="Delete"
          />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    delete_articles: state.articleReducer.delete_article
  });

export default connect(
  mapStateToProps,
  { deleteArticle }
)(DeleteButton);
