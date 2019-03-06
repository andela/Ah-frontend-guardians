import React, { Component } from "react";
import MyArticles from "../MyArticles/MyArticles";
import ReadingStats from "../ReadingStats/ReadingStats";

import MyBookmarks from "../MyBookmarks/MyBookmarks";
export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: true,
      bookmarks: false,
      favourites: false,
      readingstats: false
    };
  }

  handleClick(e) {
    this.setState({
      article: false,
      bookmarks: false,
      favourites: false,
      readingstats: false
    });
    this.setState({
      [e.target.id]: true
    })
  }

  render() {
    return (
      <div id="parent" className="container">
        <div className="banner">
          <span id="article" style={{ color: this.state.article ? 'red' : '#25abd1' }} onClick={this.handleClick.bind(this)}>
            Articles
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span id="bookmarks" style={{ color: this.state.bookmarks ? 'red' : '#25abd1' }} onClick={this.handleClick.bind(this)}>
            Bookmarks
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span id="favourites" style={{ color: this.state.favourites ? 'red' : '#25abd1' }} onClick={this.handleClick.bind(this)}>
            Favourites
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span id="readingstats" style={{ color: this.state.readingstats ? 'red' : '#25abd1' }} onClick={this.handleClick.bind(this)}>
            Statistics
          </span>
        </div>
        <div hidden={!this.state.article}>
          <MyArticles />
        </div>
        <div hidden={!this.state.bookmarks} >
          <MyBookmarks />
        </div>
        <div hidden={!this.state.favourites} />
        <div hidden={!this.state.readingstats} >
          <ReadingStats />
        </div>
      </div>
    );
  }
}

export default Banner;
