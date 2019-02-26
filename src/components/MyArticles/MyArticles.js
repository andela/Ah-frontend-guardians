import React, { Component } from "react";
import { connect } from "react-redux";
import { myArticles } from "../../actions/articleActions/ArticleActions";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import default_image from "../../images/default_image.png";
import "../../css/article.css";

export class MyArticles extends Component {
  componentWillMount() {
    this.props.myArticles();
  }

  render() {
    const articleItems = this.props.my_articles.map(article => (
      <div className="row flex-container" key={article.id}>
        <div className="col-md-4 text-center">
          <img src={default_image} alt="image" />
        </div>
        <div className="col-md-4">
          <h3>{article.title}</h3>
          <p className="desc">{article.description}</p>
          <p>
            by <span className="author">{article.author.username}</span> |
            <span className="read_time"> {article.read_time} min read</span>
          </p>
          <p>
            <span className="rating">Rating: </span>
            <span className="rating-value">{article.average_rating}</span>
          </p>
        </div>
        <div className="col-md-4">
          <div className="buttons mt-5">
            <DeleteButton
              id={article.id}
              slug={article.slug}
              triggerParentUpdate={this.updateMyArticles}
            />
            &nbsp;
            <EditButton article={article} id={article.id} slug={article.slug} />
          </div>
        </div>
      </div>
    ));
    return (
      <div id="parent">
        <div className="profileparent">{articleItems.length<1?`No Articles Published`: articleItems}</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
    my_articles: state.articleReducer.my_articles
  });

export default connect(
  mapStateToProps,
  { myArticles }
)(MyArticles);
