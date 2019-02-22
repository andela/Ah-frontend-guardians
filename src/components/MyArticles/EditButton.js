import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = `article/${this.props.slug}/edit`;
    return (
      <div>
        <form>
          <NavLink to={url} article={this.props.article}>
            <input
              type="submit"
              className="btn btn-edit"
              value="Edit Article"/>
          </NavLink>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    edit_article: state.articleReducer.edit_article
  };
};

export default connect(mapStateToProps)(EditButton);
