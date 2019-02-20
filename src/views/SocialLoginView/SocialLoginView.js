import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SocialAuthLogin from '../../components/SocialLogin/SocialAuthLogin';
import googleLoginAction from '../../actions/socialActions/googleAction';
import facebookLoginAction from '../../actions/socialActions/facebookAction';

export class SocialAuthView extends Component {
  handleFacebookReponse = response => {
    const { facebookLoginAction } = this.props;
    if (response.accessToken) {
      facebookLoginAction(response.accessToken);
    }
  };

  handleGoogleSuccess = response => {
    const { googleLoginAction } = this.props;
    if (response.tokenId) {
      googleLoginAction(response.tokenId);
    }
  };

  handleGoogleFailure = response => {
    const { googleLoginAction } = this.props;
    googleLoginAction(' Something went wrong');
  };

  componentWillReceiveProps(nextprops) {
    const { socialAuthState } = nextprops;

    if (socialAuthState) {
      localStorage.setItem('token', socialAuthState.token);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <SocialAuthLogin
          responseFacebook={this.handleFacebookReponse}
          googleResponseSuccess={this.handleGoogleSuccess}
          googleResponseFailure={this.handleGoogleFailure}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    socialAuthState: state.social.isAuthenticated
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { googleLoginAction, facebookLoginAction }
  )(SocialAuthView)
);
