import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getFollowing } from '../../actions/userFollowActions/getFollowingActions';
import UserFollow from '../../components/FollowUser/UserFollow';

export class Following extends Component {
  state = {
    followingData: []
  }
  componentDidMount() {
    const { getFollowing } = this.props;
    getFollowing();
  }
  componentWillReceiveProps(nextProps) {
    const { following } = nextProps;
    this.setState({ followingData: following });
  }
  render() {
    const { followingData } = this.state;
    let i = 0;

    if (!Array.isArray(followingData) || !followingData.length) {
      return <div />;
    } else if (Array.isArray(followingData)) {
      return (
        <div>
          {followingData.map(followers => {
            return (
              <div>
                <UserFollow
                  key={i++}
                  Image={imageShow(followers.image)}
                  Username={followers.username}
                  Bio={followers.bio}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}
Following.propTypes = {
  getFollowing: propTypes.func,
  following: propTypes.shape([])
};
Following.defaultProps = {
  getFollowing: () => {},
  following: []
};
export const mapStateToProps = state => {
  return {
    following: state.follow.data
  };
};

export default connect(
  mapStateToProps,
  { getFollowing }
)(Following);
