import React, { Component } from "react";
import MyArticles from "../MyArticles/MyArticles";
import ReadingStats from "../ReadingStats/ReadingStats";

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: true,
      bookmark: false,
      favourites: false,
      readingstats: false
    };
  }

  handleClick(e) {
    this.setState({
      article: false,
      bookmark: false,
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
          <span id="article" onClick={this.handleClick.bind(this)}>
            Articles
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span id="bookmarks" onClick={this.handleClick.bind(this)}>
            Bookmarks
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span id="favourites" onClick={this.handleClick.bind(this)}>
            Favourites
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span id="readingstats" onClick={this.handleClick.bind(this)}>
            Statistics
          </span>
        </div>
        <div hidden={!this.state.article}>
          <MyArticles />
        </div>
        <div hidden={!this.state.bookmark} >
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
