import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getReadingStats } from '../../actions/readingStats/readingStats';
import { username } from '../../actions/index';
import '../../css/readingStat.css';

export class ReadingStats extends Component {
  componentWillMount() {
    this.props.getReadingStats(username);
  }

  render() {
    let readingStats;
    let no_of_articles_read = 0;
    let total_read_time = 0;
    if (this.props.readingStats) {
      let id = 0;
      readingStats = this.props.readingStats.recent_articles.map(stat => (
        <div className="readingStatCard flex-container" key={id++}>
          <p>
            <h3>{stat.title}</h3>
          </p>
          <p>
            <span className="author">By {stat.author}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="read_time">{stat.read_time} min read</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="">
              <NavLink to={'article/' + stat.slug}>View Article</NavLink>
            </span>
          </p>
        </div>
      ));
      total_read_time = this.props.readingStats.total_read_time;
      no_of_articles_read = this.props.readingStats.no_of_articles_read;
    }

    return (
      <div id="readingStatsParent" className="readingStatsParent">
        <div className="">
          <h2 className="readingStatsCenter">Recent Articles Read</h2>
          <div>{readingStats}</div>
        </div>
        <div className="readingStatsContent">
          <div className="">
            You have read{' '}
            <a className="readingStatsReadTime">{no_of_articles_read}</a>{' '}
            articles
          </div>
          <div className="">
            Total read time:{' '}
            <a className="readingStatsReadTime">{total_read_time}</a> mins
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    readingStats: state.readingStatsReducer.readingStats
  };
};

export default connect(
  mapStateToProps,
  { getReadingStats }
)(ReadingStats);
