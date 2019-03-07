import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteBookmark } from "../../actions/bookmark/bookmarkAction";

export class DeleteButton extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this bookmark!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        this.props.deleteBookmark(this.props.slug);
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
            value="Remove"
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteBookmark }
)(DeleteButton);
