import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBookmark, getBookmark, deleteBookmark } from '../../actions/bookmark/bookmarkAction'
import '../../css/article.css';


export class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarked: false
        }
    }

    componentDidMount() {
        this.props.getBookmark(this.props.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && (nextProps.bookmarks !== this.props.bookmarks)) {
            this.props.getBookmark(this.props.slug);
        }

        if (nextProps) {
            this.setState({ bookmarked: nextProps.bookmark && nextProps.bookmark.bookmarked });
        }
    }

    handleBookmark = (event) => {
        event.preventDefault();
        if (this.props.bookmark && this.props.bookmark.bookmarked) {
            this.props.deleteBookmark(this.props.slug);
        } else {
            this.props.createBookmark(this.props.slug);
        }
    }

    render() {
        return (
            <div>
                <i id="bookmark" style={{ color: this.state.bookmarked ? '#00add5' : 'white' }} onClick={this.handleBookmark} className="fas fa-bookmark fa-2x" />
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    bookmark: state.bookmark,
    bookmarks: state.bookmarks,
})

export default connect(mapStateToProps, { getBookmark, createBookmark, deleteBookmark })(Bookmark);
