import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBookmarks, deleteBookmark } from '../../actions/bookmark/bookmarkAction'
import DeleteButton from "./DeleteBtn";
import { NavLink } from 'react-router-dom';
import default_image from "../../images/default_image.png";
import "../../css/article.css";

export class MyBookmarks extends Component {

    componentDidMount() {
        this.props.getAllBookmarks();
    }

    render() {
        const articleItems = this.props.bookmarks.map(article => (
            <div className="row flex-container" key={article.id}>
                <div className="col-md-4 text-center">
                    <img src={default_image} alt="image" />
                </div>
                <div className="col-md-4">
                    <h3>{article.title}</h3>
                    <a className="desc">{article.description}</a>
                    <a><p></p>
                        <NavLink to={`/article/${article.slug}`} activeClassName="active" className="textlink">
                            <span>View Article</span>
                        </NavLink>
                    </a>
                    <p></p>
                </div>
                <div className="col-md-4">
                    <div className="buttons mt-5">
                        <DeleteButton
                            id={article.id}
                            slug={article.slug}
                            triggerParentUpdate={this.updateMyArticles}
                            getAllBookmarks={this.props.getAllBookmarks}
                        />
                        &nbsp;
                    </div>
                </div>
            </div>
        ));
        return (
            <div id="parent">
                <div className="profileparent">{articleItems.length < 1 ? 'No Bookmarks Found' : articleItems}</div>
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    bookmarks: state.bookmarks.bookmarks,
})

export default connect(mapStateToProps, { getAllBookmarks, deleteBookmark })(MyBookmarks);