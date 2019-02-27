import React, { Component } from "react";
import MyArticles from "../MyArticles/MyArticles";

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: true,
      bookmark: false,
      favourites: false
    };
  }

  handleClick(e) {
    this.setState({
      article: false,
      bookmark: false,
      favourites: false
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
          &nbsp;&nbsp;&nbsp;
          <span id="bookmark" onClick={this.handleClick.bind(this)}>
            Bookmarks
          </span>
          &nbsp;&nbsp;&nbsp;
          <span id="favourites" onClick={this.handleClick.bind(this)}>
            Favourites
          </span>
        </div>
        <div hidden={!this.state.article}>
          <MyArticles />
        </div>
        <div hidden={!this.state.bookmark} />
        <div hidden={!this.state.favourites} />
      </div>
    );
  }
}

export default Banner;
