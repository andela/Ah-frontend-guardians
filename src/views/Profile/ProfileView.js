import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import { NavBar } from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';
import signinAction from '../../action/actionCreator/login/loginCreator';

export class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <ProfileBanner />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  signin: state.signin
});

export default connect(mapStateToProps)(Profile);
