import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBookmark, getBookmark, deleteBookmark } from '../../actions/bookmark/bookmarkAction'
import '../../css/article.css';
import { toast } from 'react-toastify';


export class Bookmark extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getBookmark(this.props.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && (nextProps.bookmarks !== this.props.bookmarks)) {
            this.props.getBookmark(this.props.slug);
        }
    }

    handleBookmark = (event) => {
        event.preventDefault();
        if (this.props.bookmark.bookmarked) {
            this.props.deleteBookmark(this.props.slug);
            setTimeout(this.props.getBookmark(this.props.slug), 500)
        } else {
            this.props.createBookmark(this.props.slug);
            setTimeout(this.props.getBookmark(this.props.slug), 500)
        }
    }

    render() {
        return (
            <div>
                <i id="bookmark" style={{ color: this.props.bookmark && (this.props.bookmark.bookmarked ? '#00add5' : 'white') }} onClick={this.handleBookmark} className="fas fa-bookmark fa-2x" />
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    bookmark: state.bookmark,
    bookmarks: state.bookmarks,
})

export default connect(mapStateToProps, { getBookmark, createBookmark, deleteBookmark })(Bookmark);
