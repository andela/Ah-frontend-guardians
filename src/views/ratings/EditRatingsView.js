import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getRating, updateRating } from '../../actions/ratings/ratingActions';
import StarRatingComponent from 'react-star-rating-component';

export class EditRatingsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: '',
      error: ''
    };
  }
  onStarClick = nextValue => {
    this.setState({ score: nextValue });
    const newSlug = this.props.slug;
    const updRating = {
      score: this.state.score
    };
    this.props.updateRating(updRating, newSlug);
  };

  componentDidMount() {
    this.props.getRating(this.props.slug);
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
          id="star-rating"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rating: state.ratingsReducer.rating
});

export default withRouter(
  connect(
    mapStateToProps,
    { updateRating, getRating }
  )(EditRatingsView)
);
