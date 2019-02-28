import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getFollowers } from '../../actions/userFollowActions/getFollowersActions';
import UserFollow from '../../components/FollowUser/UserFollow';

export class Followers extends Component {
  state = {
    followers: []
  };
  componentWillMount() {
    const { getFollowers } = this.props;
    getFollowers();
  }

  componentWillReceiveProps(nextProps) {
    const { followers } = nextProps;
    this.setState({ followers: followers });
  }

  render() {
    const { followers } = this.state;

    if (followers) {
      return followers.map(follower => {
        let i = 0;
        return (
          <UserFollow
            key={i++}
            image={imageShow(follower.image)}
            username={follower.username}
            bio={follower.bio}
          />
        );
      });
    } else {
      return <div />;
    }
  }
}
Followers.propTypes = {
  getFollowers: propTypes.func,
  followers: propTypes.shape([])
};
Followers.defaultProps = {
  getFollowers: () => {},
  followers: []
};
export const mapStateToProps = state => {
  return {
    followers: state.follow.followers
  };
};

export default connect(
  mapStateToProps,
  { getFollowers }
)(Followers);
